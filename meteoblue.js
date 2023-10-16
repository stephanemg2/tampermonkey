// ==UserScript==
// @name         meteoblue popup killer
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  try to take over the world!
// @author       Selbereth
// @match        https://*.meteoblue.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=meteoblue.com
// @grant        none
// ==/UserScript==

(function () {
  window.debug = true;
  if (window.debug) console.log("started");
  setInterval(() => {
    if (popupFind()) {
     if (window.debug) console.log("remove popup");
    const popup = popupFind()
     console.log(popup)
     // popup.parentNode.removeChild(popup)
        popup.click()

    //if (debug) console.log("resume video");
      //pauseFind().click()
    //  if (debug) console.log("done ");
    }
  }, 1000);
})();

function popupFind() {
  return document.querySelector(".unblock-div .unblock-body .close-drawer");
}
