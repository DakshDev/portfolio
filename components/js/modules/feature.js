import {html_svg, css_svg, js_svg, mongoDB_svg, expressjs_svg, react_svg, nodejs_svg, git_svg, gitlab_svg, github_svg, docker_svg, seo_svg, smm_svg, tailwind_svg, bootstrap_svg, angular_svg, typescript_svg} from "./skilliconSvg.js";


function features(){
// First Loading Box
window.addEventListener("load",function(){
    document.getElementById("FirstloadingBox").style.display = "none";
});

    
function againStart(){ homePageTextAnimation() }
function homePageTextAnimation(){
    let txtAnima = document.querySelector("[animate_text_home]");

    
    let skillArr = [];
    function refresh(){ 
        let final = skillArr.join("");
        txtAnima.innerText = final;
    }

    // Start Promise One
    let p1 = new Promise((res,rej)=>{
        let firstSkill = "web developer";
        let first = 0;
        let int = setInterval(()=>{
            if(firstSkill.length > first){
                skillArr[first] = firstSkill[first];
                first++;
                refresh();
            }else{
                setTimeout(()=>{
                    closeInt(); 
                    res("Start First Skill")
                },900);
            }
        },100)
        function closeInt(){ clearInterval(int) }
    });

    // End Promise One
    let p2 = p1.then(()=>{
        return new Promise((res,rej)=>{
            let dTxt = txtAnima.innerText;
            let makeArr = dTxt.split("");
            let int = setInterval(()=>{
                makeArr.pop();
                let joinArr = makeArr.join("");
                txtAnima.innerText = joinArr;
                if(makeArr.length == 0){
                    closeInt();
                    res("End First Skill")
                }
            },100)
            function closeInt(){ clearInterval(int) }
        });
    });



    // Start Promise Two
    let p3 = p2.then(()=>{
        return new Promise((res,rej)=>{
            let secSkill = "MERN developer";
            let first = 0;
            skillArr.length = 0;
            let int = setInterval(()=>{
                if(secSkill.length > first){
                    skillArr[first] = secSkill[first];
                    first++;
                    refresh();
                }else{
                    setTimeout(()=>{
                        closeInt(); 
                        res("Start Second Skill")
                    },900);
                }
            },100)
            function closeInt(){ clearInterval(int) }
        });
    });

    // End Promise Two
    let p4 = p3.then(()=>{
        return new Promise((res,rej)=>{
            let dTxt = txtAnima.innerText;
            let makeArr = dTxt.split("");
            let int = setInterval(()=>{
                makeArr.pop();
                let joinArr = makeArr.join("");
                txtAnima.innerText = joinArr;
                if(makeArr.length == 0){
                    closeInt();
                    res("End Second Skill")
                }
            },100)
            function closeInt(){ clearInterval(int) }
        });
    });



    // Start Promise Three
    let p5 = p4.then(()=>{
        return new Promise((res,rej)=>{
            let thirdSkill = "SEO Expert";
            let first = 0;
            skillArr.length = 0;
            let int = setInterval(()=>{
                if(thirdSkill.length > first){
                    skillArr[first] = thirdSkill[first];
                    first++;
                    refresh();
                }else{
                    setTimeout(()=>{
                        closeInt(); 
                        res("Start Third Skill")
                    },900);
                }
            },100)
            function closeInt(){ clearInterval(int) }
        });
    });
    
    // End Promise Three
    let p6 = p5.then(()=>{
        return new Promise((res,rej)=>{
            let dTxt = txtAnima.innerText;
            let makeArr = dTxt.split("");
            let int = setInterval(()=>{
                makeArr.pop();
                let joinArr = makeArr.join("");
                txtAnima.innerText = joinArr;
                if(makeArr.length == 0){
                    closeInt();
                    res("End Third Skill")
                }
            },100)
            function closeInt(){ clearInterval(int) }
        });
    });
    


    // Start Promise Three
    let p7 = p6.then(()=>{
        return new Promise((res,rej)=>{
            let forthSkill = "SMM Expert";
            let first = 0;
            skillArr.length = 0;
            let int = setInterval(()=>{
                if(forthSkill.length > first){
                    skillArr[first] = forthSkill[first];
                    first++;
                    refresh();
                }else{
                    setTimeout(()=>{
                        closeInt(); 
                        res("Start Third Skill")
                    },900);
                }
            },100)
            function closeInt(){ clearInterval(int) }
        });
    });

    // End Promise Three
    p7.then(()=>{
        return new Promise((res,rej)=>{
            let dTxt = txtAnima.innerText;
            let makeArr = dTxt.split("");
            let int = setInterval(()=>{
                makeArr.pop();
                let joinArr = makeArr.join("");
                txtAnima.innerText = joinArr;
                if(makeArr.length == 0){
                    closeInt();
                    res("End Third Skill")
                    againStart();   
                }
            },100)
            function closeInt(){ clearInterval(int) }
        });
    });

}homePageTextAnimation();



function mouseMoveBox(){
    let body = document.body;
    document.addEventListener("mousemove",(e)=>{
        let elm = document.createElement("div");
        elm.setAttribute("class","mouseMoveBox")
        elm.setAttribute("style",`left: ${e.clientX}px; top: ${e.clientY}px;`);
        elm.onanimationend=()=>{
            elm.remove();
        }
        body.insertAdjacentElement("beforeend",elm);
    })

}mouseMoveBox();



function circularProgressBar(){

    class LangAndFrame{
        #language;
        #percentage;
        #skillSvg;
        constructor(lang,perc,svg){
            this.#language = lang;
            this.#percentage = perc;
            this.#skillSvg = svg;
        }
        innerMain(){
            let deg = 3.6 * this.#percentage;
            let per = deg / 3.6;

            // Making Progress Box
            let progressBoxForAppend = document.querySelector("[progressBoxForAppend]");
            
            let progressBox_Elm = document.createElement("div");
            progressBox_Elm.className = "relative z-10 overflow-hidden grid gap-4 text-center content-center p-4 bg-bg2 backdrop:blur-[50px] rounded-md";
            progressBox_Elm.setAttribute("progressBox_Elm","progressBox_Elm");
            progressBox_Elm.setAttribute("tilt_element","tilt_element");
            let innerSpan_Elm = document.createElement("span");
            innerSpan_Elm.className = "absolute z-10"
            // innerSpan_Elm.innerHTML = this.#skillSvg;
            progressBox_Elm.appendChild(innerSpan_Elm);
            
            let innerCircleHover_Skill = document.createElement("div");
            innerCircleHover_Skill.className = "absolute left-0 top-0 size-full z-10";
            

            let progress_Elm = document.createElement("div");
            progress_Elm.className = "size-[140px] max-lg:size-[120px]";
            progress_Elm.setAttribute("circular_progress","circular_progress");

            let span_Elm = document.createElement("span");
            span_Elm.className = "absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] secHeading";
            span_Elm.innerHTML = per+"%";

            let h3 = document.createElement("h3");
            h3.className = "secHeading uppercase";
            h3.innerHTML = this.#language;

            progress_Elm.appendChild(span_Elm);
            progressBox_Elm.appendChild(innerCircleHover_Skill);
            progressBox_Elm.appendChild(progress_Elm);
            progressBox_Elm.appendChild(h3)
            progressBoxForAppend.appendChild(progressBox_Elm);

            progress_Elm.style.cssText = `background: conic-gradient(var(--pri-clr) ${deg}deg, var(--sec-clr) 0deg);`;


            let svg = this.#skillSvg

            // Mouse Move Animation
            function mouseMoveAnimi(){
                let isSvgIncluede = true;
                innerCircleHover_Skill.addEventListener("mousemove",(e)=>{
                    if(isSvgIncluede === true){
                        innerSpan_Elm.innerHTML = svg;
                        isSvgIncluede = false;
                    }
                    let x = e.offsetX;
                    let y = e.offsetY; 
                    innerSpan_Elm.style.cssText = `scale: 1.5; display: inline-block; position: absolute; left: ${x - innerSpan_Elm.clientWidth / 2}px; top: ${y - innerSpan_Elm.clientHeight / 2}px;`;
                });
                innerCircleHover_Skill.addEventListener("mouseout",(e)=>{
                        innerSpan_Elm.innerHTML = "";
                        isSvgIncluede = true;
                });
                
            }mouseMoveAnimi();
        }
    }


    new LangAndFrame("html",90,html_svg).innerMain();
    new LangAndFrame("css",90,css_svg).innerMain();
    new LangAndFrame("JS",90,js_svg).innerMain();
    new LangAndFrame("mongoDB",90,mongoDB_svg).innerMain();
    new LangAndFrame("express",50,expressjs_svg).innerMain();
    new LangAndFrame("react",60,react_svg).innerMain();
    new LangAndFrame("node",90,nodejs_svg).innerMain();
    new LangAndFrame("tailwind",80,tailwind_svg).innerMain();
    new LangAndFrame("bootstrap",50,bootstrap_svg).innerMain();
    new LangAndFrame("git",90,git_svg).innerMain();
    new LangAndFrame("docker",80,docker_svg).innerMain();
    new LangAndFrame("seo",90,seo_svg).innerMain();

}circularProgressBar();



function secButtonFun(){
    let html = `
<div class="star-1">
<svg xml:space="preserve" version="1.1" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd" viewBox="0 0 784.11 815.53">
<defs></defs>
<g id="Layer_x0020_1">
    <metadata id="CorelCorpID_0Corel-Layer"></metadata>
    <path class="secBtnInnerPath" d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"></path>
</g>
</svg>
</div>
<div class="star-2">
<svg xml:space="preserve" version="1.1" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd" viewBox="0 0 784.11 815.53">
<defs></defs>
<g id="Layer_x0020_1">
    <metadata id="CorelCorpID_0Corel-Layer"></metadata>
    <path class="secBtnInnerPath" d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"></path>
</g>
</svg>
</div>
<div class="star-3">
<svg xml:space="preserve" version="1.1" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd" viewBox="0 0 784.11 815.53">
<defs></defs>
<g id="Layer_x0020_1">
    <metadata id="CorelCorpID_0Corel-Layer"></metadata>
    <path class="secBtnInnerPath" d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"></path>
</g>
</svg>
</div>
<div class="star-4">
<svg xml:space="preserve" version="1.1" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd" viewBox="0 0 784.11 815.53">
<defs></defs>
<g id="Layer_x0020_1">
    <metadata id="CorelCorpID_0Corel-Layer"></metadata>
    <path class="secBtnInnerPath" d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"></path>
</g>
</svg>
</div>
<div class="star-5">
<svg xml:space="preserve" version="1.1" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd" viewBox="0 0 784.11 815.53">
<defs></defs>
<g id="Layer_x0020_1">
    <metadata id="CorelCorpID_0Corel-Layer"></metadata>
    <path class="secBtnInnerPath" d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"></path>
</g>
</svg>
</div>
<div class="star-6">
<svg xml:space="preserve" version="1.1" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd" viewBox="0 0 784.11 815.53">
<defs></defs>
<g id="Layer_x0020_1">
    <metadata id="CorelCorpID_0Corel-Layer"></metadata>
    <path class="secBtnInnerPath" d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"></path>
</g>
</svg>
</div>`;

    document.querySelectorAll("[primary_btn]")
    .forEach(e => {
        e.insertAdjacentHTML("beforeend",html);
    })
}
document.addEventListener("DOMContentLoaded",() => secButtonFun());



function smallDeviceProgressFun(){

    class Progress{
        constructor(lang,perc){
            this.lang = lang;
            this.perc = perc;
        }

        innerMain(){
            let html = `<div smallDeviceParentProgressBox class="grid items-center content-center gap-1">
                <div class="flex justify-between w-full">
                    <span class="description font-bold">${this.lang.toUpperCase()}</span>
                    <span class="description font-bold">${this.perc}%</span>
                </div>
                <div smallDeviceProgressParent class="flex">
                    <div small-device-progress-done data-done="${this.perc}"></div>
                </div>
            </div>`;

            document.querySelector("[smallDeviceProgressAppend]")
            .insertAdjacentHTML("beforeend",html);
        }
    }

    new Progress("Html",90).innerMain();
    new Progress("css",90).innerMain();
    new Progress("JS",90).innerMain();
    new Progress("mongoDB",90).innerMain();
    new Progress("express",50).innerMain();
    new Progress("react",60).innerMain();
    new Progress("node",90).innerMain();
    new Progress("tailwind",80).innerMain();
    new Progress("bootstrap",50).innerMain();
    new Progress("git",90).innerMain();
    new Progress("docker",80).innerMain();
    new Progress("seo",90).innerMain();



    const smallDeviceProgress = document.querySelectorAll('[small-device-progress-done]');

    for (let i = 0; i < smallDeviceProgress.length; i++) {
        smallDeviceProgress[i].style.width = smallDeviceProgress[i].getAttribute('data-done') + '%';
        // smallDeviceProgress[i].innerText = smallDeviceProgress[i].getAttribute('data-done') + '%';
        smallDeviceProgress[i].style.opacity = 1;
    }
}smallDeviceProgressFun();

}


export {features}