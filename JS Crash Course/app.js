let celsius = 10
let fahrenheit = celsius * 1.8 + 32

console.log(fahrenheit)

let subscribed = true

if (subscribed === true) {
    console.log('show the video')
}
else {
    console.log('tell user to log into account')
}

let cash = 50
let price = 40
let difference = cash - price

if (cash > price) {
    console.log(`you paid extra - here's ${difference} dollars change`)
}
else if (cash === price) {
    console.log("you paid the exact amount, have a nice day!")
}
else {
    console.log(`not enough money - you still owe cash ${difference * -1} price dollars`)
}

let isStoreOpen = true

if (cash >= price || isStoreOpen === true) {
    console.log('print the receipt')
}

let hot = false
hot ? console.log("it's hot outside") : console.log("it's cold outside")

isStoreOpen && (cash >= price) ? console.log('give receipt') : console.log('do not give receipt')
let str = isStoreOpen && cash >= price ? 'give receipt' : 'do not give receipt'
console.log(str)

let count = 1

while (count <= 100) {
    console.log(count)
    count = count + 1;
}

for (let i = 1; i <= 20; ++i) {
    if (i % 5 === 0 && i % 3 === 0) {
    console.log('Frontend Simplified')}
    else if (i % 3 === 0) {
    console.log('Frontend'); }
    
    else if (i % 5 === 0) {
    console.log('Simplified'); }
    else {
    console.log(i);
}
}


