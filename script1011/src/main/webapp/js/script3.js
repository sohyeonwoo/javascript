/**
 * 
 */
//2개의 숫자를 입력받아 두수를 사칙연산 결과값을 출력하시오.

var input = Number(prompt("숫자를 입력하세요.","0"))
var sum = 0;
for(var i=0;i<=input;i++) {
    sum=sum+i;
}
var num = Number( prompt("숫자를 입력하세요"));

document.write("입력한 숫자 : ",num);
document.write("1부터",input,"까지 합: "+sum,"<br>");
	