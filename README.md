# Repositorio de ejercicios de JS

`alert()` mostrar alerta emergente.

`confirm()` mostrar confirmación.

`document.write()` mostrar mensaje en página web.

`prompt()` solicitar datos al usuario.

`window.print()` imprime página.

### Console

`console.log()` mostrar mensaje consola.

`console.warn()` mostrar aviso consola.

`console.error()` mostrar error consola.

`console.info()` mostrar mensaje consola.

### Formato

`isNaN()` comprobar valor no numérico.

`Number()` (clase) transformar valor a número.

`parseInt()` (función) interpretar valor como entero.

`parseFloat()` (función) interpretar valor como flotante.

`toPrecision(cantidad de cifras incl. decimales)` redondeo.

`typeOf()` mostrar tipo de variable.

`valueOf()` mostrar valor primitivo variable.

## String

`charAt()` selecciona un carácter.

`charCodeAt()` selecciona el código de un carácter.

`concat()` concatena.

`endsWith()` devuelve si termina por cadena.

`includes()` devuelve si incluye subcadena.

`indexOf()` primer índice de un valor (2º arg., a partir).

`lastIndexOf()` último índice de un valor (2º arg., a partir).

`length()` mostrar longitud.

`match()` casa una cadena con regex, devuelve array coincidencia.

`padEnd()` rellena sufijando otra cadena.

`padStart()` rellena prefijando otra cadena.

`replace()` sustituir subcadena.

`slice()` extrae una subcadena.

`split()` dividir.

`startsWith()` devuelve si comienza por cadena

`substring()` extrae una subcadena (no tiene negativo).

`toLowerCase()` convertir a minúscula.

`toString()` devuelve una subcadena.

`toUpperCase()` convertir a mayúscula.

`trim()` limpia espacios a principio y final.

### Salidas de typeof()

string, number, undefined, Nan, boolean, Infinity, matrices[], objetos{}

### Primitivas

int, string, boolean, float

### Nuevas

Int, String, Boolean, Float

### Caracteres de control

`\n` salto de carro.

`\r` retorno de carro (salto de línea).

`\t` tab.

`\v` tab vertical.

`\b` space.

`\f` avance formulario.

`\"`

`\'`

`\acento abierto`

`\\`

### Operadores

`+`

`-`

`*`

`/`

`++` +1.

`--` -1.

`**` exponente.

`%` módulo.

`? :` ternario. if (cond.){ejec.}else{ejec.2} equivale a cond. ? ejec. : ejec.2.

### Prioridad operadores

() []

/ \*

\+ -

&& ||

### Operador unario

`++$i` Pre-incremento.

`--$i` Pre-decremento.

`$i++` Post-incremento.

`$i--` Post-decremento.

### Llaves

if(condición){ejecución}

function nombre(parámetros){ejecución}

Array[]

### Condición

valor1 `==` valor2

valor1 `!=` valor2

valor1 `<=` valor2

valor1 `>=` valor2

valor1 `<` valor2

valor1 `>` valor2

valor1 `===` valor2 (byte a byte)

valor1 `!==` valor2 (byte a byte)

### Operadores de segundo grado

`+=`

`-=`

`\*=`

`/=`

`%=`

`**=`

### Operadores bitwise

`&` AND

`|` OR

`~` NOT

`^` XOR

`<<` left shift

`>>` right shift

`>>>` unsigned right shift

### Acceso a elementos

`document.getElementsByTagName()` nombre etiqueta.

`document.getElementById()` atributo id.

`document.getElementByClassName()` atributo class (permite varios)

`document.getElementByClassName()[]` elemento n con atributo class.

`document.getElementByName()` atributo name.

`.innerHTML =` sustituye contenido.

`.innerHTML +=` añade contenido.

`.style.backgroundColor` modifica estilo.

## Propiedades

`.length`

## Ejemplos

document.getElementsByTagName("p")[0].innerHTML="AAA";

document.getElementsByTagName("p")[0].classList.add("rojo");

document.getElementsByTagName("p")[0].classList.remove("rojo");

document.getElementsByTagName("p")[0].classList.replace("rojo","azul");

### Bucles

```
while (i < 10) {
  text += "The number is " + i;
  i++;
}
```

```
do {
  text += "The number is " + i;
  i++;
}
while (i < 10);
```

```
for (let i = 0; i < 5; i++) {
  text += "The number is " + i + "<br>";
}
```
