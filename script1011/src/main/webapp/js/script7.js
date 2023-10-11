/**
 * 
 */

var input = 0;
var weight = 0;
//2개를 입력받음

input = Number(prompt("키를 입력하세요", "0"));
weight = Number(prompt("몸무게를 입력하세요", "0"));



var height = input / 100;
var result = weight / (height * height);
//result 출력
document.write("키 : ", input, "<br>");
document.write("몸무게 : ", weight, "<br>");
document.write("M계산법 : ", input / 100, "<br>");
document.write("BMI 지수 : ", weight / (height * height), "<br>");




//if 비교 if else if , else if , else

//18.5
if (result >= 25) {
	document.write("결과 :", result, "<br>비만입니다.", "<br>");
} else if (result >= 23.0) {
	document.write("결과 :", result, "<br>과체중입니다.", "<br>");
} else if (result >= 18.5) {
	document.write("결과 :", result, "<br>정상입니다.", "<br>");
} else {
	document.write("결과 :", result, "<br>저체중입니다.", "<br>");
}

