export function resizeCanvas(canvas: HTMLCanvasElement): void {
  const { clientWidth, clientHeight } = canvas.parentElement as HTMLElement;
  canvas.height = clientHeight;
  canvas.width = clientWidth;
}