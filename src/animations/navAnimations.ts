  import gsap from "gsap";

  export function navAnimation() {
      const tl = gsap.timeline({paused:true})  
      tl

      function handleScroll(){
        if(window.scrollY > 0 && !tl.isActive()){
          tl.play();
          window.removeEventListener('scroll', handleScroll)
        }
      }

      window.addEventListener('scroll', handleScroll)

  }
