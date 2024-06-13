const startYear = 2017
const currentYear = new Date().getFullYear()
const difference = currentYear - startYear

const element = document.querySelector('.years')
element.innerHTML = difference.toString()