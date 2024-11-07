let str1 = "Strawberry Moon"
let str2 = "   Strawberry Moon   "

console.log(str1[0])
console.log(str1[0] + str1[11])

//------------배열---------------
let arr1 = [1,2,3,4,5]
let arr2 = ["quakka","rabbit","puppy","hamster"]

arr1[5]=6
console.log(arr1)

// 오브젝트 반복
const areaNum = {
	Seoul: "02",
	Incheon: "032",
	Daejeon: "042",
	Busan: "051",
	Ulsan: "052",
	Daegu: "053",
	Gwangju: "062",
	Jeju: "064",
};  

for(let area in areaNum){
    console.log(area)  //key
    console.log(areaNum[area])
}
