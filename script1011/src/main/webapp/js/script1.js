/**
 * 
 */
//2개의 숫자를 입력받아 두수를 사칙연산 결과값을 출력하시오.

var num = Number( prompt("숫자를 입력하세요","0")); 
var num2 = Number( prompt("숫자를 입력하세요","0")); 

document.write("1번째 숫자"+num+"<br>");
document.write("2번째 숫자 "+num2+"<br>");
document.write("더하기 결과 : "+(num+num2)+"<br>");
document.write("빼기 결과 : "+(num-num2)+"<br>");
document.write("곱하기 결과 : "+(num*num2)+"<br>");
document.write("나누기 결과 : "+(num/num2)+"<br>");
