import gsap from "gsap";

export function headerAnimation(){
    const timeline = gsap.timeline({ defaults: { duration: 1, ease: "power1" } });
    timeline
    .from(".hi", { opacity: 0 })
    .from(".im", { opacity: 0 })
    .from(".name", {
        opacity: 0,
        y: "-20%",
        duration: 0.5,
        ease: "bounce",
    })
    .to(".description span", {
        y: 0,
        opacity: 1,
        duration: 0.3,
        stagger: 0.05,
        repeat: 0,
        ease: "power2.out",
    })
    .to(".subtitle", {
        opacity: 1,
        y: 0,
    })
    .to(".scroll-round", { opacity: 1, scale: 1.1, ease: "power1.in" })
    .from(".scroll-round", { scale: 1, ease: "power1.out", duration: 1 });

}