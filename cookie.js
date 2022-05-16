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
document.getElementById("botonSelDias").addEventListener("click", funcion5);
function funcion5() {
	setCookie(
		document.getElementById("nameCookie"),
		document.getElementById("valueCookie"),
		document.getElementById("anos").value * 365
	);
}
select = document.getElementById("selector");
listCookies();
function listCookies() {
	var theCookies = document.cookie.split(";");
	for (var i = 1; i <= theCookies.length; i++) {
		var opt = document.createElement("option");
		opt.value = theCookies[i - 1];
		opt.innerHTML = theCookies[i - 1].split("=")[0];
		select.appendChild(opt);
	}
}
