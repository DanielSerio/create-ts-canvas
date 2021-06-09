import { exit } from "process";

export function handleError(e: Error): void {
  console.error(e);
  exit();
}