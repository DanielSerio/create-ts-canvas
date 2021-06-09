"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.copyLib = void 0;
const fs_extra_1 = require("fs-extra");
const handle_error_1 = require("./handle-error");
function copyLib(FOLDER_NAME) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const src = `C:/Developer/scripts/create-ts-canvas/src/lib`;
            const dest = `${process.cwd()}/${FOLDER_NAME}`;
            return yield fs_extra_1.copySync(src, dest);
        }
        catch (e) {
            return yield handle_error_1.handleError(e);
        }
    });
}
exports.copyLib = copyLib;
