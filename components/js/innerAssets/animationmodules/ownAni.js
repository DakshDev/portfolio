const openMenuBoxBtn = document.querySelectorAll("[openMenuBoxBtn]");
const navBgAnim = document.querySelector("[navBgAnim_Own]").children;
const mainNavContainer = document.querySelector("[mainNavContainer_Own]");
let navFlag = true;



import { openNavBox, closeNavBox } from "./gsap.js";

function byClickBarBtnAnimi(){
    openMenuBoxBtn.forEach(e=>{
        e.addEventListener("click",()=>{
            if(navFlag){
                let i = 0;
                mainNavContainer.style.display = "block";
                let interval = setInterval(()=>{
                    if(navBgAnim.length > i){
                        navBgAnim[i++].style.height = "100vh";
                    }else{
                        forIntervalClose();
                        document.body.style.cssText = "overflow-y: hidden;";
                    }
                },100)
                function forIntervalClose(){ clearInterval(interval) }
                setTimeout(()=>{ openNavBox() },1000)
                navFlag = false;

            }else{
                closeNavBox();
                let i = 0;
                setTimeout(()=>{
                    let interval = setInterval(()=>{
                        if(navBgAnim.length > i){
                            navBgAnim[i++].style.height = "0px";
                            document.body.style.cssText = "overflow-y: scroll;";
                        }else{
                            forIntervalClose();
                            setTimeout(()=>{mainNavContainer.style.display = "none";}, 200)
                        }
                    },100)
                    function forIntervalClose(){ clearInterval(interval) }
                },900)
                navFlag = true;
            }
        });
    });
}







export {byClickBarBtnAnimi};