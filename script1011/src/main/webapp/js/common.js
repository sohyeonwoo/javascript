/**
 * 
 */
function scoreInput(){
var kor = Number( prompt("국어점수를 입력하세요","0")); 
var eng = Number( prompt("영어점수를 입력하세요","0")); 
var meth = Number( prompt("수학점수를 입력하세요","0"));  
document.write("<h1> 국어점수 : "+ kor + "</h1>");		//출력 코드	
document.write("<h1> 영어점수 : "+ eng + "</h1>");			
document.write("<h1> 수학점수 : "+ meth + "</h1>");			
document.write("<h1> 합계점수 : "+ (kor+eng+meth) + "</h1>");			
document.write("<h1> 평균점수 : "+ (kor+eng+meth)/3 + "</h1>");	
}

