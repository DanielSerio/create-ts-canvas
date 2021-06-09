import { copySync } from "fs-extra";
import { handleError } from "./handle-error";

export async function copyLib(FOLDER_NAME: string): Promise<void> {
  try {
    const src: string = `C:/Developer/scripts/create-ts-canvas/src/lib`;
    const dest: string = `${process.cwd()}/${FOLDER_NAME}`;

    return await copySync(src, dest);
  } catch (e) { return await handleError(e); }
}