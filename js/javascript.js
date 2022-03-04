// VARIABLES GLOBALES 
const btnMates = document.querySelector("#botonMates")
const btnBolsos = document.querySelector("#botonBolsos")
const btnEstuches = document.querySelector("#botonEstuches")
const btnLatas = document.querySelector("#botonLatas")
const ProductsContainer = document.querySelector("#contenedorProductos")
const allBtn = document.querySelectorAll(".boton")


// EVENTOS--------------------------------------------------------------------------------------
allBtn.forEach(boton => {
    boton.addEventListener(`click`, ()=>{
        switch(boton.id){
            case `botonMates`:
                fetch(`mates.json`)
                    .then(Response => Response.json())
                    .then(data => showProducts(data))
            break;
            case `botonBolsos`:
                fetch(`bolsos.json`)
                    .then(Response => Response.json())
                    .then(data => showProducts(data))
            break;
            case `botonEstuches`:
                fetch(`estuches.json`)
                    .then(Response => Response.json())
                    .then(data => showProducts(data))
            break;
            case `botonLatas`:
                fetch(`latas.json`)
                    .then(Response => Response.json())
                    .then(data => showProducts(data))
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
        const {img, precio, tipo, clase} = producto
        const div = document.createElement(`div`)
        div.className = `col-md-3`
        div.innerHTML = `
                <div class="card" style="width: 18rem;">
                    <img src="${img}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${tipo}</h5>
                        <p class="card-text">${clase}</p>
                        <p class="card-text">${precio}</p>
                        <a href="#" class="btn btn-primary">Agregar al carrito</a>
                    </div>
                </div>
        `
        ProductsContainer.appendChild(div)
    })
} 