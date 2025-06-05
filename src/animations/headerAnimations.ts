import gsap from 'gsap'

export function headerAnimation() {
	const scrollArrow = document.querySelector('.scroll-round')
	const timeline = gsap.timeline({
		defaults: { duration: 1, ease: 'power1' },
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
		})

		.to('.scroll-round', {
			opacity: 1,
			scale: 1.5,
			ease: 'power2.out',
			duration: 0.6,
		})
		.to('.scroll-round', { scale: 1, ease: 'power2.inOut', duration: 0.4 })

	//hide arrow when scrolling
	function handleScroll() {
		if (window.scrollY > 0) {
			gsap.to('.scroll-round', { opacity: 0, delay: 0.5 })
		} else {
			gsap.to('.scroll-round', { opacity: 1 })
		}
	}

	window.addEventListener('scroll', handleScroll)

	//hover button
	scrollArrow?.addEventListener('mouseenter', () =>
		gsap.to('.scroll-round', { scale: 1.1, duration: 0.3 })
	)
	scrollArrow?.addEventListener('mouseleave', () =>
		gsap.to('.scroll-round', { scale: 1, duration: 0.3 })
	)
}
