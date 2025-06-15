import { gsap } from '../animations/gsapConfig'

export function techAnimation() {
	const tl = gsap.timeline({
		defaults: { duration: 0.2, ease: 'power1.in' },
		scrollTrigger: {
			trigger: '.tech-title',
			start: 'top center ',
			toggleActions: 'play none none none',
			once: true,
		},
	})

	tl.from('.tech-title', {
		opacity: 0,
	}).from('.tech-button', { opacity: 0, x: -50, stagger: 0.1 })
}
