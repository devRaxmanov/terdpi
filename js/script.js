"use strict"
window.addEventListener("DOMContentLoaded", ()=>{

    // let stateSymbols = document.querySelectorAll('.headerTop .uzbInfo .item .infoItem');

    // stateSymbols.forEach((item)=>{
    //     item.addEventListener('mouseenter', ()=>{
    //         item[0].classList.add('active')
    //     })
    // })


    // header top script start 
    let stateFlag = document.querySelector('.headerTop .uzbInfo .item.bayroq'), 
        stateCoatOfArms = document.querySelector('.headerTop .uzbInfo .item.gerb'),
        stateAnthem = document.querySelector('.headerTop .uzbInfo .item.madhiya'),
        flagInfo = document.querySelector('#flag'),
        coatOfArmsInfo = document.querySelector('#gerb'),
        anthemInfo = document.querySelector('#madhiya'),
        lenguages = document.querySelector('.headerTop .languages'),
        languagesList = document.querySelectorAll('.headerTop .flags .language');
        console.log(languagesList);

        stateFlag.addEventListener('mouseenter', ()=>{
            if (flagInfo.classList == 'infoItem') {
                flagInfo.classList.add('active')
            }else {
                flagInfo.classList.remove(active)
            }
        });
        stateFlag.addEventListener('mouseleave', ()=>{
            if (flagInfo.classList == 'infoItem active') {
                flagInfo.classList.remove('active')
            }else {
                console.log("kd yozishdagi xatolik");
            }
        });

        // gerb script start 

        stateCoatOfArms.addEventListener('mouseenter', ()=>{
            if (coatOfArmsInfo.classList == 'infoItem') {
                coatOfArmsInfo.classList.add('active')
            }else {
                coatOfArmsInfo.classList.remove(active)
            }
        });
        stateCoatOfArms.addEventListener('mouseleave', ()=>{
            if (coatOfArmsInfo.classList == 'infoItem active') {
                coatOfArmsInfo.classList.remove('active')
            }else {
                console.log("kd yozishdagi xatolik");
            }
        });

        // madhiya script start
        
        stateAnthem.addEventListener('mouseenter', ()=>{
            if (anthemInfo.classList == 'infoItem') {
                anthemInfo.classList.add('active')
            }else {
                anthemInfo.classList.remove(active)
            }
        })
        stateAnthem.addEventListener('mouseleave', ()=>{
            if (anthemInfo.classList == 'infoItem active') {
                anthemInfo.classList.remove('active')
            }else {
                console.log("kd yozishdagi xatolik");
            }
        })

        // leguages script start 
        lenguages.addEventListener('mouseenter', ()=>{
            lenguages.style.height = '100%'
        })
        lenguages.addEventListener('mouseleave', ()=>{
            lenguages.style.height = '35px'
        })
        
        languagesList.forEach((item)=>{
            function romoveActive(i) {
                i.classList.remove(active)
            }
            item.addEventListener("click", ()=>{
                romoveActive(item)
                item.classList.add('active')
            })
        })
    // header top script end 

})