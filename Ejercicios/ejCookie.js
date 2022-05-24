document.getElementById("botonCrear").addEventListener("click", funcion1);
function funcion1() {
	document.getElementById("preg1").style.visibility = "visible";
}
document.getElementById("botonSelFecha").addEventListener("click", funcion2);
function funcion2() {
	document.getElementById("fecha").style.visibility = "visible";
}
document.getElementById("botonSelDias").addEventListener("click", funcion3);
function funcion3() {
	document.getElementById("cantidad").style.visibility = "visible";
	document.getElementById("fecha").style.visibility = "hidden";
}

document.getElementById("createCookie1").addEventListener("click", funcion9);
function funcion9() {
	let campo = document.getElementById("inputDate").value;
	let resto = new Date(campo) - new Date();
	let dias = resto / 1000 / 60 / 60 / 24;
	console.log(dias);
	console.log(Math.ceil(dias));

	let nameCookie = document.getElementById("namecookie").value;
	setCookie(
		nameCookie,
		document.getElementById("valueCookie").value,
		Math.ceil(dias)
	);
	console.log("Created cookie= " + getCookie(nameCookie));
}
document.getElementById("createCookie2").addEventListener("click", funcion5);
function funcion5() {
	setCookie(
		document.getElementById("nameCookie"),
		document.getElementById("valueCookie"),
		document.getElementById("anos").value * 365
	);
	console.log(document.getElementById("anos").value);
	console.log(
		document.getElementById("anos").value * 365 +
			document.getElementById("mes").value * 30 +
			document.getElementById("dias").value
	);
	console.log("Created cookie= " + getCookie(nameCookie));
}
select = document.getElementById("selector");
listCookies();
function listCookies() {
	var theCookies = document.cookie.split(";");
	select.innerHTML = "";
	for (var i = 1; i <= theCookies.length; i++) {
		var opt = document.createElement("option");
		opt.value = theCookies[i - 1];
		opt.innerHTML = theCookies[i - 1].split("=")[0];
		select.appendChild(opt);
	}
}
document.getElementById("leerContenido").addEventListener("click", funcion6);
function funcion6() {
	console.log(select.value);
}
document.getElementById("modificar").addEventListener("click", funcion7);
function funcion7() {
	console.log(select.value);
	document.getElementById("preg1").style.visibility = "visible";
	let array = select.value.split("=");
	console.log(array);
	console.log(array[0]);
	console.log(array[1]);
	document.getElementById("nameCookie").value = array[0];
	document.getElementById("valueCookie").value = array[1];
}
document.getElementById("borrar").addEventListener("click", funcion8);
function funcion8() {
	// console.log(select.value.split("=")[0]);
	setCookie(select.value.split("=")[0], "", -1);
	listCookies();
}
