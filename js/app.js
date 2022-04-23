
    /*  BIENVENIDA E INIT  */
const init = () => {
    const bienvenida = document.querySelector("#bienvenidaText");
    const bienvenidaInput = document.querySelector(`.inputNombre`);
    bienvenidaInput.addEventListener("change", ()=> {
        localStorage.setItem("NOMBRE", bienvenidaInput.value);
        bienvenida.innerText = `Hola ${bienvenidaInput.value}, bienvenido a Saky.`;})
    let nombreGuardado = localStorage.getItem("NOMBRE")
    JSON.stringify(nombreGuardado);
/*    if (nombreGuardado == null) {
    }else {
        bienvenida.innerText = `Hola ${nombreGuardado}, bienvenido a Saky.`;
    } */
    nombreGuardado == null ? nombreGuardado = null : bienvenida.innerText = `Hola ${nombreGuardado}, bienvenido a Saky.`; /* OP TERNARIO */
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

        /* ARRAY DE PRODUCTOS*/
const postres = [producto0, producto1, producto2, producto3, producto4, producto5];
console.log(postres);

        /* AGREGAR PRECIOS DE POSTRES[] */

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

    /* CARRITO*/
const carrito = [];
const addToCart = (producto) => carrito.push(producto);

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

    /*ABRIR CARRITO (NO TERMINADO) */

let verCarrito = document.querySelector(`#verCarrito`);
let listaCarrito = document.querySelector(`#listaCarrito`);
const imagenCarrito = document.querySelector(`.nav-item-img`);
const buttonCarrito = document.querySelector("#pagar");
imagenCarrito.addEventListener('click', () => {
    verCarrito.setAttribute(`style`, `display: grid;`);
    verLista();
});

    /*CERRAR CARRITO */
const cerrarCarrito = document.querySelector(`#cerrarCarrito`);
cerrarCarrito.addEventListener('click', () => {
    verCarrito.setAttribute(`style`, `display: none;`);
    listaCarrito.innerHTML= `<br>`;
});

    /*BOTÓN PARA PAGAR. */
buttonCarrito.addEventListener('click', () => {
    const precios = carrito.map((producto) => producto.precio);
    const total = precios.reduce((acc, item) => acc += item, 0);
    alert(`El total a pagar es: $${total}`);
    verCarrito.setAttribute(`style`, `display: none;`);
    listaCarrito.innerHTML= `<br>`;
    carrito.splice(0,1000); 
});

    /*CREAR LISTA DE CARRITO */
const verLista = () => {
    const lista = document.createElement("ul");
    listaCarrito.appendChild(lista);
    let x = 0;
    carrito.forEach(producto => {
        let li = document.createElement("li");
        li.innerHTML = `Producto: ${producto.nombre}, Precio: ${producto.precio}.`;
        lista.appendChild(li);
        x++;
    })
}

    /*BORRAR ITEM DE TIENDA */

const buttonBorrar = document.querySelector('#borrar');
buttonBorrar.addEventListener('click', ()=> {
    carrito.splice(0, 1000);
    verCarrito.setAttribute(`style`, `display: none;`);
    listaCarrito.innerHTML= `<br>`;
})

    /*GUARDAR CARRITO */