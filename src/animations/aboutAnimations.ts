import gsap from 'gsap'

import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function aboutAnimation() {
	const tl = gsap.timeline({
		defaults: { duration: 0.5, ease: 'power1.in' },
		scrollTrigger: {
			trigger: '.about-title',
			start: 'top center',
			toggleActions: 'play none none none',
			once: true,
		},
	})

	tl.from('.about-title', {
		opacity: 0,
	}).from(
		['.about-paragraph-1', '.about-paragraph-2', '.about-paragraph-3'],
		{ opacity: 0, stagger: 0.2 }
	)
}
