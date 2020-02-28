/* eslint-disable */
import React from 'react';

export default class Settings extends React.Component {
  getBrowserType() {
    if ((window.opr && window.opr.addons) || window.opera || navigator.userAgent.indexOf(' OPR/') >= 0) return 'opera';
    if (typeof InstallTrigger !== 'undefined') return 'firefox';
    if (/constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification))) return 'safari';
    if (window.chrome && (window.chrome.webstore || window.chrome.runtime)) return 'chrome';
    if (window.chrome && (window.chrome.webstore || window.chrome.runtime) && navigator.userAgent.indexOf('Edg') != -1) return 'edge';
    return 'unknown';
  }

  render() {
    const type = this.getBrowserType();
    /** @type {Storage} */ let storage = type === 'chrome' ? chrome.storage !== undefined ? chrome.storage.sync : localStorage : localStorage;

    const item = storage.getItem('mue.backgrounds');
    if (item === null) {
      console.log('Detected a new browser, now creating new storage bucket...');
      // This is gonna look ugly but fuck it
      storage.setItem('mue.test', true);
    }

    return <div>
      <h1>Settings</h1>
      <p>Edit different components to make Mue your new tab.</p>
      <div className='columns'>
        <h1 style={{ flex: 2 }}>h</h1>
      </div>
    </div>;
  }
}