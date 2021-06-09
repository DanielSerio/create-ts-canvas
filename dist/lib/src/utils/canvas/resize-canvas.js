"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resizeCanvas = void 0;
function resizeCanvas(canvas) {
    const { clientWidth, clientHeight } = canvas.parentElement;
    canvas.height = clientHeight;
    canvas.width = clientWidth;
}
exports.resizeCanvas = resizeCanvas;
