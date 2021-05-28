
gsap.registerPlugin(ScrollTrigger)

gsap.from(`.hero`, {
    opacity:0.1, duration:1
})

gsap.from(`.boot-sec`, {
    opacity:.3, 
    duration:1,
    x:400
})

gsap.from(`.full-banner`, {
    duration:1,
    scrollTrigger:`.full-banner`,
    opacity:.3,
    y:200
})