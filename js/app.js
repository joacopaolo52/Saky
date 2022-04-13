
    /*Bienvenida */
const init = () => {
    let bienvenida = document.querySelector("#bienvenidaText");
    let bienvenidaInput = document.querySelector(`.inputNombre`)
    bienvenidaInput.addEventListener("change", ()=> bienvenida.innerText = `Hola ${bienvenidaInput.value}, bienvenido a Saky.`)
}

/* CONSTRUCTOR DE TIENDA*/

class Tienda {
  constructor (id, nombre, tamaño, precio) {
    this.id = id;
    this.nombre = nombre;
    this.tamaño =  tamaño;
    this.precio = precio;
  }
}

        /* PRODUCTOS DE TIENDA*/

const producto0 =  new Tienda(00, "TARTA DE CHOCOLATE", "PORCIÓN", 230);
let productos0 = document.querySelector(`.button-postres`);
productos0 = producto0;
const producto1 =  new Tienda(01, "TIRAMISÚ", "PORCIÓN", 300);
const producto2 =  new Tienda(02, "MUFFIN", "PORCIÓN", 200);
const producto3 =  new Tienda(03, "CHOCOTORTA", "PORCIÓN", 270);
const producto4 =  new Tienda(04, "BROWNIE", "PORCIÓN", 230);
const producto5 =  new Tienda(05, "LEMON PIE", "PORCIÓN", 300);
const producto6 =  new Tienda(06, "TÉ NEGRO", "MEDIANO", 200);
const producto7 =  new Tienda(07, "SUBMARINO", "MEDIANO", 200);
const producto8 =  new Tienda(08, "CAFÉ", "MEDIANO", 200);
const producto9 =  new Tienda(09, "MANZANILLA", "MEDIANO", 200);
const producto10 =  new Tienda(10, "TILO", "MEDIANO", 200);
const producto11 =  new Tienda(11, "CAPUCCINO", "MEDIANO", 200);

        /* ARRAYS DE PRODUCTOS*/

const postres = [producto0, producto1, producto2, producto3, producto4, producto5];
console.log(postres);

const infusiones = [producto6, producto7, producto8, producto9, producto10, producto11];
console.log(infusiones)

        /* CARRITO*/

const carrito = [];
const addToCart = (producto) => carrito.push(producto);
// const cantidad = (producto) => {
//     let x = parseInt(prompt(`Elija la cantidad de ${producto.nombre}`));
//     for (let i = 0; i < x; i++) {
//         addToCart(producto);
//     }
// }
let numero;
const cuotas = (total) => {
    while (numero !== 0 || numero !== 3 || numero !== 6 || numero !== 9 || numero !== 12) {
        numero = parseInt(prompt(`Elejir cantidad de cuotas 3 / 6 / 9 / 12.
    (Introduzca "0" para un solo pago)`));
    if (numero == 3 || numero == 6 || numero == 9 || numero == 12 ) {
        alert(`El total a pagar es de $${total / numero} en ${numero} cuotas`);
        break;
    }
    else if (numero === 0) {
        alert(`El total a pagar es de $${total / 1} en 1 pago`);
        break;
    }
    }
}

        /* MAP Y REDUCE PARA CARRITO*/

const precios = carrito.map((producto) => producto.precio)
const pagar = precios.reduce((acc, item) => acc += item, 0);
console.log(`El total a pagar es de $${pagar}`);
// cuotas(pagar);

        /* AGREGAR PRECIOS
        APP(AGREGAR PRECIOS DE POSTRES[])
        API(AGREGAR PRECIOS DE INFUSIONES[]) 
        */

const APP = (postre, x) => {
    let precio = document.createElement("h5");
    precio.innerText = `Precio : $${postre.precio}`;
    let divPadre;
    let button;
    if (x === "first") {
        divPadre = document.querySelector(`.postres:${x}-child`);
        button = document.querySelector(`.button-postres:${x}-child`);
        divPadre.appendChild(precio);
    }
    else {
        divPadre = document.querySelector(`.postres:nth-of-type(${x})`);
        button = document.querySelector(`.button-postres:nth-of-type(${x})`);
        divPadre.appendChild(precio);
    }
}
APP(postres[0], "first");

let x = 1;
for (let i = 1; i < postres.length; i++) {
    x++;
    APP(postres[i], x);
}

    /*AGREGAR POSTRES AL CARRITO */

const agregarPostre = (x, valor) =>{
    let buttonPostre = document.querySelector(`.button-postres${x}`);
    buttonPostre.addEventListener("click", ()=> {
    cantidad(postres[x], valor)
    console.log(carrito);
})
}

for (let x = 0; x < postres.length; x++) {
    agregarPostre(x, x);
}

const cantidad = (producto, valor) => {
    let x = document.querySelector(`#cantidad${valor}`)
    x = x.value
    for (let i = 0; i < x; i++) {
        addToCart(producto);
    }
}
