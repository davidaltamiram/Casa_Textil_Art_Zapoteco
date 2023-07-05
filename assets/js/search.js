//Recolectar en arreglo con split para comprar coda elemento con el elemento del arreglo del json
const searchWord = (localStorage.getItem('search').toLowerCase())
const allElements = "";

var posiciones = [];
//Conexion con api o json
var productosjson = fetch('./assets/js/productos.json')
  .then(response => response.json())
  .then(data => {
    var array = Object.values(data);
    return array;
  })
  .catch(error => {
    console.log("Error al obtener el archivo JSON", error);
  });
//fin de conexion




/*Inicio de elementos y evento de bton filtro en contenedor de productos*/
var bton = document.getElementById("bton-filtro");
var filtro = document.querySelector("#filtro");

bton.addEventListener("click", (e) => {
  e.preventDefault();
  if (filtro.style.display === "block") {
    filtro.style.display = "none";
  } else {
    filtro.style.display = "block";
  }
});

/*Fin de elementos de bton filtro en contenedor de productos*/



//Inicia lo referente a pintar el catalogo de prodcutos del html

const divProductos = document.querySelector("#contenedor");
const cojinesfiltro = document.getElementById("cojines");
const colchasfiltro = document.getElementById("colchas");
const mantelesfiltro = document.getElementById("manteles");
const tapetesfiltro = document.getElementById("tapetes");
const todos = document.getElementById("allElements");

//Funcion para buscar elementos y filtrar en base al elemento buscado y almacenado en localstorage desde orea pagina o la misma
async function collectFilteredItems(elementSearch) {
  var searchArray = [];
  var found = [];

  const arrayProductos = await productosjson;

  //Match total
  arrayProductos.forEach((elemento) => {
    const lowerCaseProducto = elemento.producto.toLowerCase();

    if (lowerCaseProducto.includes(elementSearch)) {
      searchArray.push(elemento);
      found.push(elemento);
    };

  });

  //Match Parcial
  searchElement = elementSearch.split(" ");
  searchElement.forEach(searchElement => {
    //Poner minuscula para los elementos del json a buscar
    const searchWord = searchElement;

    arrayProductos.forEach(item => {
      const lowerCaseProducto = item.producto.toLowerCase();
      const lowerCaseCategoria = item.categoria.toLowerCase();
      const lowerCaseColor = item.color.toLowerCase();
      const lowerCaseMaterial = item.material.toLowerCase();

      if ((lowerCaseProducto.includes(searchWord) ||
        lowerCaseCategoria.includes(searchWord) ||
        lowerCaseColor.includes(searchWord) ||
        lowerCaseMaterial.includes(searchWord)) &&
        !productoEncontrado(found, item)) {

        searchArray.push(item);
        found.push(item);
      }
    },
    )
  });

  return searchArray;
};

//Funcion para buscar si X elemento ya se almaceno durante el filtrado, de ser asi excluirlo.
function productoEncontrado(elementosAlmacenados, buscar) {
  return elementosAlmacenados.some(search => { return search.id === buscar.id })
};

function addProducto(filtro, elementoBusqueda) {
  const searchArray = collectFilteredItems(elementoBusqueda);

  searchArray.then(array => {
    var objetosImpresos = [];

    array.forEach((objeto, indice) => {

      if (filtro === 'cojinesfiltro' && objeto.categoria === 'cojines') {
        // Filtrar caso 1
      } else if (filtro === 'colchasfiltro' && objeto.categoria === 'colchas') {
        // Filtrar caso 2
      } else if (filtro === 'mantelesfiltro' && objeto.categoria === 'mantel') {
        // Filtrar caso 3
      } else if (filtro === 'tapetesfiltro' && objeto.categoria === 'tapetes') {
        // Filtrar caso 4
      } else if (filtro === null) {
        // Sin filtro, mostrar todos los objetos
      } else {
        return; // Salir del bucle si no se cumple ningún filtro
      }

      posiciones.push(indice);

      var productCard = document.createElement("div");
      productCard.classList = "col-sm-6 col-md-4 col-lg-4 align-items-center";

      productCard.innerHTML = `
            <button id="imageButton" data-bs-toggle="modal" data-bs-target="#exampleModal${indice}">
              <div class="card" id="card-gallery" >
                <img class="card-img-top" class="img-fluid mx-auto d-block" src="${objeto.img}" alt="Producto">
                <div class="card-body">
                  <p class="card-text">$${objeto.precio} MXN</p>
                </div>
              </div>
            </button>  `;
      divProductos.appendChild(productCard);

      // Verificar si el objeto ya se ha impreso previamente
      if (!objetosImpresos.includes(indice)) {
        var modal = document.createElement("div");
        modal.innerHTML = `
    <div class="modal fade" id="exampleModal${indice}" tabindex="-1" aria-labelledby="exampleModalLabel${indice}" aria-hidden="true">
      <div class="modal-dialog">
          <div class="modal-content">

                <div class="modal-header">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>

                <div class="modal-body">
                    <div class="row">

                        <div class="col-12 col-sm-12 col-md-12 col-lg-6 align-content-center">
                            <img class="img-fluid mx-auto d-block"  src="${objeto.img}" alt="Producto">
                        </div>

                            <div class="col-12 col-sm-12 col-md-12 col-lg-6 justify-content-start">
                                <div class="container" id="text_content_modal">
                                    <div id="title_product_catalog">
                                        ${objeto.producto}
                                    </div>
                                    <br>
                                    <div class="text_product_modal"
                                        id="price_product_catalog">
                                        $${objeto.precio} MXN
                                    </div>
                                    <div class="text_product_modal"
                                        id="color_product_catalog">
                                        ${objeto.color}
                                    </div>
                                    <div class="text_product_modal"
                                        id="size_product_catalog">
                                        ${objeto.tamaño}
                                    </div>
                                    <div class="text_product_modal"
                                        id="material_ product_catalog">
                                        ${objeto.material}
                                    </div>
                                    <div class="text_product_modal"
                                        id="composition_ product_catalog">
                                        ${objeto.composicion}
                                    </div>
                                    <br>

                                    <div class="container-fluid " id="button_content_modal">
                                    <button id="addCart"> Añadir al carrito</button>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
           
          </div>
      </div>
    </div>
          `;

        productCard.appendChild(modal);
        objetosImpresos.push(indice); // Marcar el objeto como impreso

      }
    });

  });
}

document.addEventListener("DOMContentLoaded", () => {
  addProducto(null, searchWord);
});

cojinesfiltro.addEventListener('click', function () {
  divProductos.innerHTML = ""; // Limpiar el contenido previo en el contenedor
  addProducto('cojinesfiltro', searchWord); // Llamar a addProductos() con el filtro 1
});

colchasfiltro.addEventListener('click', function () {
  divProductos.innerHTML = "";
  addProducto('colchasfiltro', searchWord);
});

mantelesfiltro.addEventListener('click', function () {
  divProductos.innerHTML = "";
  addProducto('mantelesfiltro', searchWord);
});

tapetesfiltro.addEventListener('click', function () {
  divProductos.innerHTML = "";
  addProducto('tapetesfiltro', searchWord);
});

todos.addEventListener('click', function () {
  localStorage.setItem('search', "");
  window.location.href = "./productos.html";
});


//Termina lo referente a pintar el catalogo de prodcutos del html
//Inicia catalogo de los productos más vendidos
const catalogoMasVendidos = [{
  id: "prod-coj-01",
  producto: "Funda para cojin",
  categoria: "cojines",
  precio: 250,
  color: "Azul",
  tamaño: "50x50 cm",
  material: "Algodon",
  composicion: "100% natural",
  consecutivo: 1,
  img: "./assets/img/productos/prod-coj-01.jpg",
},
{
  id: "prod-coj-02",
  producto: "Funda para cojin",
  categoria: "cojines",
  precio: 300,
  color: "rosa",
  tamaño: "50x50 cm",
  material: "Algodon orgánico",
  composicion: "100% natural",
  consecutivo: 2,
  img: "./assets/img/productos/prod-coj-02.jpg",
},
{
  id: "prod-coj-03",
  producto: "Funda para cojin",
  categoria: "cojines",
  precio: 350,
  color: "Gris",
  tamaño: "50x50 cm",
  material: "Algodon",
  composicion: "100% natural",
  consecutivo: 1,
  img: "./assets/img/productos/prod-coj-03.jpg",
},
{
  id: "prod-coj-05",
  producto: "Funda para cojin",
  categoria: "cojines",
  precio: 250,
  color: "Blanco",
  tamaño: "50x50 cm",
  material: "Algodon",
  composicion: "100% natural",
  consecutivo: 1,
  img: "./assets/img/productos/prod-coj-05.jpg",
},
{
  id: "prod-coj-06",
  producto: "Funda para cojin",
  categoria: "cojines",
  precio: 250,
  color: "Negro",
  tamaño: "50x50 cm",
  material: "Algodon",
  composicion: "100% natural",
  consecutivo: 1,
  img: "./assets/img/productos/prod-coj-06.jpg",
},
{
  id: "prod-coj-08",
  producto: "Funda para cojin",
  categoria: "cojines",
  precio: 450,
  color: "Gris",
  tamaño: "50x50 cm",
  material: "Algodon orgánico",
  composicion: "100% natural",
  consecutivo: 1,
  img: "./assets/img/productos/prod-coj-08.jpg",
}];

//Inicia lo referente a pintar el carousel del html

const divCarousel = document.getElementById("productosCarousel");

function addProductoCarousel() {

  catalogoMasVendidos.forEach(function (objeto) {

    var productCardCarousel = document.createElement("div");
    productCardCarousel.classList = "item";

    productCardCarousel.innerHTML = `
        <div class="card" id="">
          <img src="${objeto.img}" alt="Tapete geométrico naranja 1.20 2" class="card-img-top">
        </div>
`;
    console.log(productCardCarousel);
    divCarousel.appendChild(productCardCarousel);
  });

}



addProductoCarousel();

//Finaliza lo referente a pintar el carousel del html

//Inicia jQuery carousel

$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  autoplay: true,
  autoplayTimeout: 1500,
  autoplayHoverPause: true,

  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 3
    },
    1000: {
      items: 3
    }
  }
});

//Agregar funcionalidad de busqueda del nav-bar

//Event listener para botones
mainButton.addEventListener("click", () => {
  localStorage.setItem('search', "");
  divProductos.innerHTML = "";
  addProducto(null, mainInput.value.toLowerCase());
});

floatButton.addEventListener("click", () => {
  localStorage.setItem('search', "");
  divProductos.innerHTML = "";
  addProducto(null, floatInput.value.toLowerCase());
  content.classList.add("d-none");
});

//Event listener para los forms
mainForm.addEventListener("submit", (e) => {
  e.preventDefault();
  localStorage.setItem('search', "");
  divProductos.innerHTML = "";
  addProducto(null, mainInput.value.toLowerCase());
});

floatForm.addEventListener("submit", (e) => {
  e.preventDefault();
  localStorage.setItem('search', "");
  divProductos.innerHTML = "";
  addProducto(null, floatInput.value.toLowerCase());
  content.classList.add("d-none");
});