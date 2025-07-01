import { gsap } from './gsapConfig'


export function animateMain() {
	gsap.from("main section",{
		// defaults: { duration: 1, ease: 'power1.in' },
		scrollTrigger: {
			trigger: '.about-title',
			start: 'top center',
			toggleActions: 'play none none none',
			once: true,
		},
		opacity: 0,
		y: 50,
		duration: .5,
		ease: 'power1.out',
		stagger: 0.3
	})

}
