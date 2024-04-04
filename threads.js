import { gsap } from 'gsap';

export const Line = $el => {
  const $paths = $el.querySelectorAll('.path');
  const tl = gsap.timeline();
  const duration = gsap.utils.random(40, 80);
  const y = gsap.utils.random(-250, 250);
  const rotate = gsap.utils.random(-30, 30);
  const scaleXFrom = gsap.utils.random(2, 2.5);
  const scaleXTo = gsap.utils.random(1.5, 1.75);
  const scaleYFrom = gsap.utils.random(0.1, 0.4);
  const scaleYTo = gsap.utils.random(0.2, 0.3);
  const opacityFrom = gsap.utils.random(0.2, 0.4);
  const opacityTo = gsap.utils.random(0.4, 0.6);
  const ease = gsap.utils.random([
    'power2.inOut',
    'power3.inOut',
    'power4.inOut',
    'sine.inOut',
  ]);

  tl.to($paths, {
    xPercent: -100,
    duration: duration,
    ease: 'none',
    repeat: -1,
  });

  tl.fromTo(
    $el,
    {
      y,
      opacity: opacityFrom,
      rotate,
      scaleY: scaleYFrom,
      scaleX: scaleXFrom,
      transformOrigin: '50% 50%',
    },

    {
      y: y * -1,
      opacity: opacityTo,
      rotate: rotate * -1,
      scaleY: scaleYTo,
      scaleX: scaleXTo,
      repeat: -1,
      yoyo: true,
      yoyoEase: ease,
      duration: duration * 0.25,
      ease: ease,
      transformOrigin: '50% 50%',
    },
    0
  );

  tl.seek(gsap.utils.random(10, 20));
};

gsap.utils.toArray('.g').forEach($el => Line($el));
gsap.to('svg', { opacity: 1, duration: 1 });
