"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./style.css");
const utils_1 = require("./utils");
function init() {
    const [canvas, ctx] = utils_1.createCanvas();
    const clear = () => {
        const { width, height } = canvas;
        ctx.translate(0, 0);
        ctx.clearRect(0, 0, width, height);
    };
    const render = () => { };
    const frame = (now) => { };
    const animate = (now) => {
        clear();
        frame(now);
        render();
        requestAnimationFrame(animate);
    };
    render();
    requestAnimationFrame(animate);
}
window.onload = init;
