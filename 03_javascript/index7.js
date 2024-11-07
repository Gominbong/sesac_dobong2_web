// 1. Date 객체
let now = new Date

console.log(now)
console.log(new Date("September 30, 1990 13:00:00"))

// 1970.01.01 00:00:00 초 이후로 몇 초나 지났는지!  
console.log(new Date(6000000))
console.log(new Date(0))
console.log(new Date(2010, 2, 2))
console.log(new Date(2010, 2, 2, 18,35,50))

console.log(now.getFullYear(), '년')
console.log(now.getMonth(), '월')
console.log(now.getDate(), '일')
console.log(now.getHours(), '시')
console.log(now.getMinutes(), '분')
console.log(now.getSeconds(), '초')
console.log(now.getMilliseconds(), '밀리초')
console.log(now.getDay(), '요일') // 0~6 (일~토)

//퀴즈
//조건물을 사용해서 오늘이 주말인지 평일인지 출력

now.getDay() == (0,6)
 ? console.log("주말이다") : console.log("주말이아니다")

// 2. Math 객체
console.log(Math.E)
console.log(Math.PI)
console.log(Math.SQRT2) //루트2 의 값

console.log(Math.min(50,10))

console.log('난수1:',Math.floor(Math.random()*10))

console.log('난수2:',Math.floor(Math.random()*10 +1))
console.log('난수2:',Math.floor(Math.random()*(500-495+1) +495))



