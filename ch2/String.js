//문자열 - 3가지
'Hello, world!';
"Hello, world!";
`Hello, world!`;

console.log(typeof "Hello, world!");
console.log(typeof '');
console.log(typeof '' == ' ');

//문자열 안에서 따옴표 사용하기
console.log("문자열 안에 작은 따옴표(')가 있어요");
console.log('문자열 안에 큰따옴표(")가 있어요');

//이스케이프 문자 사용하기
console.log("문자열 안에 큰 따옴표(\")가 있어요");
console.log('문자열 안에 작은 따옴표(\')가 있어요');
console.log('문자열 안에 백슬래시(\\)가 있어요');

//문자열 여러 줄로 나타내기
console.log(`여러 줄에 걸쳐
 표시됩니다.`);

//개행 문자 사용하기
console.log('여러 줄에 걸쳐\n 표시됩니다.');

console.log('여러줄에 걸쳐\n 표시됩니다.\n\n 줄을 더 늘려볼까요?');

//백틱 사용하기 - 템플릭 리터럴 사용하기
//장점 - 줄 바꾸기에 편함
console.log(`저도 문자열입니다.`);
console.log(``);
console.log(`문자열 안에 백틱(\`)이 있어요`);

//문자열 합치기
console.log('문자열이 긴 경우에는 문자열을 ' + '나눈 뒤 다시 합칩니다.');
console.log('문자열이 긴 경우에는 ' + '문자열을 ' + '나눈 뒤 ' + '다시 합칩니다.');
console.log('문자열이 긴 경우에는 문자열을 '
 + '나눈 뒤 다시 합칩니다.');
console.log('문자열이 긴 경우에는 문자열을 ' +
'나눈 뒤 다시 합칩니다.');