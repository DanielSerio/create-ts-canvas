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
exports.installPackages = void 0;
const child_process_1 = require("child_process");
const process_1 = require("process");
const handle_error_1 = require("./handle-error");
function installPackages(FOLDER_NAME) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const packages = [
                'webpack',
                'webpack-cli',
                'webpack-dev-server',
                'html-webpack-plugin',
                'typescript',
                'ts-loader',
                'style-loader',
                'css-loader'
            ];
            const execString = `npm i --save-dev ${packages.join(' ')}`;
            yield process_1.chdir(`${process.cwd()}/${FOLDER_NAME}`);
            yield child_process_1.execSync(execString);
            return;
        }
        catch (e) {
            return yield handle_error_1.handleError(e);
        }
    });
}
exports.installPackages = installPackages;
