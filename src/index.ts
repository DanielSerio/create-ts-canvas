import { argv } from "process";
import { copyLib, handleError, installPackages } from "./utils";

(async function init(): Promise<void> {
  const name: string = argv[argv.length - 1];
  try {
    console.log('Creating files...');
    await copyLib(name);
    console.log('Files created.');
    console.log('Installing packages...');
    await installPackages(name);
    console.log('Packages installed.');
    console.log('finished  :)');
  } catch (e) { return await handleError(e); }
})();