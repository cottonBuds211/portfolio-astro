import { gsap } from '../animations/gsapConfig'

export function projectAnimation() {
	const tl = gsap.timeline({
		defaults: { duration: 0.3, ease: 'power1.in' },
		scrollTrigger: {
			trigger: '.project-title',
			start: ' top  center',
			toggleActions: 'play none none none',
			once: true,
		},
	})

	tl.from('.project-title', {
		opacity: 0,
	}).from('.project-card', { opacity: 0, y: -50, stagger: 0.4 })
}
