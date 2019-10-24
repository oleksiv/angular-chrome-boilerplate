import * as jQuery from 'jquery';

const head = jQuery('head');

let script = document.createElement('script');
script.type = 'text/javascript';
script.src = chrome.extension.getURL('runtime.js');
head.append(script);

script = document.createElement('script');
script.type = 'text/javascript';
script.src = chrome.extension.getURL('polyfills.js');
head.append(script);

script = document.createElement('script');
script.type = 'text/javascript';
script.src = chrome.extension.getURL('styles.js');
head.append(script);

script = document.createElement('script');
script.type = 'text/javascript';
script.src = chrome.extension.getURL('vendor.js');
head.append(script);

script = document.createElement('script');
script.type = 'text/javascript';
script.src = chrome.extension.getURL('main.js');
head.append(script);

// Append wrapper
jQuery('#rightCol').prepend('<app-content-box>Hello world</app-content-box>');
