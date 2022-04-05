
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

const producto0 =  new Tienda(00, "TARTA DE CHOCOLATE", "PORCIÓN", 300);
const producto1 =  new Tienda(01, "TIRAMISÚ", "PORCIÓN", 300);
const producto2 =  new Tienda(02, "MUFFIN", "PORCIÓN", 200);
const producto3 =  new Tienda(03, "CHOCOTORTA", "PORCIÓN", 250);
const producto4 =  new Tienda(04, "BROWNIE", "PORCIÓN", 250);
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
const cantidad = (producto) => {
    let x = parseInt(prompt(`Elija la cantidad de ${producto.nombre}`));
    for (let i = 0; i < x; i++) {
        addToCart(producto);
    }
}
const cuotas =(total) => {
    let numero = parseInt(prompt(`Elejir cantidad de cuotas`));
    alert(`El total a pagar es de $${total / numero} en ${numero} cuotas`)
}

cantidad(producto0);
console.log(carrito);

        /* MAP Y REDUCE PARA CARRITO*/

const precios = carrito.map((producto) => producto.precio)
const pagar = precios.reduce((acc, item) => acc += item, 0);
console.log(`El total a pagar es de $${pagar}`);
cuotas(pagar);


        /*SIMULADOR INFUSIONES */

let op;
let op2;
while (op != 0) {
    op = parseInt(prompt(`Elije infusión
    1. ${producto6.nombre}
    2. ${producto7.nombre}
    3. ${producto8.nombre}
    4. ${producto9.nombre}
    5. ${producto10.nombre}
    6. ${producto11.nombre}
    0. SALIR`))
    if (op != 0 && op < 7) {
        op2 = parseInt(prompt(`Elije tamaño
        1. CHICO
        2. MEDIANO
        3. GRANDE`)) }
        else if (op != 0 && op > 7) {
            alert(`Elije una opción correcta`)
        }
    if (op2 == 1) {
        let x = producto6.precio - 50;
        cuotas(x);
        break;
    }
    else if (op2 == 2) {
        let x = producto6.precio;
        cuotas(x);
        break;
    }
    else if (op2 == 3) {
        let x = producto6.precio + 50;
        cuotas(x);
        break;
    }
}  