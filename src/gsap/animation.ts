import gsap from 'gsap';

export const onHoverScaleAndFollowImage = (targetText: string, targetImage: string) => {
  const targetT = document.querySelector(targetText);
  const targetI = document.querySelector(targetImage);
  targetT?.addEventListener('mousemove', (e: MouseEventInit) => {
    const x = e.clientX;
    const y = e.clientY;
    gsap.to(targetI, { scale: 1, x: x, y: y });
  });
  targetT?.addEventListener('mouseout', () => {
    gsap.to(targetI, { scale: 0 })
  });
}