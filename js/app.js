
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

const producto0 =  new Tienda(00, "TARTA CHOCOLATE", "PORCIÓN", 330);
let productos0 = document.querySelector(`.button-postres`);
productos0 = producto0;
const producto1 =  new Tienda(01, "TIRAMISÚ", "PORCIÓN", 400);
const producto2 =  new Tienda(02, "MUFFIN", "PORCIÓN", 300);
const producto3 =  new Tienda(03, "CHOCOTORTA", "PORCIÓN", 370);
const producto4 =  new Tienda(04, "BROWNIE", "PORCIÓN", 330);
const producto5 =  new Tienda(05, "LEMON PIE", "PORCIÓN", 400);
const producto6 =  new Tienda(05, "TÉ NEGRO", "PORCIÓN", 150);
const producto7 =  new Tienda(05, "SUBMARINO", "PORCIÓN", 250);
const producto8 =  new Tienda(05, "CAFÉ NEGRO", "PORCIÓN", 200);
const producto9 =  new Tienda(05, "TÉ DE MANZANILLA", "PORCIÓN", 200);
const producto10 =  new Tienda(05, "TÉ DE TILO", "PORCIÓN", 200);
const producto11 =  new Tienda(05, "CAPUCCINO", "PORCIÓN", 250);


        /* ARRAY DE PRODUCTOS*/
const postres = [producto0, producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8, producto9, producto10, producto11];
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
let carrito = [];
const addToCart = (producto) => carrito.push(producto);
let cantidadCarrito;
cantidadCarrito = document.querySelector('#cantidadCarrito');


const armarCarrito = (x) => {
    let cartItem = document.createElement('div');
    listaCarrito.appendChild(cartItem);
    cartItem.className = 'cartItem';
    let cartImg = document.createElement('img');
    cartItem.appendChild(cartImg);
    cartImg.setAttribute('src', `../assets/postre${x}.jpg`);
    let itemDescription = document.createElement('div');
    itemDescription.className = 'itemDescription';
    cartItem.appendChild(itemDescription);
    let cartName = document.createElement('h4');
    cartName.innerText = `${postres[x].nombre}`;
    let cartPrice = document.createElement('h4');
    cartPrice.innerText = `$${postres[x].precio}`;
    // let cartRemove = document.createElement('i');
    // cartRemove.className = "fas fa-trash-alt";
    itemDescription.appendChild(cartName);
    itemDescription.appendChild(cartPrice);
    itemDescription.appendChild(cartRemove);

}

    /*AGREGAR POSTRES AL CARRITO */

const agregarPostre = (x) =>{
    let buttonPostre = document.querySelector(`.button-postres${x}`);
    buttonPostre.addEventListener("click", ()=> {
    addToCart(postres[x]);
    cantidadCarrito.innerHTML = carrito.length;
    console.log(carrito);
    localStorage.setItem('CARRITO', carrito);
    armarCarrito(x);
    Toastify({
        text: "🛒 Producto agregado",
        duration: 1000,
        className: "toastify",
        style: {background: "black",
        borderRadius: "2rem"},
        gravity: "bottom",
    }).showToast();
    const toastify = document.querySelector('.toastify');
    toastify.addEventListener('click', () => {
        verCarrito.setAttribute(`style`, `display: grid;`);
    })
})
}

for (let x = 0; x < postres.length; x++) {
    agregarPostre(x);
}

    /* ABRIR CARRITO */

let verCarrito = document.querySelector(`#verCarrito`);
let listaCarrito = document.querySelector(`#listaCarrito`);
const imagenCarrito = document.querySelector(`.nav-item-img`);
const buttonCarrito = document.querySelector("#pagar");
imagenCarrito.addEventListener('click', () => {
    verCarrito.setAttribute(`style`, `display: grid;`);
});

    /*CERRAR CARRITO */
const cerrarCarrito = document.querySelector(`#cerrarCarrito`);
cerrarCarrito.addEventListener('click', () => {
    verCarrito.setAttribute(`style`, `display: none;`);
});

    /*BOTÓN PARA PAGAR. */
buttonCarrito.addEventListener('click', () => {
    const precios = carrito.map((producto) => producto.precio);
    const total = precios.reduce((acc, item) => acc += item, 0);
    if (total != 0) {
        swal.fire({
            title: `El total a pagar es: $${total}`,
            icon: 'success',
            confirmButtonText: "Aceptar",
            width: '40rem',
            padding: '3rem',
            color: 'white',
            background: 'rgba(0, 0, 0, 0.900)',
            backdrop: `rgba(0,0,123,0.4)`
          })
    } else {
        swal.fire({
            title: 'CARRITO VACIO',
            text: `Agrega productos al carrito`,
            icon: 'error',
            confirmButtonText: "Volver",
            width: '40rem',
            padding: '3rem',
            color: 'white',
            background: 'rgba(0, 0, 0, 0.900)',
            backdrop: `rgba(0,0,123,0.4)`
          })
    }
    verCarrito.setAttribute(`style`, `display: none;`);
    listaCarrito.innerHTML= `<br>`;
    carrito.splice(0,1000);
    cantidadCarrito.innerHTML = carrito.length;
});



    /*BORRAR ITEMS DE TIENDA */

const buttonBorrar = document.querySelector('#borrar');
buttonBorrar.addEventListener('click', ()=> {
    verCarrito.setAttribute(`style`, `display: none;`);
    if (carrito.length > 0) {
        swal.fire({
            title: `Carrito eliminado`,
            icon: 'success',
            confirmButtonText: "Aceptar",
            width: '40rem',
            padding: '3rem',
            color: 'white',
            background: 'rgba(0, 0, 0, 0.900)',
            backdrop: `rgba(0,0,123,0.4)`
          })
    } else if (carrito.length == 0) {
        swal.fire({
            title: `Carrito vacio`,
            text: `Agrega productos para continuar`,
            icon: 'error',
            confirmButtonText: "Aceptar",
            width: '40rem',
            padding: '3rem',
            color: 'white',
            background: 'rgba(0, 0, 0, 0.900)',
            backdrop: `rgba(0,0,123,0.4)`
          })
    }
    carrito.splice(0, 1000);
    listaCarrito.innerHTML= `<br>`;
    cantidadCarrito.innerHTML = carrito.length;
})


const borrarItem = (i) => {
    carrito.splice(i,1);
    let borrar = document.querySelector(`.cartItem;nth-of-type(${i})`);
    borrar.setAttribute('style', `display: none;`);
}

// for (let x = 0; x < carrito.length; x++) {
//     let cartRemove = document.querySelector(`.fas:nth-of-type(${x})`);
//     cartRemove.addEventListener('click', () => {
//         carrito.splice(x,1);
//     });
// }



let cartRemove2 = document.querySelector(`.fas:nth-of-type(${2})`);
    cartRemove2.addEventListener('click', () => {
        carrito.splice(2,1);
    });


    /*GUARDAR CARRITO */
localStorage.setItem('CARRITO', carrito);

