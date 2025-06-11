import { gsap } from "./gsapConfig";

export function contactAnimation() {
	const tl = gsap.timeline({
		defaults: { duration: 0.5, ease: 'power1.in' },
		scrollTrigger: {
			trigger: '.contact-title',
			start: 'center bottom',
			toggleActions: 'play none none none',
			once: true,
		},
	})

	tl.from('.contact-title', {
		opacity: 0,
	}).from('.contact-content', { opacity: 0, y: -50, stagger: 0.4 })
}
