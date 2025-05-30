function switchTab(tabName) {
    const tabContents = document.querySelectorAll('.tab-content');
    const tabItems = document.querySelectorAll('.tab-item');

    tabContents.forEach(content => content.classList.remove('active'));
    tabItems.forEach(item => item.classList.remove('active'));

    document.getElementById(`${tabName}-tab`).classList.add('active');

    tabItems.forEach(item => {
        if (item.textContent.trim().toLowerCase().includes(tabName)) {
            item.classList.add('active');
        }
    });
}

function toggleMethod(element) {
    if (!event.target.classList.contains('copy-button')) {
        element.classList.toggle('expanded');
    }
}

function uploadFile(event) {
    const file = event.target.files[0];
    if (file && file.type === 'text/plain') {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('inputText').value = e.target.result;
            processAll();
        };
        reader.readAsText(file);
    } else {
        alert('Please select a valid text file (.txt)');
    }
}

function clearInput() {
    document.getElementById('inputText').value = '';
    processAll();
}

function copyToClipboard(elementId) {
    const element = document.getElementById(elementId);
    const copyButton = element.querySelector('.copy-button');
    const textToCopy = element.textContent.replace('Copy', '').replace('Copied!', '').trim();
    
    if (textToCopy && !textToCopy.includes('will appear here')) {
        navigator.clipboard.writeText(textToCopy).then(() => {
            const originalText = copyButton.textContent;
            copyButton.textContent = 'Copied!';
            setTimeout(() => {
                copyButton.textContent = originalText;
            }, 2000);
        });
    }
}

function addCopyButtonsToOutputs() {
    const outputs = document.querySelectorAll('.method-output');
    outputs.forEach(output => {
        if (!output.querySelector('.copy-button')) {
            const button = document.createElement('button');
            button.className = 'copy-button';
            button.textContent = 'Copy';
            button.onclick = () => copyToClipboard(output.id);
            output.appendChild(button);
        }
    });
}

function encodeURL(text) {
    return encodeURIComponent(text);
}

function decodeURL(text) {
    try {
        return decodeURIComponent(text);
    } catch (e) {
        return 'Invalid URL encoding';
    }
}

function encodeHTML(text) {
    return text.replace(/[&<>"']/g, function(match) {
        const escapeMap = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#39;'
        };
        return escapeMap[match];
    });
}

function encodeHTMLFull(text) {
    return text.split('').map(char => {
        const code = char.charCodeAt(0);
        return code > 127 || '&<>"\''.includes(char) ? `&#${code};` : char;
    }).join('');
}

function decodeHTML(text) {
    const textarea = document.createElement('textarea');
    textarea.innerHTML = text;
    return textarea.value;
}

function encodeUnicodeEscape(text) {
    return text.split('').map(char => {
        const code = char.charCodeAt(0);
        return code > 127 ? `\\u${code.toString(16).padStart(4, '0')}` : char;
    }).join('');
}

function decodeUnicodeEscape(text) {
    return text.replace(/\\u([0-9a-fA-F]{4})/g, (match, code) => {
        return String.fromCharCode(parseInt(code, 16));
    });
}

function encodeBase64(text) {
    return btoa(unescape(encodeURIComponent(text)));
}

function decodeBase64(text) {
    try {
        return decodeURIComponent(escape(atob(text)));
    } catch (e) {
        return 'Invalid Base64 encoding';
    }
}

function encodeBase32(text) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567';
    let result = '';
    let bits = 0;
    let value = 0;
    
    for (let i = 0; i < text.length; i++) {
        value = (value << 8) | text.charCodeAt(i);
        bits += 8;
        
        while (bits >= 5) {
            result += alphabet[(value >>> (bits - 5)) & 31];
            bits -= 5;
        }
    }
    
    if (bits > 0) {
        result += alphabet[(value << (5 - bits)) & 31];
    }
    
    while (result.length % 8 !== 0) {
        result += '=';
    }
    
    return result;
}

function decodeBase32(text) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567';
    const cleanText = text.replace(/=/g, '').toUpperCase();
    let result = '';
    let bits = 0;
    let value = 0;
    
    for (let i = 0; i < cleanText.length; i++) {
        const index = alphabet.indexOf(cleanText[i]);
        if (index === -1) return 'Invalid Base32 encoding';
        
        value = (value << 5) | index;
        bits += 5;
        
        if (bits >= 8) {
            result += String.fromCharCode((value >>> (bits - 8)) & 255);
            bits -= 8;
        }
    }
    
    return result;
}

function getTextBytes(text) {
    const encoding = document.getElementById('encodingSelect').value;
    if (encoding === 'utf16') {
        const bytes = [];
        for (let i = 0; i < text.length; i++) {
            const code = text.charCodeAt(i);
            bytes.push(code & 0xFF, (code >> 8) & 0xFF);
        }
        return new Uint8Array(bytes);
    } else {
        return new TextEncoder().encode(text);
    }
}

function getBytesAsText(bytes) {
    const encoding = document.getElementById('encodingSelect').value;
    if (encoding === 'utf16') {
        let result = '';
        for (let i = 0; i < bytes.length; i += 2) {
            if (i + 1 < bytes.length) {
                const code = bytes[i] | (bytes[i + 1] << 8);
                result += String.fromCharCode(code);
            }
        }
        return result;
    } else {
        return new TextDecoder().decode(bytes);
    }
}

function encodeHex(text) {
    return Array.from(getTextBytes(text))
        .map(byte => byte.toString(16).padStart(2, '0'))
        .join('');
}

function decodeHex(text) {
    try {
        const cleanText = text.replace(/\s/g, '');
        if (cleanText.length % 2 !== 0) return 'Invalid hex string';
        
        const bytes = [];
        for (let i = 0; i < cleanText.length; i += 2) {
            bytes.push(parseInt(cleanText.substr(i, 2), 16));
        }
        return getBytesAsText(new Uint8Array(bytes));
    } catch (e) {
        return 'Invalid hex encoding';
    }
}

function encodeBinary(text) {
    return Array.from(getTextBytes(text))
        .map(byte => byte.toString(2).padStart(8, '0'))
        .join(' ');
}

function decodeBinary(text) {
    try {
        const binaryGroups = text.split(/\s+/).filter(group => group);
        const bytes = binaryGroups.map(binary => parseInt(binary, 2));
        return getBytesAsText(new Uint8Array(bytes));
    } catch (e) {
        return 'Invalid binary encoding';
    }
}

function encodeOctal(text) {
    return Array.from(getTextBytes(text))
        .map(byte => byte.toString(8).padStart(3, '0'))
        .join(' ');
}

function decodeOctal(text) {
    try {
        const octalGroups = text.split(/\s+/).filter(group => group);
        const bytes = octalGroups.map(octal => parseInt(octal, 8));
        return getBytesAsText(new Uint8Array(bytes));
    } catch (e) {
        return 'Invalid octal encoding';
    }
}

function encodeASCII85(text) {
    let result = '';
    const bytes = getTextBytes(text);
    
    for (let i = 0; i < bytes.length; i += 4) {
        let chunk = 0;
        let chunkSize = Math.min(4, bytes.length - i);
        
        for (let j = 0; j < 4; j++) {
            chunk = chunk * 256 + (j < chunkSize ? bytes[i + j] : 0);
        }
        
        if (chunk === 0 && chunkSize === 4) {
            result += 'z';
        } else {
            let encoded = '';
            for (let k = 0; k < 5; k++) {
                encoded = String.fromCharCode(33 + (chunk % 85)) + encoded;
                chunk = Math.floor(chunk / 85);
            }
            result += encoded.substring(0, chunkSize + 1);
        }
    }
    
    return result;
}

function decodeASCII85(text) {
    try {
        let result = '';
        const cleanText = text.replace(/z/g, '!!!!!');
        
        for (let i = 0; i < cleanText.length; i += 5) {
            let chunk = 0;
            let chunkSize = Math.min(5, cleanText.length - i);
            
            for (let j = 0; j < chunkSize; j++) {
                chunk = chunk * 85 + (cleanText.charCodeAt(i + j) - 33);
            }
            
            for (let k = 0; k < chunkSize - 1; k++) {
                result += String.fromCharCode((chunk >>> ((3 - k) * 8)) & 255);
            }
        }
        
        return result;
    } catch (e) {
        return 'Invalid ASCII85 encoding';
    }
}


function rot13(text) {
    return text.replace(/[a-zA-Z]/g, function(char) {
        const start = char <= 'Z' ? 65 : 97;
        return String.fromCharCode(((char.charCodeAt(0) - start + 13) % 26) + start);
    });
}

function caesarCipher(text, shift) {
    return text.replace(/[a-zA-Z]/g, function(char) {
        const start = char <= 'Z' ? 65 : 97;
        return String.fromCharCode(((char.charCodeAt(0) - start + shift + 26) % 26) + start);
    });
}

function atbash(text) {
    return text.replace(/[a-zA-Z]/g, function(char) {
        if (char <= 'Z') {
            return String.fromCharCode(90 - (char.charCodeAt(0) - 65));
        } else {
            return String.fromCharCode(122 - (char.charCodeAt(0) - 97));
        }
    });
}

function encodeQuotedPrintable(text) {
    return text.replace(/[^\x20-\x7E]|=/g, function(char) {
        return '=' + char.charCodeAt(0).toString(16).toUpperCase().padStart(2, '0');
    });
}

function decodeQuotedPrintable(text) {
    return text.replace(/=([0-9A-F]{2})/g, function(match, hex) {
        return String.fromCharCode(parseInt(hex, 16));
    });
}

const morseCode = {
    'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.',
    'G': '--.', 'H': '....', 'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..',
    'M': '--', 'N': '-.', 'O': '---', 'P': '.--.', 'Q': '--.-', 'R': '.-.',
    'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-',
    'Y': '-.--', 'Z': '--..', '0': '-----', '1': '.----', '2': '..---',
    '3': '...--', '4': '....-', '5': '.....', '6': '-....', '7': '--...',
    '8': '---..', '9': '----.', ' ': '/'
};

const reverseMorseCode = Object.fromEntries(
    Object.entries(morseCode).map(([key, value]) => [value, key])
);

function encodeMorse(text) {
    return text.toUpperCase().split('').map(char => morseCode[char] || char).join(' ');
}

function decodeMorse(text) {
    return text.split(' ').map(code => reverseMorseCode[code] || code).join('');
}

function crc32(text) {
    const crcTable = [];
    for (let i = 0; i < 256; i++) {
        let crc = i;
        for (let j = 0; j < 8; j++) {
            crc = (crc & 1) ? (0xEDB88320 ^ (crc >>> 1)) : (crc >>> 1);
        }
        crcTable[i] = crc;
    }
    
    let crc = 0 ^ (-1);
    for (let i = 0; i < text.length; i++) {
        crc = (crc >>> 8) ^ crcTable[(crc ^ text.charCodeAt(i)) & 0xFF];
    }
    return ((crc ^ (-1)) >>> 0).toString(16).toUpperCase().padStart(8, '0');
}

function processAll() {
    const inputText = document.getElementById('inputText').value;
    
    if (!inputText) {
        const outputs = document.querySelectorAll('.method-output');
        outputs.forEach(output => {
            const placeholder = output.querySelector('.placeholder-text');
            if (placeholder) {
                output.innerHTML = placeholder.outerHTML;
            }
        });
        return;
    }

    updateOutput('urlEncode', encodeURL(inputText));
    updateOutput('htmlEncode', encodeHTML(inputText));
    updateOutput('htmlEncodeFull', encodeHTMLFull(inputText));
    updateOutput('unicodeEscape', encodeUnicodeEscape(inputText));
    updateOutput('base64Encode', encodeBase64(inputText));
    updateOutput('base32Encode', encodeBase32(inputText));
    updateOutput('ascii85Encode', encodeASCII85(inputText));
    updateOutput('hexEncode', encodeHex(inputText));
    updateOutput('binaryEncode', encodeBinary(inputText));
    updateOutput('octalEncode', encodeOctal(inputText));
    updateOutput('rot13Encode', rot13(inputText));
    updateOutput('caesarEncode', caesarCipher(inputText, 3));
    updateOutput('atbashEncode', atbash(inputText));
    updateOutput('morseEncode', encodeMorse(inputText));
    updateOutput('quotedPrintableEncode', encodeQuotedPrintable(inputText));

    updateOutput('urlDecode', decodeURL(inputText));
    updateOutput('htmlDecode', decodeHTML(inputText));
    updateOutput('unicodeUnescape', decodeUnicodeEscape(inputText));
    updateOutput('base64Decode', decodeBase64(inputText));
    updateOutput('base32Decode', decodeBase32(inputText));
    updateOutput('ascii85Decode', decodeASCII85(inputText));
    updateOutput('hexDecode', decodeHex(inputText));
    updateOutput('binaryDecode', decodeBinary(inputText));
    updateOutput('octalDecode', decodeOctal(inputText));
    updateOutput('rot13Decode', rot13(inputText));
    updateOutput('atbashDecode', atbash(inputText));
    updateOutput('morseDecode', decodeMorse(inputText));
    updateOutput('quotedPrintableDecode', decodeQuotedPrintable(inputText));

    updateOutput('md5Hash', CryptoJS.MD5(inputText).toString());
    updateOutput('sha1Hash', CryptoJS.SHA1(inputText).toString());
    updateOutput('sha256Hash', CryptoJS.SHA256(inputText).toString());
    updateOutput('sha512Hash', CryptoJS.SHA512(inputText).toString());
    updateOutput('crc32Hash', crc32(inputText));
}

function updateOutput(elementId, value) {
    const element = document.getElementById(elementId);
    if (element) {
        const copyButton = element.querySelector('.copy-button');
        element.textContent = value;
        if (copyButton) {
            element.appendChild(copyButton);
        }
    }
}

// Fixed loadBrowserInfo function - call it when DOM is loaded
function loadBrowserInfo() {
    // Browser Information
    document.getElementById('userAgent').textContent = navigator.userAgent;
    document.getElementById('browserName').textContent = getBrowserName();
    document.getElementById('browserVersion').textContent = getBrowserVersion();
    document.getElementById('platform').textContent = navigator.platform;
    document.getElementById('languages').textContent = navigator.languages.join(', ');
    document.getElementById('cookiesEnabled').textContent = navigator.cookieEnabled ? 'Yes' : 'No';
    document.getElementById('javaEnabled').textContent = navigator.javaEnabled ? navigator.javaEnabled() : 'No';

    // Screen Information
    document.getElementById('screenResolution').textContent = `${screen.width} x ${screen.height}`;
    document.getElementById('availableScreen').textContent = `${screen.availWidth} x ${screen.availHeight}`;
    document.getElementById('colorDepth').textContent = `${screen.colorDepth} bits`;
    document.getElementById('pixelDepth').textContent = `${screen.pixelDepth} bits`;
    document.getElementById('viewportSize').textContent = `${window.innerWidth} x ${window.innerHeight}`;
    document.getElementById('devicePixelRatio').textContent = window.devicePixelRatio || 1;
    document.getElementById('screenOrientation').textContent = screen.orientation ? screen.orientation.type : 'Not available';

    // Network Information
    document.getElementById('onlineStatus').textContent = navigator.onLine ? 'Online' : 'Offline';
    if (navigator.connection) {
        document.getElementById('connectionType').textContent = navigator.connection.type || 'Unknown';
        document.getElementById('effectiveType').textContent = navigator.connection.effectiveType || 'Unknown';
        document.getElementById('downlink').textContent = navigator.connection.downlink ? `${navigator.connection.downlink} Mbps` : 'Unknown';
        document.getElementById('rtt').textContent = navigator.connection.rtt ? `${navigator.connection.rtt} ms` : 'Unknown';
        document.getElementById('saveData').textContent = navigator.connection.saveData ? 'Enabled' : 'Disabled';
    } else {
        document.getElementById('connectionType').textContent = 'Not available';
        document.getElementById('effectiveType').textContent = 'Not available';
        document.getElementById('downlink').textContent = 'Not available';
        document.getElementById('rtt').textContent = 'Not available';
        document.getElementById('saveData').textContent = 'Not available';
    }

    // Date & Time
    updateDateTime();
    setInterval(updateDateTime, 1000);

    // Hardware Information
    document.getElementById('cpuCores').textContent = navigator.hardwareConcurrency || 'Unknown';
    document.getElementById('memory').textContent = navigator.deviceMemory ? `${navigator.deviceMemory} GB` : 'Unknown';
    document.getElementById('touchSupport').textContent = 'ontouchstart' in window ? 'Yes' : 'No';
    document.getElementById('maxTouchPoints').textContent = navigator.maxTouchPoints || 0;
    document.getElementById('doNotTrack').textContent = navigator.doNotTrack || 'Not set';
    document.getElementById('webdriver').textContent = navigator.webdriver ? 'Yes' : 'No';

    // Performance & Timing
    if (performance && performance.timing) {
        const timing = performance.timing;
        const loadTime = timing.loadEventEnd - timing.navigationStart;
        document.getElementById('pageLoadTime').textContent = loadTime > 0 ? `${loadTime} ms` : 'Loading...';
        document.getElementById('domContentLoaded').textContent = timing.domContentLoadedEventEnd - timing.navigationStart + ' ms';
        document.getElementById('dnsLookup').textContent = timing.domainLookupEnd - timing.domainLookupStart + ' ms';
        document.getElementById('serverResponse').textContent = timing.responseEnd - timing.requestStart + ' ms';
    }

    // Geolocation & Media
    document.getElementById('geolocationSupport').textContent = 'geolocation' in navigator ? 'Yes' : 'No';
    
    if (navigator.mediaDevices) {
        navigator.mediaDevices.enumerateDevices().then(devices => {
            const audioInputs = devices.filter(device => device.kind === 'audioinput').length;
            const videoInputs = devices.filter(device => device.kind === 'videoinput').length;
            const audioOutputs = devices.filter(device => device.kind === 'audiooutput').length;
            
            document.getElementById('audioInputDevices').textContent = audioInputs;
            document.getElementById('videoInputDevices').textContent = videoInputs;
            document.getElementById('audioOutputDevices').textContent = audioOutputs;
        }).catch(() => {
            document.getElementById('audioInputDevices').textContent = 'Permission denied';
            document.getElementById('videoInputDevices').textContent = 'Permission denied';
            document.getElementById('audioOutputDevices').textContent = 'Permission denied';
        });
    }

    // WebGL Information
    updateWebGLInfo();
    
    // Battery Information
    if ('getBattery' in navigator) {
        navigator.getBattery().then(battery => {
            document.getElementById('batteryLevel').textContent = Math.round(battery.level * 100) + '%';
            document.getElementById('batteryCharging').textContent = battery.charging ? 'Yes' : 'No';
            document.getElementById('chargingTime').textContent = battery.chargingTime === Infinity ? 'Unknown' : battery.chargingTime + ' seconds';
        });
    } else {
        document.getElementById('batteryLevel').textContent = 'Not available';
        document.getElementById('batteryCharging').textContent = 'Not available';
        document.getElementById('chargingTime').textContent = 'Not available';
    }

    // Web API Support
    updateFeatureSupport();
}

function updateWebGLInfo() {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    
    if (gl) {
        const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
        document.getElementById('webglSupport').textContent = 'Yes';
        document.getElementById('webglVersion').textContent = gl.getParameter(gl.VERSION);
        document.getElementById('webglVendor').textContent = gl.getParameter(gl.VENDOR);
        document.getElementById('webglRenderer').textContent = debugInfo ? gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL) : gl.getParameter(gl.RENDERER);
        document.getElementById('webglShadingLanguage').textContent = gl.getParameter(gl.SHADING_LANGUAGE_VERSION);
    } else {
        document.getElementById('webglSupport').textContent = 'No';
        document.getElementById('webglVersion').textContent = 'Not available';
        document.getElementById('webglVendor').textContent = 'Not available';
        document.getElementById('webglRenderer').textContent = 'Not available';
        document.getElementById('webglShadingLanguage').textContent = 'Not available';
    }
}

function updateFeatureSupport() {
    document.getElementById('webWorkersSupport').textContent = 'Worker' in window ? 'Yes' : 'No';
    document.getElementById('serviceWorkerSupport').textContent = 'serviceWorker' in navigator ? 'Yes' : 'No';
    document.getElementById('notificationsSupport').textContent = 'Notification' in window ? 'Yes' : 'No';
    document.getElementById('webRTCSupport').textContent = 'RTCPeerConnection' in window ? 'Yes' : 'No';
    document.getElementById('webSocketsSupport').textContent = 'WebSocket' in window ? 'Yes' : 'No';
    document.getElementById('webAudioSupport').textContent = 'AudioContext' in window || 'webkitAudioContext' in window ? 'Yes' : 'No';
    document.getElementById('fileAPISupport').textContent = 'File' in window && 'FileReader' in window ? 'Yes' : 'No';
    document.getElementById('dragDropSupport').textContent = 'draggable' in document.createElement('div') ? 'Yes' : 'No';
    document.getElementById('fullscreenSupport').textContent = document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled ? 'Yes' : 'No';
    document.getElementById('webCryptoSupport').textContent = 'crypto' in window && 'subtle' in window.crypto ? 'Yes' : 'No';
    document.getElementById('webAssemblySupport').textContent = 'WebAssembly' in window ? 'Yes' : 'No';
}

function getBrowserName() {
    const userAgent = navigator.userAgent;
    if (userAgent.includes('Firefox')) return 'Firefox';
    if (userAgent.includes('Chrome')) return 'Chrome';
    if (userAgent.includes('Safari') && !userAgent.includes('Chrome')) return 'Safari';
    if (userAgent.includes('Edge')) return 'Edge';
    if (userAgent.includes('Opera') || userAgent.includes('OPR')) return 'Opera';
    return 'Unknown';
}

function getBrowserVersion() {
    const userAgent = navigator.userAgent;
    let match;
    
    if ((match = userAgent.match(/Firefox\/(\d+\.\d+)/))) return match[1];
    if ((match = userAgent.match(/Chrome\/(\d+\.\d+)/))) return match[1];
    if ((match = userAgent.match(/Safari\/(\d+\.\d+)/))) return match[1];
    if ((match = userAgent.match(/Edge\/(\d+\.\d+)/))) return match[1];
    if ((match = userAgent.match(/Opera\/(\d+\.\d+)/))) return match[1];
    
    return 'Unknown';
}

function updateDateTime() {
    const now = new Date();
    document.getElementById('currentTime').textContent = now.toLocaleString();
    document.getElementById('timezone').textContent = Intl.DateTimeFormat().resolvedOptions().timeZone;
    document.getElementById('timezoneOffset').textContent = `GMT${now.getTimezoneOffset() > 0 ? '-' : '+'}${Math.abs(now.getTimezoneOffset() / 60)}`;
}

let currencyRates = {};

const unitOptions = {
    length: { m: 1, km: 1000, cm: 0.01, mm: 0.001, in: 0.0254, ft: 0.3048, yd: 0.9144, mi: 1609.344 },
    mass: { kg: 1, g: 0.001, lb: 0.45359237, oz: 0.028349523125, ton: 1000, stone: 6.35029318 },
    time: { s: 1, min: 60, h: 3600, d: 86400, week: 604800, month: 2629746, year: 31556952 },
    currency: { USD: 1, EUR: 1, GBP: 1, JPY: 1, CAD: 1, AUD: 1, CHF: 1, CNY: 1, INR: 1, BRL: 1 }
};

async function fetchCurrencyRates() {
    try {
        const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
        const data = await response.json();
        currencyRates = data.rates;
        currencyRates.USD = 1;
        
        Object.keys(currencyRates).forEach(currency => {
            unitOptions.currency[currency] = currencyRates[currency];
        });
        
        console.log('Currency rates loaded successfully');
    } catch (error) {
        console.error('Failed to fetch currency rates:', error);
        currencyRates = {
            USD: 1, EUR: 0.85, GBP: 0.73, JPY: 110, CAD: 1.25, 
            AUD: 1.35, CHF: 0.92, CNY: 6.45, INR: 74.5, BRL: 5.2
        };
    }
}

function renderUnitOptions() {
    const cat = document.getElementById('unitCategory').value;
    const from = document.getElementById('unitFrom');
    const to = document.getElementById('unitTo');
    
    from.innerHTML = '';
    to.innerHTML = '';
    
    Object.keys(unitOptions[cat]).forEach(key => {
        from.innerHTML += `<option value="${key}">${key}</option>`;
        to.innerHTML += `<option value="${key}">${key}</option>`;
    });
    
    convertUnit();
}

function convertUnit() {
    const cat = document.getElementById('unitCategory').value;
    const from = document.getElementById('unitFrom').value;
    const to = document.getElementById('unitTo').value;
    const value = parseFloat(document.getElementById('unitValue').value);
    const result = document.getElementById('unitResult');
    
    if (isNaN(value) || !value) {
        result.textContent = '-';
        return;
    }
    
    let converted;
    
    if (cat === 'currency') {
        const usdValue = value / currencyRates[from];
        converted = usdValue * currencyRates[to];
        result.textContent = converted.toFixed(2);
    } else {
        const base = value * unitOptions[cat][from];
        converted = base / unitOptions[cat][to];
        
        const isFraction = value % 1 !== 0;
        result.textContent = isFraction ? converted.toFixed(6).replace(/\.?0+$/, '') : converted.toString();
    }
}

document.addEventListener('DOMContentLoaded', function() {
    loadBrowserInfo();
    
    fetchCurrencyRates().then(() => {
        renderUnitOptions();
    });
    
    window.addEventListener('resize', function() {
        document.getElementById('viewportSize').textContent = `${window.innerWidth} x ${window.innerHeight}`;
    });
});

function convertEpoch() {
    const input = document.getElementById('epochInput').value;
    const result = document.getElementById('epochResult');
    if (!input) return result.textContent = '-';
    const date = new Date(parseInt(input, 10) * 1000);
    result.textContent = isNaN(date.getTime()) ? 'Invalid timestamp' : date.toString();
}

function runRegexTest() {
    const patternInput = document.getElementById('regexPattern').value;
    const testArea = document.getElementById('regexText');
    const output = document.getElementById('regexOutput');

    try {
        const match = patternInput.match(/^\/(.*)\/(\w*)$/);
        if (!match) throw new Error('Pattern must be like /pattern/flags');
        const expr = match[1];
        const flags = match[2];
        const regex = new RegExp(expr, flags.includes('g') ? flags : flags + 'g');

        const plainText = testArea.innerText;
        const matches = [...plainText.matchAll(regex)];

        if (matches.length === 0) {
            output.textContent = 'No matches found.';
            return;
        }

        output.textContent = 'Matches found: ' + matches.length;

        let highlightedText = '';
        let lastIndex = 0;

        matches.forEach((m) => {
            highlightedText += escapeHtml(plainText.slice(lastIndex, m.index));
            highlightedText += '<span class="regex-highlight">' + escapeHtml(m[0]) + '</span>';
            lastIndex = m.index + m[0].length;
        });

        highlightedText += escapeHtml(plainText.slice(lastIndex));
        testArea.innerHTML = highlightedText;
    } catch (e) {
        output.textContent = 'Invalid regex: ' + e.message;
    }
}

function escapeHtml(text) {
    return text.replace(/[&<>"']/g, function (m) {
        switch (m) {
            case '&': return '&amp;';
            case '<': return '&lt;';
            case '>': return '&gt;';
            case '"': return '&quot;';
            case "'": return '&#39;';
        }
    });
}

function convertColorFrom(type) {
    let r, g, b, h, s, l;
    try {
        if (type === 'hex') {
            const hex = document.getElementById('hexColor').value.trim().replace(/^#/, '');
            if (hex.length !== 6) return;
            r = parseInt(hex.substring(0, 2), 16);
            g = parseInt(hex.substring(2, 4), 16);
            b = parseInt(hex.substring(4, 6), 16);
        } else if (type === 'rgb') {
            [r, g, b] = document.getElementById('rgbColor').value.replace(/[^0-9,]/g, '').split(',').map(Number);
        } else if (type === 'hsl') {
            [h, s, l] = document.getElementById('hslColor').value.replace(/[^0-9,]/g, '').split(',').map(Number);
            [r, g, b] = hslToRgb(h, s, l);
        }
        if (r == null || g == null || b == null) return;
        document.getElementById('hexColor').value = `#${toHex(r)}${toHex(g)}${toHex(b)}`;
        document.getElementById('rgbColor').value = `rgb(${r}, ${g}, ${b})`;
        [h, s, l] = rgbToHsl(r, g, b);
        document.getElementById('hslColor').value = `hsl(${h}, ${s}%, ${l}%)`;
        document.getElementById('colorPreview').style.background = `rgb(${r}, ${g}, ${b})`;
    } catch (e) {
        return;
    }
}

function toHex(num) {
    return num.toString(16).padStart(2, '0');
}

function rgbToHsl(r, g, b) {
    r /= 255; g /= 255; b /= 255;
    const max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;
    if (max === min) h = s = 0;
    else {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }
    return [Math.round(h * 360), Math.round(s * 100), Math.round(l * 100)];
}

function hslToRgb(h, s, l) {
    h /= 360; s /= 100; l /= 100;
    let r, g, b;
    if (s === 0) r = g = b = l;
    else {
        const hue2rgb = (p, q, t) => {
            if (t < 0) t += 1;
            if (t > 1) t -= 1;
            if (t < 1/6) return p + (q - p) * 6 * t;
            if (t < 1/2) return q;
            if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
            return p;
        };
        const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        const p = 2 * l - q;
        r = hue2rgb(p, q, h + 1/3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1/3);
    }
    return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
}

function renderUnitOptions() {
    const cat = document.getElementById('unitCategory').value;
    const from = document.getElementById('unitFrom');
    const to = document.getElementById('unitTo');
    from.innerHTML = '';
    to.innerHTML = '';
    Object.keys(unitOptions[cat]).forEach(key => {
        from.innerHTML += `<option value="${key}">${key}</option>`;
        to.innerHTML += `<option value="${key}">${key}</option>`;
    });
    convertUnit();
}

function convertUnit() {
    const cat = document.getElementById('unitCategory').value;
    const from = document.getElementById('unitFrom').value;
    const to = document.getElementById('unitTo').value;
    const value = parseFloat(document.getElementById('unitValue').value);
    const result = document.getElementById('unitResult');
    if (isNaN(value)) return result.textContent = '-';
    const base = value * unitOptions[cat][from];
    const converted = base / unitOptions[cat][to];
    let final = converted;

    if (cat === 'currency') {
        result.textContent = final.toFixed(2);
    } else {
        const isFraction = value % 1 !== 0;
        result.textContent = isFraction ? final.toFixed(16).replace(/\.0+$/, '') : Math.round(final);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    renderUnitOptions();

    const tabSpecificInputs = document.querySelectorAll('#epoch-tab .input-field, #regex-tab .input-field, #regex-tab textarea, #color-tab .input-field');
    tabSpecificInputs.forEach(el => el.classList.add('small-input'));
});

document.addEventListener('DOMContentLoaded', function() {
    addCopyButtonsToOutputs();
    const homeTab = document.querySelector('.tab-item');
    if (homeTab) {
        homeTab.click();
    }
});

window.addEventListener('resize', function() {
    if (document.getElementById('browser-tab').classList.contains('active')) {
        document.getElementById('viewportSize').textContent = `${window.innerWidth} x ${window.innerHeight}`;
    }
});

const discordUserId = "1370479021883920606";
const lanyardApiKeys = [
    "738dbad9426ca82ac1c285f36de6d7c9",
    "8824fa5041d7a915cdae80442cb5f34f"
];
let currentKeyIndex = 0;

function updateFavicon(avatarUrl) {
  const existingLink = document.querySelector("link[rel*='icon']");
  if (existingLink) {
    existingLink.remove();
  }
  
  const link = document.createElement('link');
  link.rel = 'icon';
  link.type = 'image/png';
  link.href = avatarUrl;
  document.head.appendChild(link);
}

async function fetchDiscordStatus() {
    const apiUrl = `https://api.lanyard.rest/v1/users/${discordUserId}`;
    
    try {
        const response = await fetch(apiUrl, {
            headers: { 
                Authorization: lanyardApiKeys[currentKeyIndex] 
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        if (!data.success) {
            throw new Error("Failed to fetch Discord data");
        }

        updateDiscordProfile(data.data);
        
    } catch (error) {
        console.error("Error fetching Discord status:", error);
        setOfflineStatus();
    }
}

function updateStatusDot(status) {
    const statusDot = document.getElementById('tooltipStatusDot');
    statusDot.className = `status-dot ${status.toLowerCase()}`;
}

function updateDiscordProfile(userData) {
    const user = userData.discord_user;
    const activities = userData.activities || [];
    const status = userData.discord_status || 'offline';

    if (user?.avatar) {
        const avatarUrl = `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png?size=128`;
        document.getElementById('discordProfilePic').src = avatarUrl;
        updateFavicon(avatarUrl);
    }

    const statusRing = document.getElementById('statusRing');
    statusRing.className = `status-ring ${status}`;

    document.getElementById('tooltipDisplayName').textContent = 
        user?.display_name || user?.username || "! LO$R";
    document.getElementById('tooltipUsername').textContent = 
        user?.username ? `@${user.username}` : "@.lo5r.";

    updateStatusDot(status);
    const statusText = document.getElementById('tooltipStatus');

    const spotify = activities.find(a => a.type === 2 && a.name === "Spotify");
    const otherActivity = activities.find(a => a.name !== "Custom Status" && a.name !== "Spotify");

    if (otherActivity) {
        statusText.textContent = `Playing ${otherActivity.name}`;
    } else {
        statusText.textContent = status.charAt(0).toUpperCase() + status.slice(1);
    }

    const spotifyStatus = document.getElementById('spotifyStatus');
    const spotifyTrack = document.getElementById('tooltipSpotifyTrack');
    const spotifyArtist = document.getElementById('tooltipSpotifyArtist');

    if (spotify) {
        const trackName = spotify.details?.replace(/:[^:\s]*(?=:)|:[^:\s]*:/g, "").trim() || "Unknown Song";
        let artistNames = spotify.state?.replace(/:[^:\s]*(?=:)|:[^:\s]*:/g, "").trim() || "";
        artistNames = artistNames.replace(/;/g, ",");
        
        let trackLink = "";
        if (spotify.sync_id) {
            trackLink = `https://open.spotify.com/track/${spotify.sync_id}`;
        }

        const spotifyTrack = document.getElementById('tooltipSpotifyTrack');
        const spotifyArtist = document.getElementById('tooltipSpotifyArtist');

        spotifyTrack.innerHTML = trackLink
            ? `<a href="${trackLink}" target="_blank" rel="noopener noreferrer">${trackName}</a>`
            : trackName;

        if (artistNames) {
            const artists = artistNames.split(",").map(a => a.trim()).filter(Boolean);
            const artistLinksHTML = artists.map(name => {
                const urlName = encodeURIComponent(name);
                return `<a href="https://open.spotify.com/search/${urlName}" target="_blank" rel="noopener noreferrer">${name}</a>`;
            }).join(", ");
            
            spotifyArtist.innerHTML = `${artistLinksHTML}`;
        } else {
            spotifyArtist.textContent = "";
        }

        spotifyStatus.style.display = 'flex';
    } else {
        spotifyStatus.style.display = 'none';
    }
}

function setOfflineStatus() {
    document.getElementById('statusRing').className = 'status-ring offline';
    document.getElementById('tooltipStatus').textContent = 'offline';
    document.getElementById('tooltipStatusDot').className = 'status-dot offline';
    document.getElementById('spotifyStatus').style.display = 'none';
}

fetchDiscordStatus();

setInterval(() => {
    currentKeyIndex = (currentKeyIndex + 1) % lanyardApiKeys.length;
    fetchDiscordStatus();
}, 3750);

const profileContainer = document.getElementById('discordProfile');
profileContainer.addEventListener('mouseenter', () => {
    profileContainer.setAttribute('aria-expanded', 'true');
});

profileContainer.addEventListener('mouseleave', () => {
    profileContainer.setAttribute('aria-expanded', 'false');
});

document.addEventListener('DOMContentLoaded', function() {
    const cursor = document.getElementById('customCursor');
    let mouseX = 0;
    let mouseY = 0;
    let isClicking = false;

    document.addEventListener('mousemove', function(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        cursor.style.left = mouseX + 'px';
        cursor.style.top = mouseY + 'px';
    });

    document.addEventListener('mousedown', function() {
        isClicking = true;
        cursor.classList.add('clicking');
    });

    document.addEventListener('mouseup', function() {
        isClicking = false;
        cursor.classList.remove('clicking');
    });

    function triggerShine() {
        cursor.classList.add('shine');
        setTimeout(() => {
            cursor.classList.remove('shine');
        }, 600);
    }

    const interactiveElements = document.querySelectorAll('button, a, .project-link, .tech-item, .status-item, .profile-pic, .modal-close, [onclick]');
    
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', triggerShine);
    });

    document.addEventListener('mouseleave', function() {
        cursor.style.opacity = '0';
    });

    document.addEventListener('mouseenter', function() {
        cursor.style.opacity = '0.68';
    });

    cursor.style.left = '0px';
    cursor.style.top = '0px';
});
