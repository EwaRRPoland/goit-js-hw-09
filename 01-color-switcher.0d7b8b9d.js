!function(){var t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),o=null;t.addEventListener("click",(function(){t.disabled=!0,e.disabled=!1,o=setTimeout((function t(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16)),o=setTimeout(t,1e3)}),1e3)})),e.addEventListener("click",(function(){clearTimeout(o),t.disabled=!1,e.disabled=!0}))}();
//# sourceMappingURL=01-color-switcher.0d7b8b9d.js.map