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
const process_1 = require("process");
const utils_1 = require("./utils");
(function init() {
    return __awaiter(this, void 0, void 0, function* () {
        const name = process_1.argv[process_1.argv.length - 1];
        try {
            console.log('Creating files...');
            yield utils_1.copyLib(name);
            console.log('Files created.');
            console.log('Installing packages...');
            yield utils_1.installPackages(name);
            console.log('Packages installed.');
            console.log('finished  :)');
        }
        catch (e) {
            return yield utils_1.handleError(e);
        }
    });
})();
