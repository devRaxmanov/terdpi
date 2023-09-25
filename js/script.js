"use strict"
window.addEventListener("DOMContentLoaded", ()=>{
    let stateSymbols = document.querySelectorAll('.headerTop .uzbInfo .item .infoItem');

    stateSymbols.forEach((item)=>{
        item.addEventListener('mouseenter', ()=>{
            item[0].classList.add('active')
        })
    })


})