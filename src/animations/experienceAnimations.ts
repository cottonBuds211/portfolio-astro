import { gsap } from '../animations/gsapConfig'

export function experienceAnimation() {
	const tl = gsap.timeline({
		defaults: { duration: 0.5, ease: 'power1.in' },
		scrollTrigger: {
			trigger: '.experience-title',
			start: 'top center',
			toggleActions: 'play none none none',
			once: true,
		},
	})

	tl.from('.experience-title', {
		opacity: 0,
	}).from('.experience-card', { opacity: 0, y: -50, stagger: 0.4 })
}
