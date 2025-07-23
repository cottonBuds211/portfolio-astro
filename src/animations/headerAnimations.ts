import { gsap } from '../animations/gsapConfig'
export function headerAnimation() {
	const timeline = gsap.timeline({
		defaults: { duration: 1, ease: 'power1' },
	})
	timeline
		.from('header, main',	{opacity: 0,
			y: 50,
			ease: 'power1.out',
			stagger: 0.1
		})
}
