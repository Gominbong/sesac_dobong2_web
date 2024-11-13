console.log(document)
console.log(document.URL)
console.log(document.documentElement)

console.log(document.head)
console.log(document.body)
console.log(document.title)

// 1. getElementById
console.log(document.getElementById('green'))
console.log(document.getElementById('red'))

// 2. getElementsByClassName
console.log(document.getElementsByClassName('pink'))
console.log(document.getElementsByClassName('pink')[0])
console.log(document.getElementsByClassName('others'))
console.log(document.getElementsByClassName('others')[0])

// 3. getElementByTagName
console.log(document.getElementsByTagName('div'))
console.log(document.getElementsByTagName('div')[0])

// 4. getElementsByName 
console.log(document.getElementsByName('id'))
console.log(document.getElementsByName('id')[0])

// 5. querySelector('css 선택자')
console.log("--------------")
console.log(document.querySelector('.pink'))
console.log(document.querySelector(".others"))
console.log(document.querySelector("#green"))

console.log(document.querySelectorAll('pink'))
console.log(document.querySelectorAll('#red'))
console.log('------간단 실습------')
let pinks = document.querySelectorAll('pink')