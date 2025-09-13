// ===============================
// MÉTODOS DE ARRAYS (AMPLIADOS)
// ===============================

// 1. push(elemento)
let numeros = [1, 2, 3];
numeros.push(4);
console.log(numeros); // [1, 2, 3, 4]

// 1.1 push con múltiples elementos
numeros.push(5, 6);
console.log(numeros); // [1, 2, 3, 4, 5, 6]

// 2. pop()
let frutas = ["manzana", "pera", "uva"];
let ultima = frutas.pop();
console.log(frutas); // ["manzana", "pera"]
console.log(ultima); // "uva"

// 3. unshift(elemento)
let colores = ["azul", "verde"];
colores.unshift("rojo");
console.log(colores); // ["rojo", "azul", "verde"]

// 3.1 unshift múltiple
colores.unshift("negro", "blanco");
console.log(colores); // ["negro", "blanco", "rojo", "azul", "verde"]

// 4. shift()
let letras = ["a", "b", "c"];
let primera = letras.shift();
console.log(letras); // ["b", "c"]
console.log(primera); // "a"

// 5. length
let animales = ["perro", "gato", "conejo"];
console.log(animales.length); // 3

// 6. forEach(callback)
numeros = [1, 2, 3];
numeros.forEach((n, i) => console.log(`Posición ${i}: ${n*2}`));
// Posición 0: 2, Posición 1: 4, Posición 2: 6

// 7. map(callback)
let nums = [1, 2, 3];
let cuadrados = nums.map(n => n * n);
console.log(cuadrados); // [1, 4, 9]

// 7.1 map a objetos
let nombres = ["Ana", "Luis"];
let objetos = nombres.map(n => ({nombre: n}));
console.log(objetos); // [{nombre:"Ana"},{nombre:"Luis"}]

// 8. filter(callback)
nums = [10, 20, 30, 40];
let mayores = nums.filter(n => n > 25);
console.log(mayores); // [30, 40]

// 9. find(callback)
let personas = [{nombre: "Ana"}, {nombre: "Luis"}, {nombre: "Marta"}];
let encontrada = personas.find(p => p.nombre === "Luis");
console.log(encontrada); // {nombre: "Luis"}

// 10. some(callback)
nums = [1, 3, 5];
console.log(nums.some(n => n % 2 === 0)); // false

// 10.1 some con objetos
console.log(personas.some(p => p.nombre === "Marta")); // true

// 11. every(callback)
nums = [2, 4, 6];
console.log(nums.every(n => n % 2 === 0)); // true

// 12. reduce(callback, valorInicial)
nums = [1, 2, 3, 4];
let suma = nums.reduce((acc, n) => acc + n, 0);
console.log(suma); // 10

// 12.1 reduce para obtener el máximo
let maximo = nums.reduce((max, n) => n > max ? n : max, nums[0]);
console.log(maximo); // 4

// 13. includes(valor)
frutas = ["manzana", "pera", "uva"];
console.log(frutas.includes("pera"));   // true
console.log(frutas.includes("banana")); // false

// 14. indexOf(valor)
letras = ["a", "b", "c", "b"];
console.log(letras.indexOf("b"));     // 1
console.log(letras.indexOf("z"));     // -1
console.log(letras.lastIndexOf("b")); // 3

// 15. sort()
nums = [10, 2, 30];
nums.sort((a, b) => a - b);
console.log(nums); // [2, 10, 30]

// 15.1 sort() texto
let letras2 = ["a","z","b","k"];
letras2.sort((a,b) => a.localeCompare(b));
console.log(letras2); // ["a","b","k","z"]

// 15.2 sort() descendente
nums = [10, 2, 30];
nums.sort((a, b) => b - a);
console.log(nums); // [30, 10, 2]

// 16. reverse()
letras = ["a", "b", "c"];
letras.reverse();
console.log(letras); // ["c", "b", "a"]

// 17. slice(inicio, fin)
nums = [1, 2, 3, 4, 5];
console.log(nums.slice(1, 3)); // [2, 3]

// 17.1 slice sin fin
console.log(nums.slice(2)); // [3, 4, 5]

// 18. splice(inicio, cantidad, ...nuevos)
nums = [1, 2, 3, 4];
nums.splice(1, 2, 99);
console.log(nums); // [1, 99, 4]

// 18.1 solo borrar
nums = [1, 2, 3, 4];
nums.splice(1, 2);
console.log(nums); // [1, 4]

// 19. join(separador)
frutas = ["manzana", "pera", "uva"];
console.log(frutas.join(", ")); // "manzana, pera, uva"

// 20. concat()
let arr1 = [1,2];
let arr2 = [3,4];
console.log(arr1.concat(arr2)); // [1,2,3,4]

// 21. flat()
let anidado = [1, [2, [3, 4]]];
console.log(anidado.flat());     // [1, 2, [3, 4]]
console.log(anidado.flat(2));    // [1, 2, 3, 4]

// 22. flatMap()
nums = [1, 2, 3];
console.log(nums.flatMap(n => [n, n*2]));
// [1,2, 2,4, 3,6]

// 23. fill(valor, inicio, fin)
nums = [1, 2, 3, 4];
nums.fill(0, 1, 3);
console.log(nums); // [1, 0, 0, 4]

// 24. from()
let cadena = "hola";
console.log(Array.from(cadena)); // ["h","o","l","a"]

// 25. keys(), values(), entries()
let arr = ["a", "b", "c"];
for (let i of arr.keys()) console.log(i);       // 0,1,2
for (let v of arr.values()) console.log(v);    // a,b,c
for (let [i,v] of arr.entries()) console.log(i,v); // 0 a, 1 b, 2 c

// ===============================
// MÉTODOS DEL DOM
// ===============================

// 1. document.getElementById(id)
// <p id="mensaje">Hola Mundo</p>
const elem = document.getElementById("mensaje");
console.log(elem?.textContent);

// 2. document.getElementsByTagName(name)
// <p>Primer párrafo</p>
// <p>Segundo párrafo</p>
const parrafos = document.getElementsByTagName("p");
console.log(parrafos.length);
console.log(parrafos[0]?.textContent);

// 3. document.createElement(name)
// <div id="contenedor"></div>
const nuevoParrafo = document.createElement("p");
nuevoParrafo.textContent = "Soy un párrafo nuevo";
document.getElementById("contenedor")?.appendChild(nuevoParrafo);

// 4. parentNode.appendChild(node)
// <ul id="lista"></ul>
const item = document.createElement("li");
item.textContent = "Elemento de lista";
document.getElementById("lista")?.appendChild(item);

// 5. element.innerHTML
// <div id="caja"></div>
const caja = document.getElementById("caja");
if (caja) {
    caja.innerHTML = "<b>Texto en negrita</b>";
    console.log(caja.innerHTML);
}

// 6. element.style.left
// <div id="cuadro" style="position:absolute; left:50px; top:20px; width:100px; height:100px; background:red;"></div>
const cuadro = document.getElementById("cuadro");
if (cuadro) {
    cuadro.style.left = "200px";
}

// 7. element.setAttribute(name, value)
// <img id="foto" src="imagen1.jpg">
const img = document.getElementById("foto");
img?.setAttribute("src", "imagen2.jpg");

// 8. element.getAttribute(name)
// <a id="enlace" href="https://www.youtube.com/">link</a>
const enlace = document.getElementById("enlace");
console.log(enlace?.getAttribute("href"));

// 9. element.addEventListener(event, function)
// <button id="boton">Haz clic</button>
const boton = document.getElementById("boton");
boton?.addEventListener("click", () => {
    alert("¡Botón presionado!");
});

// 10. window.onload
window.onload = function() {
    alert("La página terminó de cargar");
};

// 11. window.scrollTo(x, y)
// window.scrollTo(0, 500);
