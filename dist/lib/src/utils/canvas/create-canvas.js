"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCanvas = void 0;
const resize_canvas_1 = require("./resize-canvas");
function createCanvas(parent = document.body) {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    parent.appendChild(canvas);
    resize_canvas_1.resizeCanvas(canvas);
    window.addEventListener('resize', () => resize_canvas_1.resizeCanvas(canvas));
    return [canvas, ctx];
}
exports.createCanvas = createCanvas;
