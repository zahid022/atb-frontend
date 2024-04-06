const emmanetSelDes1 = document.querySelector('#emmanetSelDes1')
const emmanetSelMob1 = document.querySelector('#emmanetSelMob1')
const emmanetSelDes2 = document.querySelector('#emmanetSelDes2')
const emmanetSelMob2 = document.querySelector('#emmanetSelMob2')
const emmanetSelDes3 = document.querySelector('#emmanetSelDes3')
const emmanetSelMob3 = document.querySelector('#emmanetSelMob3')
const emmanetInpDes1 = document.querySelector('#emmanetInpDes1')
const emmanetInpMob1 = document.querySelector('#emmanetInpMob1')
const emanetDesFaiz = document.querySelector('#emanetDesFaiz')
const emanetMobFaiz = document.querySelector('#emanetMobFaiz')
const emanetDesCvb = document.querySelector('#emanetDesCvb')
const emanetMobCvb = document.querySelector('#emanetMobCvb')
const emanetDesPriceAzn = document.querySelector('#emanetDesPriceAzn')
const emanetMobPriceAzn = document.querySelector('#emanetMobPriceAzn')
const emanetDesPriceUsd = document.querySelector('#emanetDesPriceUsd')
const emanetMobPriceUsd = document.querySelector('#emanetMobPriceUsd')
const emanetDesPrice = document.querySelector('#emanetDesPrice') 
const emanetMobPrice = document.querySelector('#emanetMobPrice')
const emanetDesOdenis = document.querySelector('#emanetDesOdenis')
const emanetMobOdenis = document.querySelector('#emanetMobOdenis')
const emanetDesSelclass = document.querySelector('.emanetDesSelclass')
const emanetMobSelclass = document.querySelector('.emanetMobSelclass')
const emanetDesSelclass1 = document.querySelector('.emanetDesSelclass1')
const emanetMobSelclass1 = document.querySelector('.emanetMobSelclass1')
let emDesfaiz = 1
let emMobfaiz = 1

function emanetSelDesPrice(){
    if(emmanetSelDes1.value == emanetDesPrice.value ){
        emDesfaiz = 0
    }
    else if(emmanetSelDes1.value == 'AZN' && emmanetSelDes2.value == 12 && emmanetSelDes3.value == 'Müddətin sonunda'){
        emDesfaiz = 5.5
    }else if(emmanetSelDes1.value == 'AZN' && emmanetSelDes2.value == 12 && emmanetSelDes3.value == 'Aylıq Ödəniş'){
        emDesfaiz = 5
    }else if(emmanetSelDes1.value == 'AZN' && emmanetSelDes2.value == 24 && emmanetSelDes3.value == 'Müddətin sonunda'){
        emDesfaiz = 6.5
    }else if(emmanetSelDes1.value == 'AZN' && emmanetSelDes2.value == 24 && emmanetSelDes3.value == 'Aylıq Ödəniş'){
        emDesfaiz = 6
    }else if(emmanetSelDes1.value == 'AZN' && emmanetSelDes2.value == 36 && emmanetSelDes3.value == 'Müddətin sonunda'){
        emDesfaiz = 9
    }else if(emmanetSelDes1.value == 'AZN' && emmanetSelDes2.value == 36 && emmanetSelDes3.value == 'Aylıq Ödəniş'){
        emDesfaiz = 8
    }else if(emmanetSelDes1.value == 'USD' && emmanetSelDes2.value == 12 && emmanetSelDes3.value == 'Müddətin sonunda'){
        emDesfaiz = 0.1
    }
    else if(emmanetSelDes1.value == 'USD'){
        emanetDesOdenis.style.display = 'none' 
        emanetDesSelclass.style.display = 'none'
        emanetDesSelclass1.style.display = 'none'
    }else if(emmanetSelDes1.value == 'AZN'){
        emanetDesOdenis.style.display = 'block' 
        emanetDesSelclass.style.display = 'block'
        emanetDesSelclass1.style.display = 'block'
    }
    emanetDesfz()
}
function emanetSelMobPrice(){
    if(emmanetSelMob1.value == emanetMobPrice.value ){
        emMobfaiz = 0
    }
    else if(emmanetSelMob1.value == 'Azn' && emmanetSelMob2.value == 12 && emmanetSelMob3.value == 'Müddətin sonunda'){
        emMobfaiz = 5.5
    }else if(emmanetSelMob1.value == 'Azn' && emmanetSelMob2.value == 12 && emmanetSelMob3.value == 'Aylıq ödəniş'){
        emMobfaiz = 5
    }else if(emmanetSelMob1.value == 'Azn' && emmanetSelMob2.value == 24 && emmanetSelMob3.value == 'Müddətin sonunda'){
        emMobfaiz = 6.5
    }else if(emmanetSelMob1.value == 'Azn' && emmanetSelMob2.value == 24 && emmanetSelMob3.value == 'Aylıq ödəniş'){
        emMobfaiz = 6
    }else if(emmanetSelMob1.value == 'Azn' && emmanetSelMob2.value == 36 && emmanetSelMob3.value == 'Müddətin sonunda'){
        emMobfaiz = 9
    }else if(emmanetSelMob1.value == 'Azn' && emmanetSelMob2.value == 36 && emmanetSelMob3.value == 'Aylıq ödəniş'){
        emMobfaiz = 8
    }else if(emmanetSelMob1.value == 'USD' && emmanetSelMob2.value == 12 && emmanetSelMob3.value == 'Müddətin sonunda'){
        emMobfaiz = 0.1
    }
    else if(emmanetSelMob1.value == 'USD'){
        emanetMobOdenis.style.display = 'none' 
        emanetMobSelclass.style.display = 'none'
        emanetMobSelclass1.style.display = 'none'
    }else if(emmanetSelMob1.value == 'Azn'){
        emanetMobOdenis.style.display = 'block' 
        emanetMobSelclass.style.display = 'block'
        emanetMobSelclass1.style.display = 'block'
    }
    emanetMobfz()
}
emanetSelMobPrice()
let a1 = 1
let a2 = 1
function emanetDesntc(){
    a1 = (emmanetInpDes1.value * emDesfaiz) / 100
    a2 = a1 / parseInt(emmanetSelDes2.value)
    console.log(a2);
    if(emmanetSelDes1.value == emanetDesPriceAzn.value){
        emanetDesCvb.innerHTML = a2.toFixed(2) + ' AZN '
    }else if(emmanetSelDes1.value == emanetDesPriceUsd.value){
        emanetDesCvb.innerHTML = a2.toFixed(2) + ' USD '
    }
}
let b1 = 1
let b2 = 1
function emanetMobntc(){
    b1 = (emmanetInpMob1.value * emMobfaiz) / 100
    console.log(b1);
    b2 = b1 / parseInt(emmanetSelMob2.value)
    console.log(b2);
    if(emmanetSelMob1.value == emanetMobPriceAzn.value){
        emanetMobCvb.innerHTML = b2.toFixed(2) + ' AZN '
    }else if(emmanetSelMob1.value == emanetMobPriceUsd.value){
        emanetMobCvb.innerHTML = b2.toFixed(2) + ' USD '
    }
}
function emanetDesfz(){
    emanetDesFaiz.innerHTML = emDesfaiz + ' % '
}
function emanetMobfz(){
    emanetMobFaiz.innerHTML = emMobfaiz + ' % '
}