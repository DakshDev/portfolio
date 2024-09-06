// scrollTriger Properties
// scrollTrigger:{
//     trigger:"#page1 #box",
//     scroller:"body",
//     start:"top 50%",
//     end:"bottom 50%",
//     markers:true,
//     scrub:2,
// }


// x:
// y:
// repeat:
// duration:
// delay:
// stagger:
// yoyo:


function scrollTriggerAnimation(){
    const firstSrollAnimation = document.querySelector("#firstSrollAnimation");

    gsap.to(firstSrollAnimation.firstElementChild.children,{
        width: "51%",
        scrollTrigger:{
            trigger:"#home",
            scroller:"body",
            start:"top 0%",
            end:"bottom -50%",
            // markers:true,
            pin: true,
            scrub:1,
        }
    });

};
// scrollTriggerAnimation();