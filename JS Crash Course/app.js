let grades = ['A+', 'A', 'FAIL']

let newGrades = grades.filter((element) => {
    console.log(element)
    if (element === 'FAIL')
        return false;
    else if (element === 'A+', 'A')
        return true;
})

let neGrades = grades.filter(element => element !== 'FAIL')
console.log(neGrades)