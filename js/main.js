/*1*/
var myNum=10;
console.log(myNum);
var myStr='строка';
console.log(myStr);
var myBool=true;
console.log(myBool);
var myArr=[1,2,3,4,5];
console.log(myArr);
var myObj={
  first:'First Name', 
  last:'Last Name'
};
console.log(myObj);

/*2*/
var decimal2=myNum.toFixed(2);
console.log(decimal2);

/*3*/
var i=10;
console.log(++i);
console.log(i);
console.log(i++);
console.log(i);
console.log(--i);
console.log(i);
console.log(i--);
console.log(i);

/*4*/
var myTest=20;
myTest += 30;
console.log(myTest);
myTest -= 20;
console.log(myTest);
myTest *= 4;
console.log(myTest);
myTest /= 5;
console.log(myTest);
myTest %= 5;
console.log(myTest);

/*5*/
myPi=Math.PI;
console.log(myPi);
myRound=Math.round(89.279);
console.log(myRound);
myRandom=Math.random() * 10;
console.log(myRandom);
myPow=Math.pow(3, 5);
console.log(myPow);

/*6*/
var strObj = {str: 'Мама мыла раму, рама мыла маму'};
strObj.length = strObj.str.length;
console.log(strObj);

/*7*/
isRamaPos=strObj.str.indexOf('рама');
console.log(isRamaPos);

/*8*/
var strReplace = strObj.str.replace('мыла', 'моет');
strReplace = strReplace.replace('рама', 'Рама');
strReplace = strReplace.replace('мыла', 'держит');
console.log(strReplace);

/*9*/
string='Привет';
console.log(string.toUpperCase());
console.log(string.toLowerCase());


