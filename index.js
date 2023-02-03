/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

// Input by the user
let resultsEl = document.getElementById("results-el")

// Conversion elements
let lengthEl = document.getElementById("length-el")
let volumeEl = document.getElementById("volume-el")
let massEl = document.getElementById("mass-el")


let convertBtn = document.getElementById("convert-btn")

//convert button
convertBtn.addEventListener("click", function(){

    let lengthFeet = Math.round((resultsEl.value * 3.281) * 100) / 100
    let lengthMeters = Math.round((resultsEl.value / 3.281) * 100) / 100
    let volumeLiters = resultsEl.value * 0.264
    let volumeGallon = resultsEl.value / 0.264
    let massKilos = resultsEl.value * 2.204
    let massPound = resultsEl.value / 2.204

   lengthEl.textContent = `
    ${resultsEl.value} meters = ${lengthFeet} feet | 
    ${resultsEl.value} feet = ${lengthMeters} meters`

    volumeEl.textContent = `
    ${resultsEl.value} liters = ${volumeGallon} gallons | 
    ${resultsEl.value} gallons = ${volumeLiters} liters
    `
    massEl.textContent = `
    ${resultsEl.value} kilos = ${massPound} pounds | 
    ${resultsEl.value} pounds = ${massKilos} kilos
    `

})

