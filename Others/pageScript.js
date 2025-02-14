!function pageScript() {
  let speedConfig = {
    speed: 1.0,
    cbSetIntervalChecked: true,
    cbSetTimeoutChecked: true,
    cbPerformanceNowChecked: true,
    cbDateNowChecked: true,
    cbRequestAnimationFrameChecked: false,
  };

  const emptyFunction = () => {};

  const originalClearInterval = window.clearInterval;
  const originalclearTimeout = window.clearTimeout;

  const originalSetInterval = window.setInterval;
  const originalSetTimeout = window.setTimeout;

  const originalPerformanceNow = window.performance.now.bind(
    window.performance
  );

  const originalDateNow = Date.now;

  const originalRequestAnimationFrame = window.requestAnimationFrame;

  let timers = [];
  const reloadTimers = () => {
    console.log(timers);
    const newtimers = [];
    timers.forEach((timer) => {
      originalClearInterval(timer.id);
      if (timer.customTimerId) {
        originalClearInterval(timer.customTimerId);
      }
      if (!timer.finished) {
        const newTimerId = originalSetInterval(
          timer.handler,
          speedConfig.cbSetIntervalChecked
            ? timer.timeout / speedConfig.speed
            : timer.timeout,
          ...timer.args
        );
        timer.customTimerId = newTimerId;
        newtimers.push(timer);
      }
    });
    timers = newtimers;
  };

  window.addEventListener("message", (e) => {
    if (e.data.command === "setSpeedConfig") {
      speedConfig = e.data.config;
      reloadTimers();
    }
  });

  window.postMessage({ command: "getSpeedConfig" });

  window.clearInterval = (id) => {
    originalClearInterval(id);
    timers.forEach((timer) => {
      if (timer.id == id) {
        timer.finished = true;
        if (timer.customTimerId) {
          originalClearInterval(timer.customTimerId);
        }
      }
    });
  };

  window.clearTimeout = (id) => {
    originalclearTimeout(id);
    timers.forEach((timer) => {
      if (timer.id == id) {
        timer.finished = true;
        if (timer.customTimerId) {
          originalclearTimeout(timer.customTimerId);
        }
      }
    });
  };

  window.setInterval = (handler, timeout, ...args) => {
    console.log("timeout  ", timeout);
    if (!timeout) timeout = 0;
    const id = originalSetInterval(
      handler,
      speedConfig.cbSetIntervalChecked ? timeout / speedConfig.speed : timeout,
      ...args
    );
    timers.push({
      id: id,
      handler: handler,
      timeout: timeout,
      args: args,
      finished: false,
      customTimerId: null,
    });
    return id;
  };

  window.setTimeout = (handler, timeout, ...args) => {
    if (!timeout) timeout = 0;
    return originalSetTimeout(
      handler,
      speedConfig.cbSetTimeoutChecked ? timeout / speedConfig.speed : timeout,
      ...args
    );
  };

  // performance.now
  (function () {
    let performanceNowValue = null;
    let previusPerformanceNowValue = null;
    window.performance.now = () => {
      const originalValue = originalPerformanceNow();
      if (performanceNowValue) {
        performanceNowValue +=
          (originalValue - previusPerformanceNowValue) *
          (speedConfig.cbPerformanceNowChecked ? speedConfig.speed : 1);
      } else {
        performanceNowValue = originalValue;
      }
      previusPerformanceNowValue = originalValue;
      return Math.floor(performanceNowValue);
    };
  })();

  // Date.now
  (function () {
    let dateNowValue = null;
    let previusDateNowValue = null;
    Date.now = () => {
      const originalValue = originalDateNow();
      if (dateNowValue) {
        dateNowValue +=
          (originalValue - previusDateNowValue) *
          (speedConfig.cbDateNowChecked ? speedConfig.speed : 1);
      } else {
        dateNowValue = originalValue;
      }
      previusDateNowValue = originalValue;
      return Math.floor(dateNowValue);
    };
  })();

  // requestAnimationFrame
  (function () {
    let dateNowValue = null;
    let previusDateNowValue = null;
    const callbackFunctions = [];
    const callbackTick = [];
    const newRequestAnimationFrame = (callback) => {
      return originalRequestAnimationFrame((timestamp) => {
        const originalValue = originalDateNow();
        if (dateNowValue) {
          dateNowValue +=
            (originalValue - previusDateNowValue) *
            (speedConfig.cbRequestAnimationFrameChecked
              ? speedConfig.speed
              : 1);
        } else {
          dateNowValue = originalValue;
        }
        previusDateNowValue = originalValue;

        const dateNowValue_MathFloor = Math.floor(dateNowValue);

        const index = callbackFunctions.indexOf(callback);
        let tickFrame = null;
        if (index == -1) {
          callbackFunctions.push(callback);
          callbackTick.push(0);
          callback(dateNowValue_MathFloor);
        } else if (speedConfig.cbRequestAnimationFrameChecked) {
          tickFrame = callbackTick[index];
          tickFrame += speedConfig.speed;

          if (tickFrame >= 1) {
            while (tickFrame >= 1) {
              callback(dateNowValue_MathFloor);
              window.requestAnimationFrame = emptyFunction;
              tickFrame -= 1;
            }
            window.requestAnimationFrame = newRequestAnimationFrame;
          } else {
            window.requestAnimationFrame(callback);
          }
          callbackTick[index] = tickFrame;
        } else {
          callback(dateNowValue_MathFloor);
        }
      });
    };
    window.requestAnimationFrame = newRequestAnimationFrame;
  })();
}()
//# sourceURL=pageScript.js