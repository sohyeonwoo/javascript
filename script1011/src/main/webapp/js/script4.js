/**
 * 
 */
//2개의 숫자를 입력해서 
// 첫번째 숫자부터 두번째 숫자까의 합

var input = Number(prompt("1번째 숫자를 입력하세요.","0"))
var input2 = Number(prompt("2번째 숫자를 입력하세요.","0"))
var sum = 0;
for(var i=input;i<=input2;i++) {
    sum=sum+i;
}


document.write(input+"부터"+input2+"까지 합계 : "+sum,"<br>");

