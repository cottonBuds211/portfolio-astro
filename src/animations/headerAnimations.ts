import { gsap } from '../animations/gsapConfig'
export function headerAnimation() {
	const timeline = gsap.timeline({
		defaults: { duration: .5, ease: 'power1' },
	})
	timeline
		.from('.hi', { opacity: 0, delay: 1 })
		.from('.im', { opacity: 0 })
		.from('.name', {
			opacity: 0,
			y: '-20%',
			duration: 0.5,
			ease: 'bounce',
		})
		.to('.description span', {
			y: 0,
			opacity: 1,
			duration: 0.3,
			stagger: 0.05,
			repeat: 0,
			ease: 'power2.out',
		})
		.to('.subtitle', {
			opacity: 1,
			y: 0,
		}).from(".nav",{
			y: "-100%",
			ease: "bounce",
		}).from('main section',	{opacity: 0,
			y: 50,
			ease: 'power1.out',
			stagger: 0.3
		})
}
