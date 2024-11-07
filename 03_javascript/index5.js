// 문자열에서 사용하는 속성과 메소드
// length
// toUpperCase, toLowerCase, trim, indexOf, slice
// replace, replaceAll, repeat, split

let str1 = "Strawberry Moon"
let str2 = "   Strawberry Moon  "

// 문자열 인덱싱
console.log(str1[0])
console.log(str1[0] + str1[11])

// Sonny 단어 만들기(0,13,14,14,9)

// length 속성 확인
console.log(str1.length)
console.log(str2.length)

/* 메서드 사용해보기 */
// trim, toUpperCase, toLowerCase
// 문자열.method()의 형태로 사용
console.log(str1)
console.log(str2)
console.log(str2.trim())
console.log(str2.trim().length)

console.log(str1.toLowerCase())
console.log(str1.toUpperCase())

// indexOf, charAt, slice
let fruit = "applemango"
// indexOf: 내가 찾고 싶은 문자열의 인덱스번호 반환
console.log(fruit.indexOf("e")) //4
console.log(fruit.indexOf("a")) //0
console.log(fruit.indexOf("apple")) //0 
console.log(fruit.indexOf("mango")) //5
// 없는 문자열을 찾으려고하면 -1 반환
console.log(fruit.indexOf("z")) 

console.log(fruit.charAt(0))
console.log(fruit.charAt(8))
console.log(fruit.charAt(10)) // ''

console.log(fruit.slice(5)) // mango
console.log(fruit.slice(3,6)) // lem
console.log(fruit.slice(-1)) // o
console.log(fruit.slice(-4)) // ango

// replace, replaceAll
let msg1 = "Wow~ It is so amazing!!! Wow"
console.log(msg1.replace("Wow", "Hey~~~"))
console.log(msg1.replaceAll("o","OO"))
console.log(msg1)

let date = "2024.11.06"
// YYYY-MM-DD
date = date.replaceAll('.','-')
console.log(date)

let hello = "hello"
console.log(typeof hello)

let hello2= hello.split()
console.log(hello2)

hello2 = hello.split("")
console.log(hello2)

hello2= hello.split('e')
console.log(hello2)
console.log(typeof hello2)
// ['2024', '11', '06']