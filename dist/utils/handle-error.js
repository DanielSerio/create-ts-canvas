"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleError = void 0;
const process_1 = require("process");
function handleError(e) {
    console.error(e);
    process_1.exit();
}
exports.handleError = handleError;
