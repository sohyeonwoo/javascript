/**
 * 
 */
// 두개의 수를 입력받아
// 큰수를 출력

var a = Number(prompt("1번째 숫자를 입력하세요.","0"));
var b = Number(prompt("2번째 숫자를 입력하세요.","0"));

var result = a>=b?a:b;
document.write(result,"<br>");