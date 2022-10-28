import * as _ from 'lodash';
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

