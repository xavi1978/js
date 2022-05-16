const arrayFotos = [
	"céline.jpg",
	"enrique-hoyos.jpg",
	"shad-meeg.jpg",
	"tatiana.jpg",
	"empty.jpg",
];
const tamanoArray = array.length;
const tamanoArrayRecorrer = tamanoArray - 1;
const imagen = document.getElementById("imagen");
const numero = document.getElementById("numero");

let posicion = 0;
function changeImage(param) {
	if (param != 0) {
		posicion = posicion + param;
		if (posicion > tamanoArrayRecorrer) {
			posicion = 0;
		}
		if (posicion < 0) {
			posicion = tamanoArrayRecorrer;
		}
	} else {
		posicion = 0;
	}
	// console.log(0 + ">=" + posicion + "<=" + tamanoArrayRecorrer);
	console.log(posicion);
	imagen.src = "./carousel/" + array[posicion];
	// console.log(array[posicion].split("."));
	console.log(array[posicion].split("."));
	let nombreImagen = array[posicion].split(".")[0];
	imagen.alt = nombreImagen;
	console.log(nombreImagen.charAt(0).toUpperCase() + nombreImagen.slice(1));
}
