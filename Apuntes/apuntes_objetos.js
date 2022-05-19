let listaPersonas = [];

class Persona {
	constructor(name) {
		this.nombre = name;
		this.dni = Car.generateMatricula();
		listaPersonas.push(this);
	}
}

class Car {
	constructor(marca, propietario) {
		this.brand = marca;
		this.propietario = propietario;
		this.matricula = Car.generateMatricula();
		this.pasajeros = [];
	}
	show() {
		if (this.brand == "Seat") {
			return "es una marca X";
		} else {
			return this.brand + " " + this.matricula;
		}
	}

	static generateMatricula() {
		return Math.floor(Math.random() * (9999 + 1 - 1000) + 1000);
	}

	setPasajeros(pasajero) {
		// if (typeof pasajero == Persona);
		if (this.pasajeros.includes(pasajero)) {
			this.pasajeros.remove(pasajero); //eliminar
		} else {
			this.pasajeros.push(pasajero); //añadir
		}
	}

	printJSON() {
		return JSON.stringify(this);
	}

	print() {
		return this;
	}

	tabla() {
		console.table([[this.brand], [this.propietario, this.propietario.nombre]]);
	}
}

let persona1 = new Persona("Juan");
let persona2 = new Persona("Pedro");
let persona3 = new Persona("Sandra");

coche1 = new Car("Seat", persona1); //crear coche
coche2 = new Car("Ford", persona2); //crear coche
coche3 = new Car("Ford", persona3); //crear coche

coche1.setPasajeros(persona1);
coche1.setPasajeros(persona2);

// console.log(coche1.propietario.nombre);
console.log(coche1.pasajeros);
console.log(coche1.printJSON());
console.log(coche1.print());

console.log(coche1.brand + " " + coche1.matricula);
console.log(coche2.brand + " " + coche2.matricula);
console.log(coche3.brand + " " + coche3.matricula);

console.log("");

console.log(coche1.show());
console.log(coche2.show());
console.log(coche3.show());

console.log("");
coche1.tabla();
console.log("");
