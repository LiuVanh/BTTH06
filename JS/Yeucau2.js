let createArrayBtn = document.querySelector(".createArray")
let randomNumber = document.querySelector(".randomNumber")
createArrayBtn.addEventListener('click', function(){
    let length = Math.floor((Math.random()*11)+10)
    let arrNumber = []
    for(let i=0; i<length;i++){
        arrNumber[i] = Math.floor((Math.random()*91)+10)
    }
    randomNumber.textContent = arrNumber.join(', ')
})
var addBtn = document.querySelector('#addBtn')
var newrandomNumber = document.querySelector(".newrandomNumber")
addBtn.addEventListener('click', function(){
    var Arrays = randomNumber.textContent.split(', ')
    for(var i=0; i<Arrays.length;i++){
        Arrays[i] = Number(Arrays[i].trim())
    }
    var vitriso = document.querySelector('#vitriso').value
    var addValue = document.querySelector('#addValue').value
    if(document.querySelector("#sxtang").checked){
        var sapxep = Arrays.sort(function(a, b){return a - b})
    }
    else if(document.querySelector("#sxgiam").checked){
        var sapxep = Arrays.sort(function(a, b){return a - b}).reverse()
    }
    else{
        var sapxep = Arrays
    }
    if(vitriso && addValue)
        sapxep.splice(vitriso,0,addValue)
    newrandomNumber.textContent = sapxep.join(', ')
})