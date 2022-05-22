"use strict";
let listaLibros = [];

class Libro {
	constructor(sn, titulo, autor, edicion, precio = 0, tematica = []) {
		this.sn = sn;
		this.titulo = titulo;
		this.autor = autor;
		this.edicion = edicion;
		this.precio = precio;
		this.tematica = tematica;
		listaLibros.push(this);
		this.pintarLibrosEnLaTabla();
	}
	pintarLibrosEnLaTabla() {
		let boton_eliminar = document.createElement("button");
		boton_eliminar.innerHTML = "Remove";
		boton_eliminar.value = "libro_" + this.sn;

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
