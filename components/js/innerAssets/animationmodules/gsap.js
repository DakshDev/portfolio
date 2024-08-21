const navBtnAnimi = document.querySelector("[navBtnAnimi_GSAP]").children;
const navAsideAnimi = document.querySelector("[navAsideAnimi_GSAP]").children;




function defaultValueGSAP(){
// Nav
    gsap.to(navBtnAnimi,{
        x:-100,
        opacity:0,
    })
    gsap.to(navAsideAnimi,{
        x:100,
        opacity:0,
    })
}

// Opening Nav Bar with Animation
function openNavBox(){
    let tl = gsap.timeline();

    tl.to(navBtnAnimi,{
        x:0,
        opacity:1,
        stagger:0.1,
        duration:0.4,
    })
    tl.to(navAsideAnimi,{
        x:0,
        opacity:1,
        stagger:0.1,
        duration:0.4,
    })
};

function closeNavBox(){
    let tl = gsap.timeline();

    gsap.to(navBtnAnimi,{
        x:-100,
        opacity:0,
        stagger:0.1,
        duration:0.4,
    })
    tl.to(navAsideAnimi,{
        x:100,
        opacity:0,
        stagger:0.1,
        duration:0.4,
    })
};



export {openNavBox, closeNavBox, defaultValueGSAP};  