/*
자료형의 종류
- string, number, boolean, null, undefined
- object(객체), array(배열)
*/

//

let myName= "allie"
let email='allie@naver.com'

console.log(myName)
console.log(email)

console.log('내 이름은', myName)

let number=123
let opacity=0.7
console.log(number)
console.log(opacity)

console.log(number + opacity)


// 3. boolean
// true, false 둘 중의 하나의 값

let checked = true;
let isShow = false;



// 4. undefined 
// 값이 없는 상태
let undef;
let obj={
    abc:123
}

console.log(undef)
console.log(obj.abc)
console.log(obj.efg)

// 5. null, 빈 값!
let empty = null;
console.log(empty)

// 6. array, 배열

let fruits = ["orange", "apple", "banana", "mango"]

let fruits2 = new Array("orange", "apple", "banana", "mango")

console.log(fruits[3])
console.log(fruits2[1])

let data = [1, true, null, "string", 100]

console.log(data[0], data[4])

let korean= [
    ["가","갸","거","겨"],
     ["나,","냐","너","녀"], 
     ["다,","댜","더","뎌"]
]

console.log(korean[2][2])

// 퀴즈) 아래 배열에서 아이스크림 출력하기
const letters = [
	["사", "스", "자", "크"], 
	["진", "안", "리", "이"],
	["가", "수", "림", "나"],
	["아", "으", "차", "운"],
];

console.log(letters[3][0]+letters[1][3]+letters[0][1]+letters[0][3]+letters[2][2])

const nums = [
	[
		[1, 2, 3],
		[4, 5, 6],
	],
	[
		[7, 8, 9],
		[10, 11, 12],
	],
];

console.log(nums[1][0][1])



//자료형 확인! type of 

console.log('--------------------------')

let und;
console.log(typeof "문자")
console.log(typeof 100)
console.log(typeof function(){})
console.log(typeof NaN)