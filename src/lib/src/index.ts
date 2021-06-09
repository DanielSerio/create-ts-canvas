import './style.css';
import { createCanvas } from './utils';

function init(): void {
  const [canvas, ctx] = createCanvas();

  const clear = (): void => {
    const { width, height } = canvas;
    ctx.translate(0, 0);
    ctx.clearRect(0, 0, width, height);
  };

  const render = (): void => {};

  const frame = (now: number): void => {};

  const animate = (now: number): void => {
    clear();
    frame(now);
    render();
    requestAnimationFrame(animate);
  };

  render();
  requestAnimationFrame(animate);
}


window.onload = init;