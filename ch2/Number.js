//숫자 - 양수, 소수, 음수
5; //양수
5.04; //소수
-5; //음수

//지수 표기법
5e4; //5 * 10000 = 50000
5e+4; //5 * 10000 = 50000
5e-3; //5 * (1/1000) = 0.005

//typeof 연산자로 숫자 자료형 확인하기
console.log(typeof 5);

//typeof 연산자로 문자열 확인하기
console.log(typeof '5');

//2진법, 8진법, 16진법 확인하기
//2진법
console.log(0b11);

//8진법
console.log(0o15);

//16진법
console.log(0x1c);

//문자열을 숫자로 바꾸기
//ParseInt 사용하기 - 정수로 변환
console.log(parseInt('5'));

//typeof 연산자로 숫자 자료형 확인하기
console.log(typeof (parseInt('5')));

console.log(parseInt('3.14'));

//문자열을 실수로 바꾸기
console.log(parseFloat('3.14'));


//NaN 알아보기
console.log(typeof NaN);