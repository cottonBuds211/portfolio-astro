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
	
	})

}
