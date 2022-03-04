// VARIABLES CONTENEDORAS EN HTML
const btnMates = document.querySelector("#botonMates")
const btnBolsos = document.querySelector("#botonBolsos")
const btnEstuches = document.querySelector("#botonEstuches")
const btnLatas = document.querySelector("#botonLatas")
const ProductsContainer = document.querySelector("#contenedorProductos")
const allBtn = document.querySelectorAll(".boton")


// VARIABLES NORMALES
const carritoDeProductos = [];

// EVENTOS--------------------------------------------------------------------------------------
allBtn.forEach(boton => {
    boton.addEventListener(`click`, ()=>{
        switch(boton.id){
            case `botonMates`:
                fetch(`js/mates.json`)
                    .then(Response => Response.json())
                    .then(data => showProducts(data))
                    .catch(error => console.log(error))
            break;
            case `botonBolsos`:
                fetch(`bolsos.json`)
                    .then(Response => Response.json())
                    .then(data => showProducts(data))
                    .catch(error => console.log(error))
            break;
            case `botonEstuches`:
                fetch(`estuches.json`)
                    .then(Response => Response.json())
                    .then(data => showProducts(data))
                    .catch(error => console.log(error))
            break;
            case `botonLatas`:
                fetch(`latas.json`)
                    .then(Response => Response.json())
                    .then(data => showProducts(data))
                    .catch(error => console.log(error))
            break;
            default:
                // Aquí va una alerta de SweetAlert
            break
        }
    })
})

// FUNCIONES---------------------------------------------------------------------------------
function showProducts (array){
    ProductsContainer.innerHTML = ``
    array.forEach(producto => {
        const {img, precio, tipo, clase, id} = producto
        const div = document.createElement(`div`)
        div.className = `col-md-3`
        div.innerHTML += `
                <div class="card" style="width: 18rem;">
                    <img src="${img}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${tipo}</h5>
                        <p class="card-text">${clase}</p>
                        <p class="card-text">${precio}</p>
                        <a href="#" class="btn btn-primary" id="agregarAlCarrito${id}">Agregar al carrito</a>
                    </div>
                </div>
        `
        ProductsContainer.appendChild(div)

        const btnAgregarAlCarrito = document.querySelector(`#agregarAlCarrito${id}`)
        btnAgregarAlCarrito.addEventListener(`click`, ()=>{
            agregarAlCarrito(producto.id)
        })
    })
}  


function agregarAlCarrito(id){
    const productoRepetido = carritoDeProductos.find(producto => producto.id == id)
    if(productoRepetido){

    }
}