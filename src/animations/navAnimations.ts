  import gsap from "gsap";

  export function navAnimation() {
      const tl = gsap.timeline({paused:true})  
      tl.from(".nav",{
        y: "-100%",
        duration: 1,
        ease: "bounce",
      })

      function handleScroll(){
        if(window.scrollY > 0 && !tl.isActive()){
          tl.play();
          window.removeEventListener('scroll', handleScroll)
        }
      }

      window.addEventListener('scroll', handleScroll)

  }
