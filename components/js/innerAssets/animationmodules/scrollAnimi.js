// scrollTriger Properties
// scrollTrigger:{
//     trigger:"#page1 #box",
//     scroller:"body",
//     start:"top 50%",
//     end:"bottom 50%",
//     markers:true,
//     scrub:2,
// }



function scrollAnimationFun(){
    let tl_1 = gsap.timeline();
    tl_1.from("[home_main]",{
        opacity:0,
        delay:0.2,
    })
    tl_1.from("[header_main]",{
        opacity: 0,
        y:-50,
        duration: 0.5,
    });
    tl_1.from("[header_main] > div",{
        y: -50,
        opacity: 0,
        duration: 0.5,
        stagger: 0.3,
    });
    tl_1.from("[home_main_from1] > div > div",{
        y: 50,
        opacity: 0,
        duration: 0.5,
        stagger: 0.3,
    });
    tl_1.from("[home_main_from2] > img",{
        opacity: 0,
        y:50,
        duration: 0.5,
    });






    // Scroll Animation
// Home Page
    gsap.from("[scrollTrigger_uptobottom]",{
        y:"-100vh",
        scrollTrigger:{
            trigger:"[home_main]",
            scroller:"body",
            start:"top 0%",
            end:"bottom 20%",
            // markers:true,
            scrub:1,
        }
    });

    gsap.from("[scrollTrigger_uptobottom] > div > section",{
        scale: 0,
        opacity:0,
        scrollTrigger:{
            trigger:"[home_main]",
            scroller:"body",
            start:"top 0%",
            end:"bottom -50%",
            // markers:true,
            scrub:1,
            pin: true,
        }
    });





// About Page
    gsap.from("[about_inner_main] > div > span",{
        opacity: 0,
        y:100,
        duration:0.5,
        scrollTrigger:{
            trigger:"[about_inner_main]",
            scroller:"body",
            start:"top 65%",
            end:"bottom 140%",
            // markers:true,
            scrub:1,
        }
    });
    gsap.from("[about_inner_child1]",{
        stagger: 0.3,
        opacity: 0,
        y:100,
        duration:0.5,
        scrollTrigger:{
            trigger:"[about_inner_main]",
            scroller:"body",
            start:"top 60%",
            end:"bottom 100%",
            // markers:true,
            scrub:1,
        }
    });

    
  

// Skill Page
gsap.from("[skill_inner_main_heading]",{
    opacity: 0,
    y:100,
    duration:0.5,
    scrollTrigger:{
        trigger:"[circular_progress_parent_box]",
        scroller:"body",
        start:"top 80%",
        end:"bottom 150%",
        // markers:true,
        scrub:1,
    }
}); 

gsap.from("[progressBoxForAppend] > div",{
    stagger:0.5,
    opacity: 0,
    y:500,
    duration:1,
    scrollTrigger:{
        trigger:"[progressBoxForAppend]",
        scroller:"body",
        start:"top 15%",
        end:"bottom -150%",
        // markers:true,
        scrub:1,
    }
}); 
gsap.to("[bottom_border_scrollAnimi_parent]",{
    opacity:1,
    scrollTrigger:{
        trigger:"[bottom_border_scrollAnimi_parent]",
        scroller:"body",
        start:"top 60%",
        end:"bottom 30%",
        // markers:true,
        scrub:1,
    }
})
gsap.to("[bottom_border_scrollAnimi]",{
    width: "100%",
    scrollTrigger:{
        trigger:"[circular_progress_parent_box]",
        scroller:"body",
        start:"top -5%",
        end:"bottom -200%",
        // markers:true,
        pin: true,
        scrub:1,
    }
});





// experties Page
gsap.from("[Expertie_inner_main_heading]",{
    opacity: 0,
    y:100,
    duration:1,
    scrollTrigger:{
        trigger:"[Expertie_inner_main]",
        scroller:"body",
        start:"top 70%",
        end:"bottom 300%",
        // markers:true,
        scrub:1,
    }
}); 
gsap.from("[Expertie_inner_main_y]",{
    stagger:0.3,
    opacity: 0,
    y:100,
    duration:1,
    scrollTrigger:{
        trigger:"[Expertie_inner_main]",
        scroller:"body",
        start:"top 70%",
        end:"bottom 70%",
        // markers:true,
        scrub:1,
    }
}); 

};


scrollAnimationFun();