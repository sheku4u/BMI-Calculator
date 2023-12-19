
const form = document.querySelector('form')

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#result')
    const underW = document.querySelector('#underW')
    const normalW = document.querySelector('#normalW')
    const overW = document.querySelector('#overW')

    if(height === " " || height <10 || isNaN(height)  ){
        result.innerHTML = `Please give a correct Height value not this: ${height}`
    }else if(weight === " " || weight <10 || isNaN(weight)  ){
        result.innerHTML = `Please give a correct Weight value not this: ${weight}`
    }else{
       const ans =  (weight / ((height*height)/10000)).toFixed(1)
       result.innerHTML = `<span>${ans}</span>`
    }

    if(result.innerText <=18.5){
        underW.style.backgroundColor = "green"
    }else if(result.innerText >= 18.6 && result.innerText <= 24.8){
        normalW.style.backgroundColor = "green"
    }else if (result.innerText > 24.9){
        overW.style.backgroundColor = "green"
    }    
})