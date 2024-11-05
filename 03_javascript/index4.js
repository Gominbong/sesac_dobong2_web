/* 1. if */
/* 
if(조건식){
    조건식이 참일 때 실행할 문장
}
*/

if(5>3){
    console.log('조건이 참입니다.')
}

// let number = Number(prompt('숫자를 입력해주세요.'));
let number =100

if(number > 10){
    console.log('입력받은 수가 10보다 큽니다.')
}else{
    console.log('입력받은 수가 10과 같거나 작습니다.')
}

if(number > 10){
    console.log('입력받은 수가 10보다 큽니다.')
}else if(number===10){
    console.log('입력받은 수가 10입니다.')
}else{
    console.log('입력받은 수가 10과 작습니다.')
}

// 90점 이상은 A (90 ~ 100)
// 80점 이상은 B (80 ~ 89.9999..)
// 70점 이상은 C (70 ~ 79.9999..)
// 그 아래는 모두 F
// 90 < number < 100
if(number >= 90 && number <= 100){
    console.log('A')
}else if(number >= 80 ){
    console.log('B')
}else if(number >= 70 ){
    console.log('C')
}else {
    console.log('F')
}

/* 조건문 중첩 */

let userId = 'user01'
let userPw = '1234qwer'

function loginUser(){
    let promptId = prompt('아이디를 입력해주세요')
    let promptPw = prompt('비밀번호를 입력해주세요')

    if(userId === promptId){
        if(userId ===promptId){
            console.log('로그인성공')
            alert('안녕하세요' + userId + "님!!")
        }else{
            alert('비밀번호가 틀렸습니다.')
        }

    }else if(promptId===''){
        alert('아이디를 입력하지 않았습니다!!')
    }else{
        alert('아이디가 틀렸어요..')
    }
}

loginUser();