const dropAc1 = document.querySelector('.dropAc1')
const dropAc2 = document.querySelector('.dropAc2')
const dropAc3 = document.querySelector('.dropAc3')
const dropAc4 = document.querySelector('.dropAc4')
const dropAc5 = document.querySelector('.dropAc5')
const dropAc6 = document.querySelector('.dropAc6')
const dropBagla1 = document.querySelector('.dropBagla1')
const dropBagla2 = document.querySelector('.dropBagla2')
const dropBagla3 = document.querySelector('.dropBagla3')
const dropBagla4 = document.querySelector('.dropBagla4')
const dropBagla5 = document.querySelector('.dropBagla5')
const dropBagla6 = document.querySelector('.dropBagla6')
const dropmenu1 = document.querySelector('.drop-menu1')
const dropmenu2 = document.querySelector('.drop-menu2')
const dropmenu3 = document.querySelector('.drop-menu3')
const dropmenu4 = document.querySelector('.drop-menu4')
const dropmenu5 = document.querySelector('.drop-menu5')
const dropmenu6 = document.querySelector('.drop-menu6')
function dropOpe(e) {
    console.log(e)
    if(e == 1) {
        console.log(e)
        dropAc1.style.display = 'none'
        dropBagla1.style.display = 'block'
        dropmenu1.style.visibility = 'visible'
        dropmenu1.style.opacity = '1'
        dropmenu1.style.height = '100%'

    }
    else if(e == 2) {
        console.log(e)
        dropAc2.style.display = 'none'
        dropBagla2.style.display = 'block'
        dropmenu2.style.visibility = 'visible'
        dropmenu2.style.opacity = '1'
        dropmenu2.style.height = '100%'
    }
    else if(e == 3) {
        console.log(e)
        dropAc3.style.display = 'none'
        dropBagla3.style.display = 'block'
        dropmenu3.style.visibility = 'visible'
        dropmenu3.style.opacity = '1'
        dropmenu3.style.height = '100%'
    }
    else if(e == 4) {
        console.log(e)
        dropAc4.style.display = 'none'
        dropBagla4.style.display = 'block'
        dropmenu4.style.visibility = 'visible'
        dropmenu4.style.opacity = '1'
        dropmenu4.style.height = '100%'
    }
    else if(e == 5) {
        console.log(e)
        dropAc5.style.display = 'none'
        dropBagla5.style.display = 'block'
        dropmenu5.style.visibility = 'visible'
        dropmenu5.style.opacity = '1'
        dropmenu5.style.height = '100%'
    }
    else if(e == 6) {
        console.log(e)
        dropAc6.style.display = 'none'
        dropBagla6.style.display = 'block'
        dropmenu6.style.visibility = 'visible'
        dropmenu6.style.opacity = '1'
        dropmenu6.style.height = '100%'
    }
   
}
function dropCl(e) {
    if(e == 1){
        console.log(e)
        dropAc1.style.display = 'block'
        dropBagla1.style.display = 'none'
        dropmenu1.style.visibility = 'hidden'
        dropmenu1.style.opacity = '0'
        dropmenu1.style.height = '0'
    }
    else if(e == 2){
        console.log(e)
        dropAc2.style.display = 'block'
        dropBagla2.style.display = 'none'
        dropmenu2.style.visibility = 'hidden'
        dropmenu2.style.opacity = '0'
        dropmenu2.style.height = '0'
    }
    else if(e == 3){
        console.log(e)
        dropAc3.style.display = 'block'
        dropBagla3.style.display = 'none'
        dropmenu3.style.visibility = 'hidden'
        dropmenu3.style.opacity = '0'
        dropmenu3.style.height = '0'
    }
    else if(e == 4){
        console.log(e)
        dropAc4.style.display = 'block'
        dropBagla4.style.display = 'none'
        dropmenu4.style.visibility = 'hidden'
        dropmenu4.style.opacity = '0'
        dropmenu4.style.height = '0'
    }
    else if(e == 5){
        console.log(e)
        dropAc5.style.display = 'block'
        dropBagla5.style.display = 'none'
        dropmenu5.style.visibility = 'hidden'
        dropmenu5.style.opacity = '0'
        dropmenu5.style.height = '0'
    }
    else if(e == 6){
        console.log(e)
        dropAc6.style.display = 'block'
        dropBagla6.style.display = 'none'
        dropmenu6.style.visibility = 'hidden'
        dropmenu6.style.opacity = '0'
        dropmenu6.style.height = '0'
    }
}

const sidebar = document.querySelector('#sidebar')
const sidebarOpe = document.querySelector('#nav-btn-op')
const sidebarCl = document.querySelector('#nav-btn-cl')
const main = document.querySelector('main')
const footer = document.querySelector('footer')

function sideOpen() {
    sidebar.style.transform = 'translateX(0)'
    sidebarCl.style.display = 'block'
    sidebarOpe.style.display = 'none'
    main.style.display = 'none'
    footer.style.display = 'none'
}
function sideClose() {
    sidebar.style.transform = 'translateX(-100%)'
    sidebarCl.style.display = 'none'
    sidebarOpe.style.display = 'block'
    main.style.display = 'block'
    footer.style.display = 'block'
}
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });