// CHECKBOX

// function fun_one() {
// 	var chbox;
// chbox=document.getElementById('one');

// if (chbox.checked) {
// 	console.log('Выбран!')
// }
// else {
// 	console.log('Не выбран!')
// }

// }




// RADIOBUTTON

function fun_two() {
	var radio = document.getElementsByName('r1');
	for (var i = 0; i < radio.length; i++) {
		if (radio[i].checked) {
			console.log("Выбран " + i + " элемент");
		}
	}
}
