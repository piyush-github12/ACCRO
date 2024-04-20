function init() {
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});





// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}

init()


 var images = document.querySelectorAll(".image-container img");
 var index = 0;

 function showImage() {
  images.forEach(function (image) {
    image.classList.remove("active");
  });

  images[index].classList.add("active");
  index = (index + 1) % images.length;
 }

setInterval(showImage, 500);

var navclick = document.querySelector(".navclick")
var wanttoin = document.querySelector(".wanttoin")
var wanttoout = document.querySelector(".wanttoout")
var navpagemobile = document.querySelector("#navpagemobile")

wanttoin.addEventListener("click",function(){
  navpagemobile.style.display = "block";
  wanttoin.style.display = "none";
  wanttoout.style.display = "block";
})
wanttoout.addEventListener("click",function(){
  navpagemobile.style.display = "none";
  wanttoin.style.display = "block";
  wanttoout.style.display = "none";
})

gsap.from("#nav",{
  y: -100,
  duration: 1,
  delay:1,
})

gsap.from(".chicken", {
  y: 400,
  duration: 1,
  delay: 1,
  repeat:0,
  
});
gsap.from("#roarrr", {
  y: -100,
  opacity:0,
  duration: 1,
  delay: 1,
});
gsap.from(".image-container",{
  opacity:0,
  scale:0.5,
  duration:1,
  delay:0.5,
});
gsap.from("#fourthcontainer",{
  y: 200,
  delay:0.2,

});
gsap.from("#fourthcontainer img", {
  
  delay: 1,
  width:0,
  opacity:0,
});

gsap.to(".Header__bg", {
  y: "8vh",
  scrollTrigger: {
    scroller: "#main",
    trigger: "#page1 #bottombackground",
    scrub: 0.15,
    start: "top 70%",
    end: "top 66%",
  },
});

gsap.to("#navkeandarkeitem", {
  y: "-20px",
  
  scrollTrigger: {
    scroller: "#main",
    trigger: "#page1 #bottombackground",
    scrub: 1,
    start: "top 70%",
    end: "top 66%",
  },
});

gsap.to(".chicken", {
   top: "50%",

  scrollTrigger: {
    scroller: "#main",
    trigger: "#page1 #bottombackground",
    scrub: 1,
    start: "top 80%",
    end: "top 10%",
  },
});

gsap.to(".image-container", {
  y: "60px",

  scrollTrigger: {
    scroller: "#main",
    trigger: "#page1 #bottombackground",
    scrub: 1,
    start: "top 65%",
    end: "top 0%",
  },
});
gsap.to("#bottombackground #leaf1", {
  y: "50vh",
  rotate:"40deg",
  scrollTrigger: {
    scroller: "#main",
    trigger: "#page1 #bottombackground",
    scrub: true,
    start: "top 65%",
    end: "top -100%",
  },
});
gsap.to("#bottombackground #leaf2", {
  y: "50vh",
  rotate : "-60deg",
  scrollTrigger: {
    scroller: "#main",
    trigger: "#page1 #bottombackground",
    scrub: true,
    start: "top 40%",
    end: "top -50%",
  },
});





var swipeleft = document.querySelector("#leftbut");
var swiperight = document.querySelector("#rightbut");
var itemcontainer = document.querySelector("#itemcontainer")

swiperight.addEventListener("click",function(){

  if (window.innerWidth < itemcontainer.getBoundingClientRect().right){
    itemcontainer.style.transform += `translate(-400px , 0)`;
  }
  else{
    itemcontainer.style.transform += `translate(0px , 0)`;
  } 
    swipeleft.style.fill = "black";
    swiperight.style.fill = "#0000005b";
})
swipeleft.addEventListener("click", function () {
  itemcontainer.style.transform = `translate(0% , 0)`;
  swipeleft.style.fill = "#0000005b";
  swiperight.style.fill = "black";


});

gsap.to("#bachgroundvid", {
  top:"100px",
  scrollTrigger: {
    trigger: "#page4tellmemoere",
    scroller:"#main",
    scrub:true,
    start:"top 85%"

  },
});


var seetherecipibox = document.querySelector("#seetherecipibox");
var seetherecipi = document.querySelectorAll(".seetherecipi");
var overlay1 = document.querySelector(".overlay1");
var overlay2 = document.querySelector(".overlay2");
var overlay3 = document.querySelector(".overlay3");

seetherecipibox.addEventListener("mouseenter",function(){
  gsap.to(".seetherecipi",{
    scale: "0.95",
    duration: 0.08,
  });
  overlay1.style.opacity = 1
  overlay2.style.opacity = 1
  overlay3.style.opacity = 1

})
seetherecipibox.addEventListener("mouseleave", function () {
  overlay1.style.opacity = 0;
  overlay2.style.opacity = 0;
  overlay3.style.opacity = 0;
  gsap.to(".seetherecipi", {
    scale: "1",
    duration: 0.08,
  });

});

seetherecipi.forEach(function (e) {
  var overlay = e.querySelector(".overlay");
  var fokebackgrou = e.querySelector(".fokebackgrou")
  var h2 = e.querySelector("h2")



  e.addEventListener("mouseenter", function (dets) {
    overlay.style.opacity = 0;
    gsap.to(e, {
      top: "-5vh",
      rotate: "2deg",
      duration : 0.1,
    });
    gsap.to(fokebackgrou,{
      // top: "2%",
      scale: "1.5",
      duration : 0.1,
    });
    gsap.to(h2,{
      y:-20,
      opacity:0,
      duration:0.2,
    })
  });

  e.addEventListener("mouseleave", function (dets) {
    overlay.style.opacity = 1;
    gsap.to(e, {
      top: 0,
      rotate: "0",
      duration: 0.1,
    });

      gsap.to(fokebackgrou, {
        // top: "10%",
        scale: "1",

        duration: 0.1,
      });
    gsap.to(h2, {
      y: 0,
      opacity: 1,
      duration: 0.2,
    });

  });
});


gsap.from("#bottomcontainer1", {
  y: 200,
  opacity: 0,

  scrollTrigger: {
    scroller: "#main",
    trigger: "#bottomcontainer1",

  },
});
gsap.from("#bottomcontainer2", {
  y: 200,
  opacity: 0,

  scrollTrigger: {
    scroller: "#main",
    trigger: "#bottomcontainer2",

  },
});
gsap.from("#bottomcontainer2 #highlight", {
  width: 0,
  duration:1,
  scrollTrigger: {
    scroller: "#main",
    trigger: "#bottomcontainer2 ",
  },
});
gsap.from("#bottomcontainer3", {
  y: 100,
  opacity: 0,

  scrollTrigger: {
    scroller: "#main",
    trigger: "#bottomcontainer3",

  },
});


var tl = gsap.timeline({
   
  scrollTrigger: {
    scroller: "#main",
    trigger: "#page3textbox",
    start: "100% 80%",
    end: "100% 50%",
    scrub: true,
  },

});
tl.from("#page3textbox #plant", {
  opacity: 0,
  transform: `rotate(10deg)`,
  
},"pl")
 tl.from("#page3textbox #plant2", {
   opacity: 0,
   y: 100,
  
},"pl")
tl.from("#page3textbox #plant3", {
  opacity: 0,
  y: 150,
  
},"pl");
tl.from("#page3textbox .Title__dots1", {
  y: 50,
  
},"pl");
tl.from("#page3textbox .Title__dots", {
  y: -50,
  
},"pl");


gsap.from("#item1", {
  y: 300,
  rotate:10,
  stagger: 0.2,
  scrollTrigger: {
    scroller: "#main",
    trigger: "#itemcontainer",
    start: "top 70%"
  },
});
gsap.from("#item1 #itemkaphotu", {
  y: 200,
  stagger: 0.4,

  scrollTrigger: {
    scroller: "#main",
    trigger: "#itemcontainer",
    start: "top 70%",
  },
});






var tl2 = gsap.timeline({
  scrollTrigger: {
    scroller: "#main",
    trigger: "#page4tellmemoere",
    start: "top 20%",
    end:"top -20%",
    scrub: true,

  },
});
tl2.from(".tell svg", {
  y: -100,
},"ii");
tl2.from(".tell img", {
  opacity: 0,
  scale: 0.5,  
},"ii");
tl2
  .from(
    ".tell h4",
    {
      y: 200,
      opacity: 0,
    },
    "ii"
  )
.from(
    ".tell h1",
    {
      y: 200,
      opacity: 0,
    },"ii"
  )
.from(
    ".tell h2",
    {
      x: 200,
      opacity: 0,
    }
);



var tl4 = gsap.timeline({
  scrollTrigger: {
    scroller: "#main",
    trigger: "#teethbox",
    start: "top 50%",
    end: "top 0",
  },
})

tl4.from("#teethbox #teethtop img", {
  top: "-20%",
  duration: 1,

  
},"tl4")
.from("#teethbox #teethbottom img", {
  top: "90%",
  duration: 1,
  
},"tl4")
.from("#teethbox .Title__dots1", {
  y: -100,
  duration:1,
  opacity:0,
  
},"tl4")
.from("#teethbox .Title__dots2", {
  y: 100,
  duration: 1,
  opacity: 0,

  
},"tl4")
.from("#teethbox h2", {
  scale:0.6,
  duration:1,
  
},"tl4")
.from("#teethbox h1", {
  scale:0.6,
  rotate:360,
  duration:0.5,
  
},"tl4");

var tl5 = gsap.timeline({
  scrollTrigger: {
    scroller: "#main",
    trigger: "#page7",
    start: "top 60%",
    end: "top 30%",
    scrub:true
  },
});

tl5.to("#page7 #leaf1 img",{
  scale:1.2,
  rotate:-60,
  duration:1,

},"tl5")
tl5.to(
  "#page7 #leaf2 img",
  {
    scale: 1.2,
    rotate: -30,
    duration: 1,
  },
  "tl5"
);