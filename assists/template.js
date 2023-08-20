// Kod açaıklamalarını(single comment)
/* Çoklu açıklamalar ()Multiple comment*/

// window.alert("pop-up");
// document.writeln("Sayfada göster");
// console.log("console log");
// console.error("console error");
// console.warn("console warn");

// variable
// var  let(ES6)  const(ES6) 
// var degiskenAdi=44;
// console.log(degiskenAdi);
// console.log( typeof degiskenAdi);

// var $_degiskenAdi44="str variable";
// console.log($_degiskenAdi44);
// console.log( typeof $_degiskenAdi44);

// hoisting
// deneme=14.53;
// var deneme;
// console.log(deneme);

////////////////////////////////////////////////
// Operators
// + - * / %
// let number1,number2;
// number1=18;
// number2=5;
// console.log(number1+number2 );
// console.log(number1*number2);
// console.log(number1-number2);
// console.log(number1/number2);
// console.log(number1%number2);

// &&VE ||VEYA     !DEĞİL
// x++ ++x  y-- --y

// =   ATAMA
// ==  EŞİTTİR(Türüne bakmadan)
// === EŞİTTİR(Türüne bakarak)

////////////////////////////////////////////////
// prompt
// let userName=prompt("Lütfen birşeyler yazınız");
// console.log(userName);


//////////////////////////////////////////////// 
// NaN
console.log(4/4);
console.log(4/"4");
console.log(4/"asd");


// Infinity
console.log(0/5);
console.log(44/0);

// Undefined
let data;
//data=99;
console.log(data);

// new 
// null 
// zero


//////////////////////////////////////////////// 
// Örnek-1
// Kullanıcıdan aldığımız 2 sayıyı toplayan JS kodu yazınız ? (prompt)
let number1,number,sum=0;
number1=Number(prompt("Lütfen 1.sayıyı giriniz"));
number2=Number(prompt("Lütfen 2.sayıyı giriniz"));
console.log(number1+number2);

// Örnek-2
/* 
    Kullanıcıdan aldığımız sayıyı dereceden fahrenhayt'a çeviren JS kodu yazınız ?
    Formül: (derece*9/5)+32   
*/
let degree=0,fahranhayt=0;
degree=Number(prompt("Lütfen Dereceyi giriniz"));
fahranhayt=(degree*9/5)+32;
console.log(fahranhayt);

// Örnek-3
// y=3x+4k ==> 1.dereceden 2 bilinmeyenli denklem algoritma JS kodu yazınız ?
// Kullanıcı tarafından alınan x ve kdeğerlerini hesaplayan algoritma yazınız ?
// x=2 k=3 y=? (y=18)
let x=0,y=0,k=0;
x=Number(prompt("Lütfen X giriniz"));
k=Number(prompt("Lütfen K giriniz"));
y=3*x+4*k;
console.log("Y sonucu:"+y);

// örnek-4 operatör işlemleri: aşağıdaki örneği javascript ile yapalım
// 4+3*2(3:3-1*6+9:1+(3:3))
console.log(4+3*2*(3/3-1*6+9/1+(3/3)));


/////////////////////////////////////////////////// 
// MATH 




//Örnek-4: Aşağıdaki örnekleri math ile çözelim ?
// -5.9 sayıyının aşağıdaki işlemleri yaptıralım ?
// 1-mutlak değeri alsın 5.9
// 2-yuvarlama yapsın  6.0
// 3-karesini alsın 36.00
// 4-karekök alsın 6.0
// 5-yuvarlama yapsın 6.0
// 6-)çıkan sonucu 5 bölsün 6/5=1
// 7-) iki sayı arasından karşılaştırma yapsın en küçüğünü alsın ve 1 ve 5
// 8-) küçük sayı eğer tekse 3 eklesin çiftse 5 eklesin 
// Örnek-5 : kullanıcı tarafından girilen bir sayıyı negatif mi pozitif mi olduğu ekran yazdıran algoritma ?
// NOT: cast kullalım ?
// Örnek-6 : kullanıcı tarafından password ve repassword alalım sonrasında bu iki değeri karşılaştırma yapalım
// eğer aynı girilirse aynı veri yoksa birbirine uymadı yazan algoritma yapalım
