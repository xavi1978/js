function ValidateEmail(campo, nombreCampoError) {
	if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(campo.value)) {
		cambiarCorrectoIncorrecto(campo, nombreCampoError, true);
	} else {
		cambiarCorrectoIncorrecto(campo, nombreCampoError, false);
	}
}

function checkNom(campo, nombreCampoError) {
	//console.log(campo);
	let texto = campo.value.trim().replace(/  +/g, " ");
	if (texto.length > 2) {
		// //console.log("if name");
		// campo.classList.remove("corregir");
		// campo.classList.add("correcte");
		// //campo.value = texto;
		// document.getElementById("textoErrorNombre").style.visibility = "hidden";
		cambiarCorrectoIncorrecto(campo, nombreCampoError, true);
	} else {
		// campo.classList.remove("correcte");
		// campo.classList.add("corregir");
		// document.getElementById("textoErrorNombre").style.visibility = "visible";
		cambiarCorrectoIncorrecto(campo, nombreCampoError, false);
	}
}
function checkCognoms(campo, nombreCampoError) {
	let texto = campo.value.trim().replace(/  +/g, " ");
	let arrayTexto = texto.split(" ");
	// console.log(
	//  (arrayTexto.length >= 2) +
	//      " " +
	//      (arrayTexto[0].length > 3) +
	//      " " +
	//      (arrayTexto[1].length > 3)
	// );
	if (
		arrayTexto.length >= 2 &&
		arrayTexto[0].length > 3 &&
		arrayTexto[1].length > 3
	) {
		// campo.classList.remove("corregir");
		// campo.classList.add("correcte");
		// document.getElementById("textoErrorNombre").style.visibility = "hidden";
		cambiarCorrectoIncorrecto(campo, nombreCampoError, true);
	} else {
		// campo.classList.remove("correcte");
		// campo.classList.add("corregir");
		// document.getElementById("textoErrorNombre").style.visibility = "visible";
		cambiarCorrectoIncorrecto(campo, "textoErrorNombre", false);
	}
}
function cambiarCorrectoIncorrecto(campo, nombreDelCampoTexto, boleano) {
	if (boleano) {
		campo.classList.remove("corregir");
		campo.classList.add("correcte");
		document.getElementById(nombreDelCampoTexto).style.visibility = "hidden";
	} else {
		campo.classList.remove("correcte");
		campo.classList.add("corregir");
		document.getElementById(nombreDelCampoTexto).style.visibility = "visible";
	}
}

function cambiarCorrectoIncorrecto(campo, nombreCampoError, boleano) {
	if (boleano) {
		campo.classList.remove("corregir");
		campo.classList.add("correcte");
		document.getElementById(nombreCampoError).style.visibility = "hidden";
	} else {
		campo.classList.remove("correcte");
		campo.classList.add("corregir");
		document.getElementById(nombreCampoError).style.visibility = "visible";
	}
}

function ValidatePassword(campo, nombreCampoError) {
	let texto = campo.value.trim().replaceAll(" ", "");
	let largoTexto = texto.length;
	if (largoTexto > 3) {
		if (largoTexto < 8) {
			//7a4
			if (letras(texto)) {
				cambiarCorrectoIncorrecto(campo, nombreCampoError, true);
			} else {
				cambiarCorrectoIncorrecto(campo, nombreCampoError, false);
			}
		} else if (largoTexto < 12) {
			//11a8
			let bloque1 = texto.slice(4);
			let bloque2 = texto.slice(4, 8);
		} else {
			//inf a 12
			let bloque1 = texto.slice(4);
			let bloque2 = texto.slice(4, 8);
			let bloque3 = texto.slice(8, 12);
		}
	} else {
		cambiarCorrectoIncorrecto(campo, nombreCampoError, false);
	}
}
//cambiarCorrectoIncorrecto(campo, nombreCampoError, true);

const mayuscula = /[A-Z]/;
const minuscula = /[a-z]/;
const numero = /[0-9]/;
const caracter = /[!@#\$%\^\&*\)\(+=._-]/;
letras("Aa0@");
function letras(texto) {
	let var1 = false;
	let var2 = false;
	let var3 = false;
	let var4 = false;
	if (mayuscula.test(texto)) {
		console.log("mayuscula");
	}
	if (minuscula.test(texto)) {
		console.log("minuscula");
	}
	if (numero.test(texto)) {
		console.log("numero");
	}
	if (caracter.test(texto)) {
		console.log("caracter");
	}
	if (var1 && var2 && var3 && var4) {
		return true;
	}
	return false;
}
