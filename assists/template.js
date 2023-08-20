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
// // NaN
// console.log(4/4);
// console.log(4/"4");
// console.log(4/"asd");


// // Infinity
// console.log(0/5);
// console.log(44/0);

// // Undefined
// let data;
// //data=99;
// console.log(data);

// new 
// null 
// zero

//////////////////////////////////////////////// 
// Örnek-1
// Kullanıcıdan aldığımız 2 sayıyı toplayan JS kodu yazınız ? (prompt)
// let number1,number,sum=0;
// number1=Number(prompt("Lütfen 1.sayıyı giriniz"));
// number2=Number(prompt("Lütfen 2.sayıyı giriniz"));
// console.log(number1+number2);

// Örnek-2
/* 
    Kullanıcıdan aldığımız sayıyı dereceden fahrenhayt'a çeviren JS kodu yazınız ?
    Formül: (derece*9/5)+32   
*/
// let degree=0,fahranhayt=0;
// degree=Number(prompt("Lütfen Dereceyi giriniz"));
// fahranhayt=(degree*9/5)+32;
// console.log(fahranhayt);

// Örnek-3
// y=3x+4k ==> 1.dereceden 2 bilinmeyenli denklem algoritma JS kodu yazınız ?
// Kullanıcı tarafından alınan x ve kdeğerlerini hesaplayan algoritma yazınız ?
// x=2 k=3 y=? (y=18)
// let x=0,y=0,k=0;
// x=Number(prompt("Lütfen X giriniz"));
// k=Number(prompt("Lütfen K giriniz"));
// y=3*x+4*k;
// console.log("Y sonucu:"+y);

// örnek-4 operatör işlemleri: aşağıdaki örneği javascript ile yapalım
// 4+3*2(3:3-1*6+9:1+(3:3))
// console.log(4+3*2*(3/3-1*6+9/1+(3/3)));


/////////////////////////////////////////////////// 
// MATH
// console.log(Math.PI);
// console.log(Math.E);
// console.log(Math.min(3,5,6,99,100,-500));
// console.log(Math.max(3,5,6,99,100,-500));
// console.log(Math.abs(-500));
// console.log(Math.abs(500));
// console.log(Math.sqrt(25));
// console.log(Math.pow(2,5));
// console.log(Math.floor(5.9));
// console.log(Math.ceil(7.000001));
// console.log(Math.round(3.4));
// console.log(Math.round(3.5));
// console.log(Math.round(Math.random()*9+1));
// console.log(Math.sin(45));
// console.log(Math.asin(1));

//// MATH ÖDEVİ
// Math Ödev
// Kullanıcıda tarafından aldığımız 2 tane sayının (prompt)
// s1-) Bu sayılardan en küçüğü nedir ? (min)
// s2-) Bu sayılardan en büyüğü nedir ? (max)
// s3-) Bu sayılardan en büyüğü karekökü nedir ? (sqrt(max))
// s4-) Bu sayılardan en büyüğü karekökünün üste yuvarlıyalım nedir ? (ceil(sqrt(max)))
// s5-) Bu sayılardan en küçüğü mutlak değeri nedir ? (abs(min))
// s6-) Bu sayılardan en küçüğü alt taban en büyüğü üst taban şeklinde üstünü alalım(pow(min,max))

// let number1,number2;
// number1=Number(prompt("1.sayı"));
// number2=Number(prompt("1.sayı"));
// console.log(Math.min(number1,number2));
// console.log(Math.max(number1,number2));
// console.log(Math.ceil(Math.sqrt(Math.max(number1,number2))));
// console.log(Math.abs(Math.min(number1,number2)));
// console.log(Math.pow(Math.min(number1,number2),Math.max(number1,number2)));

// Örnek: Aşağıdaki örnekleri math ile çözelim ?
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

/////////////////////////////////////////////////// 
// String 
let value="JAVAscript öğreniyorum JAVAscript ";
console.log(value);
console.log(value.length);
console.log(value.trim().length);
console.log(value.toUpperCase());
console.log(value.toLowerCase());
console.log(value.indexOf("JAVAscript"));
console.log(value.lastIndexOf("JAVAscript"));
console.log(value.charAt(0));
console.log(value.charAt(value.length-2));
console.log(value.substring(1));
console.log(value.substring(0,4)); // 0<=X<=4-1
console.log(value.concat(" -sona eklendi"));
console.log(value.replace(value," java"));
console.log(value.startsWith("J"));
console.log(value.endsWith(" "));

// Örnek: 
// ÖDEV NOT:5 adımı beraber yapalım
// kullanıcı tarafından girilen bir kelimenin (prompt)
// let userData= prompt("Lütfen bir şeyler yazınız")  ;
// S-1) Kaç karakterlidir ? (length)
// S-2) boşluklar alınarak Kaç karakterlidir ? (trim)
// S-3) bütün kelimeyi küçük harfle göstermek ? (toLowerCase())
// S-4) bütün kelimeyi büyük harfle göstermek ? (toUpperCase())
// S-5) Kullanıcıdan alınan ilk kelimeyle , "javascript" kelimeyle değiştirin. (replace, substring, indexOf)
// console.log(userData.replace("xxxxxxx"),"javascript");
// console.log(userData.replace(userData.substring(0,userData.indexOf(" ")),"javascript"));
// S-6) yazdığınız kelimede "javascript ile mi başlıyor" ? (startsWith()) 
// S-7) yazdığınız kelimede "javascript ile mi bitiyor" ? (endsWith())
// S-8) ilk harf nedir  ? (charAt())
// S-9) girdiğiniz kelimenin sonuna "-ben js öğreniyorum" (concat())
// S-10) girdiğiniz 0 ile 4 arasındaki indexi ekranda gösterin? (subString())

/////////////////////////////////////////////////// 

// Function 

// Normalş function,  Anonymous Function, Arrow Functrion, Immedia Function