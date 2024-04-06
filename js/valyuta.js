// const leftvalue = document.querySelector('#leftvalue')
// const rightvalue = document.querySelector('#rightvalue')
// const leftselect = document.querySelector('#leftselect')
// const rightselect = document.querySelector('#rightselect')

// const valAzn1 = document.querySelector('.valyuta-AZN1')
// const valUsd1 = document.querySelector('.valyuta-USD1')
// const valGbp1 = document.querySelector('.valyuta-GBP1')
// const valEur1 = document.querySelector('.valyuta-EUR1')

// const valAzn2 = document.querySelector('.valyuta-AZN2')
// const valUsd2 = document.querySelector('.valyuta-USD2')
// const valGbp2 = document.querySelector('.valyuta-GBP2')
// const valEur2 = document.querySelector('.valyuta-EUR2')

// let sol = 1
// let sag = 1
// let valCVb = 100

// function valyuta(){
//     if(leftselect.value == valAzn1.value && rightselect.value == valAzn2.value){
//         valCVb =  leftvalue.value * 1
//         valUpdate()
//     }else if(leftselect.value == valAzn1.value && rightselect.value == valUsd2.value ){
//         valCVb = leftvalue.value / 1.7
//         valUpdate()
//     }else if(leftselect.value == valAzn1.value && rightselect.value == valGbp2.value ){
//         valCVb = leftvalue.value / 2.1
//         valUpdate()
//     }else if(leftselect.value == valAzn1.value && rightselect.value == valEur2.value ){
//         valCVb = leftvalue.value / 1.8
//         valUpdate()
//     }

//     if(leftselect.value == valUsd1.value && rightselect.value == valUsd2.value){
//         valCVb =  leftvalue.value * 1
//         valUpdate()
//     }else if(leftselect.value == valUsd1.value && rightselect.value == valAzn2.value ){
//         valCVb = leftvalue.value * 1.7
//         valUpdate()
//     }else if(leftselect.value == valUsd1.value && rightselect.value == valGbp2.value ){
//         valCVb = leftvalue.value * 0.79
//         valUpdate()
//     }else if(leftselect.value == valUsd1.value && rightselect.value == valEur2.value ){
//         valCVb = leftvalue.value / 0.92
//         valUpdate()
//     }

//     if(leftselect.value == valGbp1.value && rightselect.value == valGbp2.value){
//         valCVb =  leftvalue.value * 1
//         valUpdate()
//     }else if(leftselect.value == valGbp1.value && rightselect.value == valAzn2.value ){
//         valCVb = leftvalue.value * 2.15
//         valUpdate()
//     }else if(leftselect.value == valUsd1.value && rightselect.value == valUsd2.value ){
//         valCVb = leftvalue.value * 1.26
//         valUpdate()
//     }else if(leftselect.value == valUsd1.value && rightselect.value == valEur2.value ){
//         valCVb = leftvalue.value * 1.17
//         valUpdate()
//     }

//     if(leftselect.value == valEur1.value && rightselect.value == valEur2.value){
//         valCVb =  leftvalue.value * 1
//         valUpdate()
//     }else if(leftselect.value == valEur1.value && rightselect.value == valAzn2.value ){
//         valCVb = leftvalue.value * 1.83
//         valUpdate()
//     }else if(leftselect.value == valEur1.value && rightselect.value == valUsd2.value ){
//         valCVb = leftvalue.value * 1.08
//         valUpdate()
//     }else if(leftselect.value == valEur1.value && rightselect.value == valGbp2.value ){
//         valCVb = leftvalue.value * 0.86
//         valUpdate()
//     }

// }
// function valUpdate(){
//     rightvalue.innerHTML = valCVb.toFixed(2)
// }
// valUpdate()
const leftvalue = document.getElementById('leftvalue')
console.log(leftvalue);
const rightvalue = document.getElementById('rightvalue')
console.log(rightvalue);
const leftselect = document.getElementById('leftselect')
console.log(leftselect);
const rightselect = document.getElementById('rightselect')
console.log(rightselect);

rightselect.onchange = change
leftselect.onchange = change
leftvalue.oninput = change

function change() {
    rightvalue.innerHTML = ((leftvalue.value * leftselect.value) / rightselect.value).toFixed(2)
}
change()