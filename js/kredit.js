const nagd = document.querySelector('#nagd')
const nagdDes = document.querySelector('#nagd-des')
const emanet = document.querySelector('#emanet')
const emanetDes = document.querySelector('#emanet-des')
const price = document.querySelector('#mebleg')
const kredit1 = document.querySelector('#kredit1')
const kredit2 = document.querySelector('#kredit2')
const kredi = document.querySelector('#kredi-item')
const amanat = document.querySelector('#emanet-item')
const priceDes = document.querySelector('#price-des')
const priceDestext = document.querySelector('#price-des-text')
const monthDestext = document.querySelector('#month-des-text')
const monthDes = document.querySelector('#month-des')
const checkboxbtn = document.querySelector('#checkbox-btn')
const ntcDes = document.querySelector('#ntc-des')
const krediDesitem = document.querySelector('#kredi-des-item')
const emanetDesitem = document.querySelector('#emanet-des-item')
const kreditBtn = document.querySelector('#kredit-des-btn1')
const emanetBtn = document.querySelector('#kredit-des-btn2')
const Iki1 = document.querySelector('.iki1')
const Iki2 = document.querySelector('.iki2')
const Iki3 = document.querySelector('.iki3')
const Iki4 = document.querySelector('.iki4')
const Iki5 = document.querySelector('.iki5')
const Iki6 = document.querySelector('.iki6')
const Iki7 = document.querySelector('.iki7')
const Iki8 = document.querySelector('.iki8')
const Iki9 = document.querySelector('.iki9')
const Iki10 = document.querySelector('.iki10')
const Iki11 = document.querySelector('.iki11')
const Iki12 = document.querySelector('.iki12')
const Iki13 = document.querySelector('.iki13')
const Iki14 = document.querySelector('.iki14')
const Bir1 = document.querySelector('.bir1')
const Bir2 = document.querySelector('.bir2')
const Bir3 = document.querySelector('.bir3')
const btnDestext1 = document.querySelector('#btn-des-text1')
const btnDestext2 = document.querySelector('#btn-des-text2')
let x = 500
x += 100
update()
const month = document.querySelector('#ay')
let y = 11
y++
update1()
const precent = document.querySelector('#faiz')
const precentDes = document.querySelector('#precent-des')
let q = 11
let i = 11
const ntc = document.querySelector('#ntc')
let p = (x * i) / 100
let l = x + p
let n = l / y
let r = 1
let f = (x * i) / 100
let j = x + p
let h = l / y
cvb()
function art(){
    priceDestext.value = priceDes.value + ' AZN '
    cvb1()
}
art()
function art1(){
    monthDestext.value = monthDes.value + ' ay '
    q = 11
    fzDes()
    if(monthDes.value > 12){
        q = 13
        fzDes()
    }
    if(monthDes.value > 24){
        q = 14
        fzDes()
    }
    if(monthDes.value > 36){
        q = 15
        fzDes()
    }
    cvb1()
}
art1()
fzDes()
function fzDes(){
    precentDes.innerHTML = q + ' % '
}
function bgc(){
    r++
    if(r % 2 === 1){
        checkboxbtn.style.background = 'transparent'
    }else{
        checkboxbtn.style.background = '#fff'
    }
    console.log(r);
}
function change2() {
    emanet.style.display = 'block'
    nagd.style.display = 'none'
    kredit2.style.background = '#6f0bbb'
    kredit2.style.color = '#ffffff'
    kredit1.style.background = '#f3f3f3'
    kredit1.style.color = '#000000'
    amanat.style.display = 'block'
    kredi.style.display = 'none'
}
function change1() {
    emanet.style.display = 'none'
    nagd.style.display = 'block'
    kredit2.style.background = '#f3f3f3'
    kredit2.style.color = '#000000'
    kredit1.style.background = '#6f0bbb'
    kredit1.style.color = '#ffffff'
    amanat.style.display = 'none'
    kredi.style.display = 'block'
}
function change4() {
    krediDesitem.style.display = 'none'
    emanetDesitem.style.display = 'block'
    emanetDes.style.display = 'block'
    nagdDes.style.display = 'none'
    kreditBtn.style.background = '#f3f3f3'
    emanetBtn.style.background = '#6f0bbb'
    Iki1.style.stroke = 'white'
    Iki2.style.stroke = 'white'
    Iki3.style.stroke = 'white'
    Iki4.style.stroke = 'white'
    Iki5.style.stroke = 'white'
    Iki6.style.stroke = 'white'
    Iki7.style.stroke = 'white'
    Iki8.style.stroke = 'white'
    Iki9.style.stroke = 'white'
    Iki10.style.stroke = 'white'
    Iki11.style.stroke = 'white'
    Iki12.style.stroke = 'white'
    Iki13.style.stroke = 'white'
    Iki14.style.stroke = 'white'
    Bir1.style.stroke = 'black'
    Bir2.style.stroke = 'black'
    Bir3.style.stroke = 'black'
    btnDestext1.style.color = 'black'
    btnDestext2.style.color = 'white'
}
function change3() {
    krediDesitem.style.display = 'block'
    emanetDesitem.style.display = 'none'
    nagdDes.style.display = 'block'
    emanetDes.style.display = 'none'
    kreditBtn.style.background = '#6f0bbb'
    emanetBtn.style.background = '#f3f3f3'
    Iki1.style.stroke = 'black'
    Iki2.style.stroke = 'black'
    Iki3.style.stroke = 'black'
    Iki4.style.stroke = 'black'
    Iki5.style.stroke = 'black'
    Iki6.style.stroke = 'black'
    Iki7.style.stroke = 'black'
    Iki8.style.stroke = 'black'
    Iki9.style.stroke = 'black'
    Iki10.style.stroke = 'black'
    Iki11.style.stroke = 'black'
    Iki12.style.stroke = 'black'
    Iki13.style.stroke = 'black'
    Iki14.style.stroke = 'black'
    Bir1.style.stroke = 'white'
    Bir2.style.stroke = 'white'
    Bir3.style.stroke = 'white'
    btnDestext1.style.color = 'white'
    btnDestext2.style.color = 'black'
}
function priceazalt() {
    x -= 100
    if (x <= 300) {
        x = 300
    }
    update()
    cvb()
}
function priceartir() {
    x += 100
    if (x >= 40000) {
        x = 40000
    }
    update()
    console.log(x);
    cvb()
}
function update() {
    price.value = x + ' AZN '
}
function monthazalt(){
    y--
    if(y <= 3){
        y = 3
    }
    if(y < 13){
        i = 11
        fz()
    } 
    if(y < 25 && y > 12){
        i = 13
        fz()
    } 
    if(y <= 37 && y > 25){
        i = 14
        fz()
    } 
    update1()
    cvb()
}
function monthartir(){
    y++
    if(y >= 48){
        y = 48
    }
    if(y >= 13){
        i = 13
        fz()
    }
    if(y >= 25){
        i = 14
        fz()
    }
    if(y >= 37){
        i = 15
        fz()
    }
    update1()
    cvb()
}
function update1(){
    month.value = y + ' ay '
}
fz()
function fz(){
    precent.innerHTML = i + '% '
}
function mbl() {
    console.log(x);
    x = parseInt(price.value)
    priceartir()
    priceazalt()
}
function mnt(){
    y = parseInt(month.value)
    monthartir()
    monthazalt()
}
function cvb(){
    ntc.innerHTML = n.toFixed(2) + ' ₼ '
    p = (x * i) / 100
    l = x + p
    n = l / y
}
function cvb1(){
    ntcDes.innerHTML = h.toFixed(2) + ' ₼ '
    f = (priceDes.value * q) / 100
    j = +priceDes.value + f
    h = j / monthDes.value
}
console.log(f);
console.log(j);
console.log(h);