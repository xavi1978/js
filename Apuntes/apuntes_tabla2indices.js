const div = document.getElementById("tablas");

let listaDistribuidor = [];
class Distribuidor {
	constructor(nameDistribuidor, listaLibreriasReceptor) {
		this.nameDistribuidor = nameDistribuidor;
		this.listaLibrerias = listaLibreriasReceptor.filter((n) => n);
		this.listaLibros = [];
		listaDistribuidor.push(nameDistribuidor);

		let divDistribuidor = document.createElement("div");
		divDistribuidor.id = nameDistribuidor;
		divDistribuidor.style.backgroundColor = "green";
		let h2 = document.createElement("h2");
		h2.innerHTML = nameDistribuidor;
		h2.style.textAlign = "center";
		divDistribuidor.appendChild(h2);
		let tabla = document.createElement("table");
		//HEAD
		let thead = document.createElement("thead");
		let tr_thead = document.createElement("tr");
		//añadir librerias
		//console.log(this.listaLibrerias);
		tr_thead.appendChild(document.createElement("td"));
		for (let i = 0; i < this.listaLibrerias.length; i++) {
			// console.log(this.listaLibrerias[i]);
			let td = document.createElement("td");
			td.innerHTML = this.listaLibrerias[i];
			tr_thead.appendChild(td);
		}
		let td_total = document.createElement("td");
		td_total.innerHTML = "Total";
		thead.appendChild(tr_thead);
		tabla.appendChild(thead);
		//BODY
		let tbody = document.createElement("tbody");
		tabla.appendChild(tbody);

		//FIN TABLA
		divDistribuidor.appendChild(tabla);
		//BOTON AÑADIR LIBRO
		let botonAnadirLibro = document.createElement("button");
		botonAnadirLibro.innerHTML = "Añadir nuevo Libro";
		botonAnadirLibro.addEventListener("click", () => {
			let tr_body = document.createElement("tr");
			let td_nombre = document.createElement("td");
			td_nombre.innerHTML = prompt("nombre del libro");
			tr_body.appendChild(td_nombre);
			for (let i = 0; i < this.listaLibrerias.length; i++) {
				let relleno = document.createElement("td");
				relleno.innerHTML = prompt("precio para " + this.listaLibrerias[i]); //if number
				tr_body.appendChild(relleno);
			}
			tbody.appendChild(tr_body);
		});
		divDistribuidor.appendChild(botonAnadirLibro);
		//BOTON ELIMINAR
		let botonEliminarTabla = document.createElement("button");
		botonEliminarTabla.innerHTML = "Eliminar tabla";
		botonEliminarTabla.addEventListener("click", () => {
			document.getElementById(this.nameDistribuidor).remove();
		});
		divDistribuidor.appendChild(botonEliminarTabla);
		div.appendChild(divDistribuidor);
	}
}
function createDistribuidor(nameDistribuidorInput, listadelibreriasInput) {
	if (listaDistribuidor.includes(nameDistribuidorInput)) {
		alert('Error: Distribuidor name "' + nameDistribuidorInput + '" exist');
	} else {
		let lista = listadelibreriasInput.trim().replaceAll("  ", " ").split(",");
		for (let i = 0; i < lista.length; i++) {
			let counter = 0;
			for (let x = 0; x < lista.length; x++) {
				if (lista[i] === lista[x]) {
					counter++;
				}
			}
			if (counter > 1) {
				lista.splice(i, 1);
			}
		}
		// console.log(lista);
		new Distribuidor(nameDistribuidorInput, lista);
	}
}
class Libro {
	constructor(nameLibro) {
		this.nameLibro = nameLibro;
	}
}

function recolectorDeLibrerias() {
	do {
		let promp = prompt("Añadir nueva libreria");
		if (promp != "" && isNaN(promp)) {
			document.getElementById("librerias").value += promp + ",";
		}
	} while (confirm("Añadir otro?"));
}
