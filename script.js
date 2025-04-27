function locomotiveAnimation(){
    gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,

  // for tablet smooth
  tablet: { smooth: true },

  // for mobile
  smartphone: { smooth: true }
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  }

  // follwoing line is not required to work pinning on touch screen

  /* pinType: document.querySelector(".smooth-scroll").style.transform
    ? "transform"
    : "fixed"*/
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

}
locomotiveAnimation();

function loadingAnimation(){
    var tl =gsap.timeline()
tl.from("page1",{
    opacity:0,
    duration:0.3,
    delay:0.2
})
tl.from("#page1",{
    transform:"scaleX(0.7) scaleY(0.2)",
    borderRadius:"50px",
    duration:1.5,
    ease:"expo.out"
})
tl.from("nav", {
    opacity:0,
    delay:-0.2
})
tl.from("#page1 h1, #page1 p, #page1 div", {
    opacity:0,
    duration:0.5,
    stagger:0.2
})

}
loadingAnimation();

function page2Animation(){
    var rightElems = document.querySelectorAll(".right-elem")

    rightElems.forEach(function(elem){
        elem.addEventListener("mouseenter",function(){
            gsap.to(elem.childNodes[3],{
                opacity:1,
                scale: 1
            })
        })
        elem.addEventListener("mouseleave",function(){
            gsap.to(elem.childNodes[3],{
                opacity:0,
                scale: 0
            })
        })
        elem.addEventListener("mousemove", function(dets){
            gsap.to(elem.childNodes[3],{
                x:dets.x - elem.getBoundingClientRect().x-50,
                y:dets.y - elem.getBoundingClientRect().y - 120
            })
        })
    })
}

function listAnimation(){
    gsap.from("#btm7-part2 h4",{
        x:0,
        duration:1,
        scrollTrigger:{
            trigger:"#btm7-part2",
            scroller:"#main",
            // markers:true,
            start:"top 60%",
            end:"top 10%",
            scrub:true
        }
    })
    
    gsap.from("#btm7-part3 h4",{
        x:0,
        duration:1,
        scrollTrigger:{
            trigger:"#btm7-part2",
            scroller:"#main",
            // markers:true,
            start:"top 60%",
            end:"top 10%",
            scrub:true
        }
    })
    
    gsap.from("#btm7-part4 h4",{
        x:0,
        duration:1,
        scrollTrigger:{
            trigger:"#btm7-part2",
            scroller:"#main",
            // markers:true,
            start:"top 60%",
            end:"top 10%",
            scrub:true
        }
    })
    
    gsap.from("#btm7-part5 h4",{
        x:0,
        duration:1,
        scrollTrigger:{
            trigger:"#btm7-part2",
            scroller:"#main",
            // markers:true,
            start:"top 60%",
            end:"top 10%",
            scrub:true
        }
    })
}

page2Animation();
listAnimation();





