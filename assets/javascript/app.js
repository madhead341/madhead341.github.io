class _app {
  constructor() {
    this.id = 0;
    this.videoElement = null;
    this.audioElement = null;
    this.musicVolume = 0.12;
    this.musicFadeIn = 4000;
    this.skippedIntro = false;
    this.backgroundToggler = false;
    this.shouldIgnoreVideo = false;
    this.effects = ['bounce', 'flash', 'pulse', 'rubberBand', 'shake', 'swing', 'tada', 'wobble', 'jello'];
    this.brandDescription = ['e-criminal', 'ceo', 'btc', 'Sexualize#0001', 'madhead341.github.io', 'e-crime', '💳','e-criminal', 'ceo', 'btc', 'Sexualize#0001', 'losr.is-a.dev', 'e-crime', '💳','e-criminal', 'ceo', 'btc', 'Sexualize#0001', 'losr.is-a.dev', 'e-crime', '💳','e-criminal', 'ceo', 'btc', 'Sexualize#0001', 'losr.is-a.dev', 'e-crime', '💳','e-criminal', 'ceo', 'btc', 'Sexualize#0001', 'losr.is-a.dev', 'e-crime', '💳','e-criminal', 'ceo', 'btc', 'Sexualize#0001', 'losr.is-a.dev', 'e-crime', '💳','e-criminal', 'ceo', 'btc', 'Sexualize#0001', 'losr.is-a.dev', 'e-crime', '💳','e-criminal', 'ceo', 'btc', 'Sexualize#0001', 'losr.is-a.dev', 'e-crime', '💳','e-criminal', 'ceo', 'btc', 'Sexualize#0001', 'losr.is-a.dev', 'e-crime', '💳','e-criminal', 'ceo', 'btc', 'Sexualize#0001', 'losr.is-a.dev', 'e-crime', '💳','e-criminal', 'ceo', 'btc', 'Sexualize#0001', 'losr.is-a.dev', 'e-crime', '💳','e-criminal', 'ceo', 'btc', 'Sexualize#0001', 'losr.is-a.dev', 'e-crime', '💳','e-criminal', 'ceo', 'btc', 'Sexualize#0001', 'losr.is-a.dev', 'e-crime', '💳','e-criminal', 'ceo', 'btc', 'Sexualize#0001', 'losr.is-a.dev', 'e-crime', '💳','e-criminal', 'ceo', 'btc', 'Sexualize#0001', 'losr.is-a.dev', 'e-crime', '💳','e-criminal', 'ceo', 'btc', 'Sexualize#0001', 'losr.is-a.dev', 'e-crime', '💳'];
  }

  processBrandDescription() {
    let index = 0;

    const intervalId = setInterval(() => {
      const description = this.brandDescription[index];
      this.printDescription(description);

      index = this.getNextIndex(index);
    }, 1000);
  }

  printDescription(description) {
    if (description) {
      console.log();
    }
  }

  getNextIndex(currentIndex) {
    let nextIndex = currentIndex + 1;
    if (nextIndex >= this.brandDescription.length) {
      nextIndex = 0;
    }
    return nextIndex;
  }

  titleChanger = (text, delay) => {
    if (!text) return;

    delay = delay || 2000;

    let counter = 0;

    setInterval(() => {
      if (counter < text.length) document.title = text[counter++];
      else document.title = text[(counter = 0)];
    }, delay);
  };

  iconChanger = (urls, delay) => {
    if (!urls) return;

    delay = delay || 2000;

    let counter = 0;

    setInterval(() => {
      if (counter < urls.length) {
        const link = document.querySelector("link[rel*='icon']") || document.createElement('link');

        link.type = 'image/x-icon';
        link.rel = 'shortcut icon';
        link.href = urls[counter];

        document.getElementsByTagName('head')[0].appendChild(link);
      } else counter = 0;

      ++counter;
    }, delay);
  };
}

const app = new _app();
app.processBrandDescription();
