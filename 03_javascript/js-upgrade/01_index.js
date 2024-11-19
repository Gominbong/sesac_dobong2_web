// 1-1. 배열의 구조분해 방법
const arr1 = ['tomato', 'kiwi', 'banana'];
console.log(arr1[0])
const tomato = arr1[0]
const [a, b, c] = arr1
console.log(tomato)
console.log(a)

const arr2 = ['red', 'orange', 'pink', 'yellow']
const [red, orange, yellow] = arr2
console.log(red, orange, yellow)
const [v1, v2, v3, v4, v5] = arr2
console.log(v1, v2, v3, v4, v5)
// const [a1, b1] = arr2 // 맨 끝에 있는 요소들은 생략 가능

// 변수 교환
let value1 = "second"
let value2 = "first"

let temp; //값을 저장하기 위한 임시 변수

temp = value1
value1 = value2
value2 = temp

console.log(value1, value2)

value1 = "second"
value2 = "first"
[value2, value1] = [value1, value2]
console.log(value1, value2)

const obj = {
    title: '제목',
    content: '내용',
    num: 10
}

console.log(obj.title)
console.log(obj['title'])


const { num, title, content } = obj
console.log(title)

const { content: c2, title: t2 } = obj
console.log(t2, c2)

// 2. spread와 rest ...

const arr3 = [1, 2, 3, 4, 5]
const arr4 = ['a', 'b', 'c']

console.log(arr3)

for (let el of arr3) {
    console.log(el)
}

console.log(...arr3)
console.log(...arr4)

// arr3, arr4 합치기 >> 1차원 배열로
const arr5 = arr3.concat(arr4)
console.log(arr5)
const arr6 = [...arr3, ...arr4]
console.log(arr6)

// 2-2. string
const str = 'alliehigh'
let strToArr=[...str]
let strToArr2=str.split('')
console.log(strToArr)
console.log(strToArr2)

let obj1 = {
    name: 'allie',
    height: 163,
    friend: null,
    married: false
}

let obj2 = {
    name: '진형',
    like: ['sleeping', 'programming'],
    greeting: function(){
        console.log(`안녕하세요, 저는 ${this.name}이고요..
            키는 ${this.height}입니다..`)
    }
}
obj2.greeting()

let me = {...obj1, ...obj2}
me.greeting()
console.log(me)

me={
    ...obj1,
    ...obj2,
    gender:'Female'
}
console.log(me)

// ...rest
console.log('-----rest-----')
function test(a,b){
    console.log(a)
    console.log(b)

}

test(1,2)
test('안녕')

function test2(...val){
    console.log(val) //rest 로 받아준 결과는 배열임
    const [a,b,c, ...rest] = val
    console.log(a)
    console.log(b)
    console.log(c)
    console.log('rest',rest)

}

test2(3,4,5,6,7,8)

// quiz~
// 매개변수가 몇 개가 들어오든 합해서 반환하는 함수를

function addNumber(...a){
    let sum = a.reduce( (a,b) => a+b )
    return sum;
}

let sumResult = addNumber(1,2,3,4,5)
console.log(sumResult) //15