//DECALRÉ VARIABLES NECESARIAS
let carrito = [];
let botonRegistro = document.getElementById("button-register");
let carro = document.getElementById("carrito");
let divNft = document.getElementById("divNfts");
let inputBuscador = inputTexto.value;
let selectNft = document.getElementById('select-nft')
let botonApe = document.getElementById('ape-collection')
let botonPunks = document.getElementById('punks-collection')
let botnoAlliens = document.getElementById('allien-collection')
let botonSelect = document.getElementById('select-button')
let botonVaciar = document.getElementById("vaciar-carrito")
let divTotal = document.getElementById('total-carrito')
divTotal.textContent = `Total: 0`

//FUNCIÓN PARA MOSTRAR Y CERRAR EL MODAL DE REGISTRO
const mostrarModal = () => {
    let modal_container = document.getElementById("modal_container");
    botonRegistro.addEventListener("click", () => {
        modal_container.classList.add("show");
    });
    const cerrar = document.getElementById("close");
    cerrar.addEventListener("click", () => {
        modal_container.classList.remove("show");
    });
};


//FUNCIÓN PARA VALIDAR EL FORMULARIO
const validarForm = () => {
    let username = document.getElementById("user").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    if (username == "" || password == "" || email == "") {
        Swal.fire({
            icon: 'error',
            title: 'Algo salió mal...',
            text: 'Debe completar todos los campos',
        })
    } else {
        let usuario = {
            username: username,
            password: password,
            email: email,
        };

        let usuarioJSON = JSON.stringify(usuario);
        localStorage.setItem("Usuario", usuarioJSON);

        let usuarioParseado = JSON.parse(localStorage.getItem("Usuario"));
        botonRegistro.remove();
        let divRegistro = document.getElementById("register");
        divRegistro.innerHTML += `<p class = "login" > Hola ${usuarioParseado.username} !</p>`;

        console.log(usuarioParseado);
    }
}


//FUNCION PARA REGISTRAR, GUARDAR Y MOSTRAR EL USUARIO
const registro = () => {
    let formulario = document.getElementById("idForm");
    formulario.addEventListener("submit", (event) => {
        event.preventDefault();
        validarForm();
        formulario.reset();
    });
};

//FUNCIÓN PARA UTILIZAR EL BUSCADOR
const buscador = () => {
    let inputTexto = document.getElementById("inputTexto");
    inputTexto.addEventListener("change", () => {
        let buscador = inputTexto.value;
        fetch('json/nft.json')
            .then(response => response.json())
            .then(nft => {
                let nftFiltrados = nft.filter((nft) =>
                    nft.coleccion.includes(buscador.toUpperCase())
                );
                divNft.innerHTML = "";
                nftFiltrados.forEach((nft) => {
                    const divNftCard = document.createElement("div");
                    divNftCard.classList.add("card");
                    divNftCard.style.width = "18rem";

                    let {
                        id,
                        nombre,
                        precio,
                        divisa,
                        img,
                        coleccion,
                        descripcion
                    } = nft

                    const divNftContent = `
            <div class="card-body">
            <h5 class="card-title">${nombre}</h5>
            <img src= "${img}">
            <p class="card-text">${coleccion}</p>
            <p class="card-text">${descripcion}</p>
            <p class="card-text">${precio} ${divisa}</p>
            <button id="boton${id}" class="btn btn-primary agregar-carrito"> Agregar al carrito</button>
            </div>
            `;

                    divNftCard.innerHTML = divNftContent;
                    divNftCard
                        .querySelector(".agregar-carrito")
                        .addEventListener("click", () => agregarCarrito(nft));
                    divNft.append(divNftCard);
                });
            })
    });
};

const pintarConBoton = (boton) => {
    boton.addEventListener('click', () => {
        fetch('json/nft.json')
            .then(response => response.json())
            .then(nft => {
                let nftFiltrados = nft.filter((nft) =>
                    nft.coleccion.includes(boton.value)
                );
                divNft.innerHTML = "";
                nftFiltrados.forEach((nft) => {
                    const divNftCard = document.createElement("div");
                    divNftCard.classList.add("card");
                    divNftCard.style.width = "18rem";

                    let {
                        id,
                        nombre,
                        precio,
                        divisa,
                        img,
                        coleccion,
                        descripcion
                    } = nft

                    const divNftContent = `
            <div class="card-body">
            <h5 class="card-title">${nombre}</h5>
            <img src= "${img}">
            <p class="card-text">${coleccion}</p>
            <p class="card-text">${descripcion}</p>
            <p class="card-text">${precio} ${divisa}</p>
            <button id="boton${id}" class="btn btn-primary agregar-carrito"> Agregar al carrito</button>
            </div>
            `;

                    divNftCard.innerHTML = divNftContent;
                    divNftCard
                        .querySelector(".agregar-carrito")
                        .addEventListener("click", () => agregarCarrito(nft));
                    divNft.append(divNftCard);
                });
            })
    })
}
//FUNCION PARA MOSTAR CON LOS BOTONES
const mostrarConBoton = () => {
    pintarConBoton(botonApe)
    pintarConBoton(botonPunks)
    pintarConBoton(botnoAlliens)
}

//FUNCION AGREGAR AL CARRITO
const agregarCarrito = (nft) => {
    const divNftCard = document.createElement("div");
    if (carrito.includes(nft)) {
        Swal.fire({
            title: 'Ya esta en tu carrito!',
            text: 'Continuar con tu compra',
            icon: 'warning',
            confirmButtonText: 'Aceptar'
        })
    } else {
        Toastify({
            text: "Agregado correctamente",
            duration: 3000,
            newWindow: true,
            close: true,
            gravity: "top",
            position: "right",
            stopOnFocus: true,
            className: "added",
            style: {
                background: "linear-gradient(to right, #dcff03, #ede700, #f8ce00, #feb500, #ff9d0a)",
            },
            onClick: function () {}
        }).showToast();

        divNftCard.setAttribute("id", "nft-card");
        divNftCard.classList.add("card");
        divNftCard.style.width = "18rem";

        let {
            id,
            nombre,
            precio,
            divisa
        } = nft

        const divNftCardContent = `
            <div class="card-body">
                <h5 class="card-title">${nombre}</h5>
                <p class="card-text"><i class="fa-brands fa-ethereum"></i> ${precio} ${divisa}</p>
                <a id="eliminar-${id}" class="btn-eliminar"><i class="fa-solid fa-trash-can"></i></a>
            </div>`;

        divNftCard.innerHTML = divNftCardContent;
        divNftCard
            .querySelector(".btn-eliminar")
            .addEventListener("click", (e) => eliminarNftDelCarrito(nft, e));
        carro.append(divNftCard);
        carrito = [...carrito, nft]
    }

    //TOTAL CARRITO
    if (carrito.length > 0) {
        let totalCarrito = carrito.reduce(
            (acc, ite) => acc + ite.precio,
            0
        );
        divTotal.textContent = `Total: ${totalCarrito}`;
    }

    localStorage.setItem("NftsAgregados", JSON.stringify(carrito));

}

//FUNCION ELIMINAR DEL CARRITO
const eliminarNftDelCarrito = (nft, e) => {
    let nftCard = e.target.closest("#nft-card");
    for (let c = 0; c < carrito.length; c++) {
        (carrito[c] === nft) &&
        carrito.splice(c, 1);
        localStorage.setItem("NftsAgregados", JSON.stringify(carrito))
        nftCard.remove();
        let totalCarrito = carrito.reduce(
            (acc, ite) => acc + ite.precio,
            0
        );

        divTotal.textContent = `Total: ${totalCarrito}`;

    }
    console.log(carrito);
    console.log(carrito.length);
};

//FUNCION VACIAR CARRITO
const vaciarCarrito = () => {
    botonVaciar.addEventListener('click', () => {
        carro.innerHTML = ""
        carrito.splice(0, carrito.length);
        divTotal.textContent = `Total: 0`;
        localStorage.setItem("NftsAgregados", "")
        console.log(carrito.length)
    })
}

//FUNCION CONFIRMAR COMPRA
const confirmarCompra = () => {
    let botonComprar = document.getElementById('confirmar-compra')
    botonComprar.addEventListener('click', (e) => {
        e.preventDefault();
        if (carrito.length == 0) {
            Swal.fire({
                title: 'No hay nada que comprar!',
                text: 'Vuelve a buscar',
                icon: 'warning',
                confirmButtonText: 'Aceptar'
            })
        } else {
            setTimeout(() => location.href = "../compra.html", 1000);
        }
    })
}


mostrarModal();
registro();
buscador();
mostrarConBoton();
vaciarCarrito();
confirmarCompra();