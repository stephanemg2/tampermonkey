// ==UserScript==
// @name         xhamster popup killer
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  try to take over the world!
// @author       Selbereth
// @match        https://*.xhamster.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=xhamster.com
// @grant        none
// ==/UserScript==

(function () {
  window.debug = true;
  if (debug) console.log("started");
  setInterval(() => {
    if (popupFind()) {
     // if (debug) console.log("remove popup");
    const popup = popupFind()
     console.log(popup)
      popup.parentNode.removeChild(popup)

    //  if (debug) console.log("resume video");
      //pauseFind().click()
    //  if (debug) console.log("done ");
    }
  }, 1000);
})();

function popupFind() {
  return document.querySelector(".container-4caaa");
}