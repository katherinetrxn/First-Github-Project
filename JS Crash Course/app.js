let grades = ['A+', 'A', 'FAIL']

let goodGrades = []

for (let i = 0; i < grades.length; ++i) {
    if (grades[i] !== 'FAIL')
    goodGrades.push(grades[i]);
}

console.log(goodGrades)

let dollars = [1, 5, 10, 3]

let cents = dollars.map((element) => {
    console.log(element)
    return element * 100
})

let cent = dollars.map((element) => element * 100)

console.log(cent)

