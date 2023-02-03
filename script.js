// navigation....././...
let menuToggle = document.querySelector(".menuToggle");
let navigation = document.querySelector(".navigation");

menuToggle.onclick = function () {
    navigation.classList.toggle('active')
}

let list = document.querySelectorAll(".list");

function activeLink() {
    list.forEach((item) => {
        item.classList.remove('active');
    })
    this.classList.add('active');
}
list.forEach((item) =>
    item.addEventListener('click', activeLink)
);


// tabslinks

const certlink = document.querySelector('#cert-link');
const certificate = document.querySelector('#certificate');
const achivlink = document.querySelector('#achiv-link');
const achivements = document.querySelector('#achivements');
const educlink = document.querySelector('#educ-link');
const education = document.querySelector('#education');

certlink.addEventListener('click', () => {
    achivements.style.display = "none";
    education.style.display = "none"
    certificate.style.display = "flex";
});

achivlink.addEventListener('click', () => {
    certificate.style.display = "none"
    education.style.display = "none"
    achivements.style.display = "flex";
});

educlink.addEventListener('click', () => {
    certificate.style.display = "none"
    achivements.style.display = "none";
    education.style.display = "flex";
});


// gsap

function Gsap() {

    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();

    // $('#profilename').textillate({ in: { effect: 'flash' } });

    gsap.from('.navigation', {
        duration: 2,
        x: -20,
        delay: 7.5,
        ease: 'Expo.easeInOut',
        opacity: 0
    })

    var tl = gsap.timeline();

    tl.from('.navitem', {
        stagger: .3,
        duration: 2,
        y: 20,
        delay: 7,
        ease: 'Expo.easeInOut',
        opacity: 0
    })
        .from('#smline', {
            width: 0,
            duration: 1,
            ease: 'Expo.easeInOut',
        }, '-=2')
        .from('.leftitm', {
            stagger: .3,
            duration: 2,
            y: 20,
            ease: 'Expo.easeInOut',
            opacity: 0,
        }, '-=2')
        .from('.pg_1-right_container', {
            duration: 2,
            scale: 1.05,
            ease: 'Expo.easeInOut',
            opacity: 0
        }, '-=2')

    // page_2_gsap

    gsap.from(".About_img", {
        duration: 1.5,
        scale: 0,
        opacity: 0,
        ease: 'Expo.easeInOut',
        scrollTrigger: {
            trigger: ".pg_2_left",
            scroller: "#main",
            start: "top 50%"
        }
    })

    gsap.from(".pg_2_right>h1", {
        duration: 1.5,
        opacity: 0,
        delay: 1,
        y: 30,
        ease: 'Expo.easeInOut',
        scrollTrigger: {
            trigger: ".pg_2_right",
            scroller: "#main",
            start: "top 50%"
        }
    })

    gsap.from(".pg_2_right>p", {
        duration: 1.5,
        opacity: 0,
        y: 30,
        delay: 1,
        ease: 'Expo.easeInOut',
        scrollTrigger: {
            trigger: ".pg_2_right>h1",
            scroller: "#main",
            start: "top 50%"
        }
    })

    gsap.from(".pg_2_right_btm", {
        duration: 1.5,
        opacity: 0,
        y: 30,
        delay: 1,
        ease: 'Expo.easeInOut',
        scrollTrigger: {
            trigger: ".pg_2_right>p",
            scroller: "#main",
            start: "top 50%"
        }
    })

    // page_3_gsap

    gsap.from(".pg_3_heading", {
        duration: 1.5,
        opacity: 0,
        x: -30,
        ease: 'Expo.easeInOut',
        scrollTrigger: {
            trigger: ".pg_3_heading",
            scroller: "#main",
            start: "top 50%"
        }
    })

    gsap.from(".pg_3_mid", {
        duration: 1.5,
        opacity: 0,
        ease: 'Expo.easeInOut',
        scrollTrigger: {
            trigger: ".pg_3_mid",
            scroller: "#main",
            start: "top 50%"
        }
    })
    gsap.from(".pg_3_mid>h1", {
        duration: 1,
        opacity: 0,
        delay: 1.5,
        y: 30,
        ease: 'Expo.easeInOut',
        scrollTrigger: {
            trigger: ".pg_3_mid",
            scroller: "#main",
            start: "top 50%"
        }
    })

    gsap.from(".pg_3_bottom", {
        duration: 1.5,
        opacity: 0,
        delay: 1.5,
        ease: 'Expo.easeInOut',
        scrollTrigger: {
            trigger: ".pg_3_mid",
            scroller: "#main",
            start: "top 50%"
        }
    })
    gsap.from(".pg_3_bottom>h1", {
        duration: 1,
        opacity: 0,
        delay: 2,
        y: 30,
        ease: 'Expo.easeInOut',
        scrollTrigger: {
            trigger: ".pg_3_mid",
            scroller: "#main",
            start: "top 50%"
        }
    })

    // page_4 

    gsap.from(".pg_4_heading>h1", {
        duration: 1.5,
        opacity: 0,
        y: 30,
        ease: 'Expo.easeInOut',
        scrollTrigger: {
            trigger: ".pg_4_heading",
            scroller: "#main",
            start: "top 50%",
        }
    })

    gsap.from(".pg_4_heading>small", {
        duration: 1.5,
        opacity: 0,
        delay: 1,
        y: 30,
        ease: 'Expo.easeInOut',
        scrollTrigger: {
            trigger: ".pg_4_heading",
            scroller: "#main",
            start: "top 50%",
        }
    })

    gsap.from(".card", {
        duration: 1.5,
        opacity: 0,
        scale: 2,
        delay: 1,
        ease: 'Expo.easeInOut',
        scrollTrigger: {
            trigger: ".page_4_cards_container",
            scroller: "#main",
            start: "top 50%",
        }
    })


    // page_5 

    gsap.from("#page_5_txt", {
        duration: 1.5,
        opacity: 0,
        y: 30,
        ease: "Expo.easeInOut",
        scrollTrigger: {
            trigger: "#page_5",
            scroller: "#main",
            start: "top 50%",
        }
    })
    gsap.from(".page_5_bottom_content_wrapper>.box", {
        duration: 1.5,
        opacity: 0,
        scale: 0.8,
        delay: 1,
        ease: 'Expo.easeInOut',
        scrollTrigger: {
            trigger: ".page_5_bottom_content_wrapper",
            scroller: "#main",
            start: "top 50%",
        }
    });

    // footer

    gsap.from(".footer_heading>h1", {
        duration: 1.5,
        opacity: 0,
        y: 30,
        ease: "Expo.easeInOut",
        scrollTrigger: {
            trigger: "#footer",
            scroller: "#main",
            start: "top 50%",
        }
    })

    gsap.from(".line1", {
        duration: 1.5,
        opacity: 0,
        y: 30,
        ease: "Expo.easeInOut",
        scrollTrigger: {
            trigger: ".footer_heading",
            scroller: "#main",
            start: "top 50%",
        }
    })

    gsap.from(".line2", {
        duration: 1.5,
        opacity: 0,
        y: 30,
        delay: 0.5,
        ease: "Expo.easeInOut",
        scrollTrigger: {
            trigger: ".footer_heading",
            scroller: "#main",
            start: "top 50%",
        }
    })

    gsap.from(".line3", {
        duration: 1.5,
        opacity: 0,
        delay: 0.6,
        y: 30,
        ease: "Expo.easeInOut",
        scrollTrigger: {
            trigger: ".footer_heading",
            scroller: "#main",
            start: "top 50%",
        }
    })

    gsap.from(".line4", {
        duration: 1.5,
        opacity: 0,
        delay: 0.7,
        y: 30,
        ease: "Expo.easeInOut",
        scrollTrigger: {
            trigger: ".footer_heading",
            scroller: "#main",
            start: "top 50%",
        }
    })
    gsap.from(".footer_right #li-1", {
        duration: 1.5,
        opacity: 0,
        delay: 1.1,
        y: 30,
        ease: "Expo.easeInOut",
        scrollTrigger: {
            trigger: ".footer_heading",
            scroller: "#main",
            start: "top 50%",
        }
    })
    gsap.from(".footer_right #li-2", {
        duration: 1.5,
        opacity: 0,
        delay: 2,
        y: 30,
        ease: "Expo.easeInOut",
        scrollTrigger: {
            trigger: ".footer_heading",
            scroller: "#main",
            start: "top 50%",
        }
    })
    gsap.from(".footer_right #li-3", {
        duration: 1.5,
        opacity: 0,
        delay: 2.4,
        y: 30,
        ease: "Expo.easeInOut",
        scrollTrigger: {
            trigger: ".footer_heading",
            scroller: "#main",
            start: "top 50%",
        }
    })
    gsap.from(".footer_right #li-4", {
        duration: 1.5,
        opacity: 0,
        delay: 2.8,
        y: 30,
        ease: "Expo.easeInOut",
        scrollTrigger: {
            trigger: ".footer_heading",
            scroller: "#main",
            start: "top 50%",
        }
    })
    gsap.from(".footer_right #li-5", {
        duration: 1.5,
        opacity: 0,
        delay: 3,
        y: 30,
        ease: "Expo.easeInOut",
        scrollTrigger: {
            trigger: ".footer_heading",
            scroller: "#main",
            start: "top 50%",
        }
    })
    gsap.from(".End_txt", {
        duration: 1.5,
        opacity: 0,
        delay: 3.5,
        y: 30,
        ease: "Expo.easeInOut",
        scrollTrigger: {
            trigger: ".footer_heading",
            scroller: "#main",
            start: "top 50%",
        }
    })

}

Gsap();

// ------------------------------------------End-gsap-------------------------------------

// tiltjs

VanillaTilt.init(document.querySelectorAll('.card, .img_container, .box'), {
    glare: true,
    reverse: true,
    "max-glare": 0.5
});

