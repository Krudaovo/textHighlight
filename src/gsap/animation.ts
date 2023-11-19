import gsap from 'gsap';

export const onHoverScaleAndFollowImage = (
  target: string,
  targetTexts: string,
  targetImages: string) => {

  // Wrapper of texts array
  const textsUl = document.querySelector(target);
  const listTag = document.querySelectorAll('li');
  // Texts array
  const indivisualText = gsap.utils.toArray<Element>(targetTexts);
  // All images
  const images = gsap.utils.toArray<Element>(targetImages);
  // Hovered Animation
  const hoveredScalingImage = gsap.to(images, { scale: 1, paused: true });

  window.addEventListener('mousemove', (e: MouseEventInit) => {
    const x = e.clientX;
    const y = e.clientY;
    // Images follows the cursor, but not scaling.
    gsap.to(images, { x: x ? x + 75 : x, y });
  });
  indivisualText.forEach((text) => {
    let whatIsTextNum: number = 0;
    text.addEventListener('mouseenter', () => {
      if (text.innerHTML === 'sushi') whatIsTextNum = 0;
      if (text.innerHTML === 'alcohol') whatIsTextNum = 1;
      if (text.innerHTML === 'pizza') whatIsTextNum = 2;
      gsap.to(images[whatIsTextNum], { opacity: 1 })
    })
    text.addEventListener('mouseout', () => {
      gsap.to(images[whatIsTextNum], { opacity: 0 })
    })
  })

  // stopPropagation to child element
  listTag.forEach((li) => {
    li.addEventListener('mouseenter', () => hoveredScalingImage.play());
    li.addEventListener('mouseout', () => hoveredScalingImage.reverse());
  })
  textsUl?.addEventListener('mouseenter', () => hoveredScalingImage.play());
  textsUl?.addEventListener('mouseout', () => hoveredScalingImage.reverse());

}