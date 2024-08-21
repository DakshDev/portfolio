const my_instagram_link     = `https://www.instagram.com/sync_coder/`;
const my_github_link        = `https://github.com/DakshDev`;
const my_tree_link          = `https://linktr.ee/dakshdev`;



export function linksFun(){
document.querySelectorAll("[my_instagram_link]")
.forEach((e)=>{e.addEventListener("click",()=>window.open(my_instagram_link))});

document.querySelectorAll("[my_github_link]")
.forEach((e)=>{e.addEventListener("click",()=>window.open(my_github_link))});

document.querySelectorAll("[my_tree_link]")
.forEach((e)=>{e.addEventListener("click",()=>window.open(my_tree_link))});
}
linksFun();