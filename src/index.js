"use strict";
exports.__esModule = true;
require("./styles/style.css");
require("./styles/style.scss");
var getswitch = document.getElementById('clickMe');
getswitch === null || getswitch === void 0 ? void 0 : getswitch.addEventListener("click", switchONOf);
function switchONOf(el) {
    if (el.target.tagName === 'H2') {
        if (el.target.nextElementSibling.classList.contains("visible")) {
            el.target.nextElementSibling.classList.remove('visible');
        }
        else {
            el.target.nextElementSibling.classList.add('visible');
        }
    }
}
