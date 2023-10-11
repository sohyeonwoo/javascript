/**
 * 타입까지 비교
 *  
 */

 var a = 10; //숫자형 int
 var b = 20; //숫자형 int
 var c = 10; //숫자형 int
 var d = "20"; //문자형 String
 var resurt ; //typeof a <를 하면 타입을 알아보는 명령어

resurt = (a==c);
document.write("a==c결과 : ", a==c,"<br>"); 
document.write("a==b결과 : ", a==b,"<br>"); 
document.write("b==d결과 : ", b==d,"<br>"); 
document.write("b===d결과 : ", b===d,"<br>"); // ===  타입까지도 같은지 비교방법 