/* document.write("Hello World"); */
/*
var number = 21;
var string;
string = "Hello World!";
var floatNumber = 1.23;
var isTrue;
isTrue = true;

document.write("Variable nember = " + number + "<br />" + string + "<br />" + floatNumber + "<br />" +isTrue);
 



var x=5;
var y;
var result;
y = 12;
result = x + y ;
document.write("<br />" + result);
result *= x;
document.write("<br />" + result);
result--;
document.write("<br />" + result);
document.write("<br />");
document.write(x + " + " + y + " = " +(x + y));
document.write("<br />");
var str_1 = "12";
var str_2 = Number("24");
document.write(Number(str_1) + (str_2));





var bool;
var z = 7;
var d = 7;
bool = z >= d;
document.write("<br />");
document.write(bool);
document.write("<br />");
document.write(35 + " % " + 7 + " = " + (35 % 7));




/* Условные Операторы */
/*
 var x = 6;
 var y = 5;
 var bool = false;

 if (x > y || bool == true) {
 		document.write("<br />" + "x > y");
 }
 else if (x == y) {
 	document.write("<br />" + "x == y");
 }
 else {
 	document.write("<br />" + "x < y");
 }




/*
document.write("<br />");
 var result = 5;
 switch (result) {
 	case 1: document.write("result = 1"); break;
 	case 2: document.write("result = 2"); break;
 	case 3: document.write("result = 3"); break;
 	case 4: document.write("result = 4"); break;
 	default: document.write("result > 4");
 }

 document.write("<br />");
 x >= y ? document.write("YES") : document.write("NO");

*/





/*  Циклы */
/*

document.write("<br />")
for (var i = 0; i < 10; i++) {
	document.write(i + "<br />")
}



document.write("<br />")
for (var i = 0; i < 10; i += 3) {
	if (i % 3 == 0 && i != 0) continue;
	if (i == 8) break;
	document.write(i + "Hello!<br />")
}


var x = 0;
while (x<10) {
	document.write(x + "<br />")
	x += 2;	
}


var y = 1000;
do {
	document.write("Цикл сработал !")
} while( y<100);
*/
/*
var person;
 /*alert("Hello," + person);*/
/*
if (confirm("Are you sure?")) {
	person = prompt("Hi what your name?");
	alert("Hello," + person);
} else
 	alert("person not sure");
*/






	/*   МАСИВЫ   */
	/*
	var arr = new Array("str", 1.23, 7, false);
	for (var i = 0; i < arr.length; i++) {
			document.write(arr[i] + "<br />");
	}
	arr = new Array();
	for (i = 0; i <10; i++) {
		arr[i] = i * 3;
		document.write(arr[i] + "<br />");
	}
	var summ = 0;
	for (i = 0; i < arr.length; i++)
		summ += arr[i];	
		document.write("Сумма равна - " + summ);
	*/



/*
var arr_1 = new Array();
var arr_2 = new Array();
var arr_3 = new Array();
for (var i = 0; i < 5; i++) arr_1[i] = i;
for (var i = 0; i < 10; i++) arr_2[i] = i;
for (var i = 0; i < 15; i++) arr_3[i] = i;

var arr = new Array (arr_1, arr_2, arr_3);


for (var x = 0; x < arr.length; x++) {
	for (var j = 0; j < arr[x].length; j++) {
	document.write(arr[x][j] + " ")	
	}
	document.write("<br />")	
}
*/
/*
function buttonClick (button) {
	alert ("Вы нажали на кнопку. Кнопка имеет имя " + button.name + ", также value равно " + button.value + ".")	
}


var counter = 0;
function OnMousConter (element) {
	element.innerHTML = "На этот текст навели " + counter + " раз"
	counter++;
}
*/







/*                       ВАЛИДАЦИЯ                             */
/*
function valid (form) {
	var fail = false;
	var name = form.name.value;
	var password = form.password.value; 
	var RePassword = form.RePassword.value; 
	var state = form.state.value;
	if (name ==  "" || name == " ")
		fail = "Вы не вели свое имя";
		else if (password ==  "")
		fail = "Вы не вели пароль";
		else if (password != RePassword)
		fail = "Пароли не совпадают";
		else if (state == "")
		fail = "Укажите пол";
	if (fail)
		alert (fail);
}





*/
/*
var statement //инструкция
statement = 5+2; //Выражение
var str ='asdasd'
//ОПЕРАТОРЫ
//арифметические ( основные)
// 2+3 //5
// 5-4 //1
// 2*2 //4
// 6/2 //3
// 5%2 //1 Модуль


var i = 2;
var b = 3;
++i;//Ингримент
--i;//Дигримент
*/

//                          ВИДЫ ОПЕРАТОРОВ!!!!!!!!


//сравнения
//условные
// var age = 17;
// if (age===18) {
// 	alert('Вы взрослый')
// }else if (age === 24) {
// 	alert('Держите Водку!')
// }
//  else if (age === 21) {
// 	alert('Дуржите пиво!')
// } 
// else {
// 	alert('Вам нет 18 лет!')
// }
// var age = 10;
// (age===18)? alert('Вы взрослый') :  
// 			(age===21) ? alert('Держите Пиво!') :
// 			(age===24) ? alert('Юность заканчивается') :
// 					   alert('Вам нет 18 лет!') 
//логические
// var transport = 'автомобиль';
// (transport ==='автомобиль' || transport ==='Велосипед') ? alert('Вы добрались до дома быстро!') : alert('Пешком идти далековато...');
// ||// ИЛИ
// &&// и 
// ! // не

// var x = 10,
// 	y = 20,
// 	c = 3,
// 	b = x * c + y,
// 	result = b * c - y + x;

//  var primer = console.log( result);
//  if (result != 140) {
//  	console.log ('Не верно !')
//  }
//  else {
//  	console.log ('Все верно !')
//  }




//                              ЧИСЛА


// var number=234.467;
	// n = NaN;

// console.log(number.toFixed(2));
// console.log( number.toExponential() );
// console.log( number.toPrecision(4) );
// console.log( number.toString(4) );

  // console.log( Math.sqrt(36));
 // console.log( Math.pow(5, 4));
 // console.log( Math.floor(number));
// console.log( Math.ceil(number));
//console.log( (number));
//console.log( Math.PI );

// console.log( '10'/2 + (23 + 23) );
// console.log( NaN === NaN );
// console.log( isNaN(number) );
// console.log (1/0);
// console.log (-1/0);	




//                            СТРОКИ!



// var str = 'String is a data type';
// 	str2 = "\"string\" is a data type"
// 	longStr = 'Длинная\n \tстрока какая то \nполучилась'

	// console.log ( longStr );

	// console.log ( str2.length );
		// console.log(str.charAt(2));
		// console.log(str.charCodeAt(1));
	// console.log(str.substring(7)); 
	// console.log(str.substring(0, 6));
	// console.log(str.slice(-10));
	// console.log(str.substr(12, 4));

	// console.log ( str.split('') ); (Массив)
	// console.log (str.replace('string', 'number') ); (Замена)

	// console.log ( str.indexOf('type')) 

	// console.log (str.toUpperCase() );
	// console.log (str.toLowerCase() );
	




/* ---------------------------- ПРИМИТИВНЫЕ ТИПЫ ДАННЫХ ------------------------*/
// var obj = {};
// console.log( Boolean(NaN) );
// console.log( Boolean("") );
// console.log( Boolean(0) );
// console.log( Boolean(undefined) );
// console.log( Boolean(null) );

// console.log ( Boolean('dasdadq') );
// console.log ( Boolean('1211312') );
// console.log ( Boolean('obj') );

//  var booll = 'str';
//  if (booll) {
//  	console.log ( 'Привет ребята!')
//  }


/* ----------------------------------Преобразования Типов--------------------------*/




// console.log (typeof String(4444) );
// console.log (typeof Number('4444') );
// console.log (typeof Boolean(0) );

// console.log ( typeof (5 + '1') );
// console.log ( typeof (13131 + '') ); // быстрый способ преобразования в строку
// console.log ( typeof (+'1111') ); // быстрый способ преобразования в число
// console.log ( typeof (!!'223') ); // быстрый способ преобразования в логичное значение ( буль )






/*----------------------------------------Объекты-------------------------------*/

// var obj = new Object ();

// var obj = {
// 	sadasd : 'str',
// 	func : function() {
// 		console.log (this.sadasd);
// 		}
// };

// var prop = 'func'

// console.log ( typeof obj[prop] || 'name');

// obj.ddd = 'Gag 9';
// obj.sadasd = 'Hui';


// console.log ( obj );

// var a = {prop: 1}, b = {prop: 2}, c = {prop: 3};



// a = b = c = {prop: 'allTheSame'};

// console.log ( a, b, c);

// var y = obj;

// console.log ( y.sadasd);

// delete obj.func

// console.log ( obj.func );

// obj.func();

// var MYAPP = {

// };
/*------------------------------ДЖЕЙКВЕРИ------------------------------------*/

// $(document).ready(function(){
// 	var test = $('div.test');
// 	for(var i = 0; i < test.length; i++) {
// 		test.get(i).style.color = "red";
// 	}
// });
// $(document).ready(function(){
// 	var test = $('#test'); 
// 	$('#test').css('color','red');
// });

 // $(document).ready(function(){
 // 	var test = $("div");
 // 	alert(test.length);

 // 	var img = $("img[title]");
 // 	alert(img.length);
 // });

// $(document).ready(function(){
//  	var link = $("#menu li a:first");
//  	console.log (link.html() );
// });

// $(document).ready(function(){
//  	var link = $("#menu li a:eq(2)");
//  	console.log (link.html() );
// });


// $('#btn_start').click(function () {
// 	$("#message")
// 		.html("Message")
// 		.css("background-color","green")
// 		.parent()
// 		.css("background-color","fff4dd")
// 		.width(150)
// 		.height(80)
// });

// $('#btn_reset').click(function(){
// 	// location.reload();
// 	$("#message")
// 		.css("background-color","red")
// });

