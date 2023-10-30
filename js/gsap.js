$(function () {
  gsap.registerPlugin(ScrollTrigger);
  gsap.from(".first_pofo .title", {
    scrollTrigger: ".first_pofo", y: 175, duration: 1.8, opacity: 0,
  })
  gsap.from(".secound_pofo .title", {
    scrollTrigger: ".secound_pofo", y: 175, duration: 1.8, opacity: 0,
  })
  gsap.from(".third_pofo .title", {
    scrollTrigger: ".secound_pofo", y: 175, duration: 1.8, opacity: 0,
  })
})
