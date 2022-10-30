import './styles/style.css'
import './styles/style.scss'

const getswitch: HTMLElement | null = document.getElementById('clickMe');
getswitch?.addEventListener("click", switchONOf );
function switchONOf(el:any){
    if(el.target.tagName === 'H2'){
        if(el.target.nextElementSibling.classList.contains("visible")){
            el.target.nextElementSibling.classList.remove('visible');
        }else {
            el.target.nextElementSibling.classList.add('visible');
        }
    }
}


const getBurger: HTMLElement | null = document.getElementById('clickBurger');
getBurger?.addEventListener("click", menuOnOf );
let check: boolean = false;
function menuOnOf(){
    if(check === false){
    document.querySelector("body > div.main_div > nav > div.burger > span")?.setAttribute('style','transform: rotate(90deg);');
    document.querySelector("body > div.main_div > nav > div.bread_crumbs")?.setAttribute('style','top: 0px;');
    document.querySelector("html")?.setAttribute('style','overflow: hidden');
    check = true;
    } else {
    document.querySelector("body > div.main_div > nav > div.burger > span")?.removeAttribute('style');
    document.querySelector("body > div.main_div > nav > div.bread_crumbs")?.removeAttribute('style');
    document.querySelector("html")?.removeAttribute('style');
    check = false;
    }
console.log('safasf')
}


const getBreadСrumbs: HTMLElement | null = document.querySelector("body > div.main_div > nav > div.bread_crumbs");
getBreadСrumbs?.addEventListener("click", hiddenVisible );

function hiddenVisible(el:any){
    console.log(el.target.tagName);
    if(el.target.tagName === 'A'){
        check = true;
        menuOnOf()
        }
    }


  

 

