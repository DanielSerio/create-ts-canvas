import { execSync } from "child_process";
import { chdir } from "process";
import { handleError } from "./handle-error";

export async function installPackages(FOLDER_NAME: string): Promise<void> {
  try {
    const packages: string[] = [
      'webpack',
      'webpack-cli',
      'webpack-dev-server',
      'html-webpack-plugin',
      'typescript',
      'ts-loader',
      'style-loader',
      'css-loader'
    ];

    const execString: string = `npm i --save-dev ${packages.join(' ')}`;
    await chdir(`${process.cwd()}/${FOLDER_NAME}`);
    await execSync(execString);
    return;
  } catch (e) { return await handleError(e); }
}