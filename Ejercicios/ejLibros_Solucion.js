"use strict";
let listaLibros = [];

class Libro {
	constructor(
		sn,
		titulo,
		autor,
		// edicion = nombreAleatorio(),
		edicion,
		precio = 0,
		tematica = []
	) {
		this.sn = sn;
		this.titulo = titulo;
		this.autor = autor;
		this.edicion = edicion;
		this.precio = precio.toString().replace(",", ".");
		this.tematica = tematica;
		listaLibros.push(this);
		this.pintarLibrosEnLaTabla();
	}

	//Libro.newConstructor()
	static newConstructor(sn, titulo, autor) {
		new Libro(
			sn,
			titulo,
			autor,
			nombreAleatorio(),
			nombreAleatorio(),
			nombreAleatorio()
		);
	}

	pintarLibrosEnLaTabla() {
		let boton_eliminar = document.createElement("button");
		boton_eliminar.innerHTML = "Remove";
		boton_eliminar.value = "libro_" + this.sn;
		boton_eliminar.addEventListener("click", function () {
			// document.getElementById(this.value).remove(); //.innerHTML = "";
			tbody.removeChild(tr);
			//todo: eliminar de la lista
		});

		let td_sn = document.createElement("td");
		let td_titulo = document.createElement("td");
		let td_autor = document.createElement("td");
		let td_edicion = document.createElement("td");
		let td_precio = document.createElement("td");
		let td_tematica = document.createElement("td");
		let td_eliminar = document.createElement("td");

		td_sn.innerHTML = this.sn;
		td_titulo.innerHTML = this.titulo;
		td_autor.innerHTML = this.autor;
		td_edicion.innerHTML = this.edicion;
		td_precio.innerHTML = this.precio + "€";
		td_tematica.innerHTML = Libro.pintarLasTematicasFormateadas(this.tematica);
		td_eliminar.appendChild(boton_eliminar);

		let tr = document.createElement("tr");
		tr.appendChild(td_sn);
		tr.appendChild(td_titulo);
		tr.appendChild(td_autor);
		tr.appendChild(td_edicion);
		tr.appendChild(td_precio);
		tr.appendChild(td_tematica);
		tr.appendChild(td_eliminar);

		let tbody = document.getElementById("tabla1");
		tbody.appendChild(tr);
	}

	static pintarLasTematicasFormateadas(array) {
		let acumulado = "";
		for (let i = 0; i < array.length; i++) {
			acumulado += array[i] + ", ";
		}
		return acumulado.slice(0, -2);
	}

	pintarLasTematicasFormateadasLibro() {
		let acumulado = "";
		for (let i = 0; i < this.tematica.length; i++) {
			acumulado += this.tematica[i] + ", ";
		}
		return acumulado.slice(0, -2);
	}
	// console.table
	// ordenar(
	pintarEnConsola() {
		//console.table(this);
		console.table([
			[
				this.sn,
				this.titulo,
				this.autor,
				this.edicion,
				this.precio,
				this.pintarLasTematicasFormateadasLibro(),
			],
		]);
	}
	toJSON() {
		return JSON.stringify({
			sn: this.sn,
			titulo: this.titulo,
			autor: this.autor,
			edicion: this.edicion,
			precio: this.precio,
			tematica: this.pintarLasTematicasFormateadasLibro(),
		});
	}
}

new Libro("ABC123", "Muse", "canelita", 3, 700, [
	"terror",
	"aventura",
	"drama",
]);
new Libro("BCD234", "JS", "Mascarilla", 18, 0.21, ["romance", "comedia"]);
new Libro("BCD234", "JS", "Mascarilla", 18);
console.log(listaLibros);
console.log(Libro.pintarLasTematicasFormateadas(listaLibros[0].tematica));

let uno = listaLibros[0].toJSON();
let dos = JSON.parse(uno);
console.table([dos]);
console.table([{ x: 1, y: 2 }]);

let objeto1 = { x: 1, y: 2 };
let objeto2 = { x: 1, y: 3 };
console.assert(Object.is(objeto1, objeto2));

// "nombre":"valor","campo2"?"valor2";
// "nombre3":"valor","campo4"?"valor2";
// "nombre5":"valor","campo6"?"valor2";

// 3.54
// 3,54

// [a, 12, 5, 4, 1, g, c, B]
// [1, 4, 5, 12, a, c, g, B]
