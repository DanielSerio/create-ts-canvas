import { resizeCanvas } from "./resize-canvas";

export function createCanvas(parent: HTMLElement = document.body): [HTMLCanvasElement, CanvasRenderingContext2D] {
  const canvas: HTMLCanvasElement = document.createElement('canvas');
  const ctx: CanvasRenderingContext2D = canvas.getContext('2d') as CanvasRenderingContext2D;

  parent.appendChild(canvas);
  resizeCanvas(canvas);

  window.addEventListener('resize', () => resizeCanvas(canvas));

  return [canvas, ctx];
}