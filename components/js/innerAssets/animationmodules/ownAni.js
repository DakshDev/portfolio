const openMenuBoxBtn = document.querySelectorAll("[openMenuBoxBtn]");
const navBgAnim = document.querySelector("[navBgAnim_Own]").firstElementChild;
const mainNavContainer = document.querySelector("[mainNavContainer_Own]");
let navFlag = true;



import { openNavBox, closeNavBox } from "./gsap.js";

function byClickBarBtnAnimi(){
    openMenuBoxBtn.forEach(e=>{
        e.addEventListener("click",()=>{

            
            if(navFlag){
                document.body.classList.add("overflow-hidden");
                mainNavContainer.classList.replace("hidden","block")
                setTimeout(()=>{
                    new Promise((res,rej)=>{
                        navBgAnim.classList.replace("translate-x-[100vw]","translate-x-0");
                        res();
                    }).then(()=>{
                        setTimeout(()=>{
                            navBgAnim.classList.replace("h-10","h-screen");
                            setTimeout(()=>{
                                openNavBox();
                            },500);
                        },600);
                    });
                },200);

                navFlag = false;
            }else{
                closeNavBox();
                
                setTimeout(()=>{
                    new Promise((res,rej)=>{
                        navBgAnim.classList.replace("h-screen","h-10");
                        res();
                    }).then(()=>{
                        setTimeout(()=>{
                            
                            navBgAnim.classList.replace("translate-x-0","translate-x-[100vw]");
                            setTimeout(()=>{
                                mainNavContainer.classList.replace("block","hidden");
                                document.body.classList.replace("overflow-hidden","overflow-auto");
                            },400);
                        },600);
                    });
                },500);

                navFlag = true;
            }
            
        });
    });
}







export {byClickBarBtnAnimi};