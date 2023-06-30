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

function addProducto(filtro) {

    productosjson.then(array => {
        var objetosImpresos = []; 

        array.forEach(function (objeto, indice) {

            if (filtro === 'cojinesfiltro' && objeto.categoria === 'cojines') {
                // Filtrar caso 1
              } else if (filtro === 'colchasfiltro' && objeto.categoria === 'colchas') {
                // Filtrar caso 2
              } else if (filtro === 'filtro3' && objeto.categoria === 'Categoria3') {
                // Filtrar caso 3
              } else if (filtro === 'filtro4' && objeto.categoria === 'Categoria4') {
                // Filtrar caso 4
              } else if (!filtro) {
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
document.addEventListener("DOMContentLoaded", function() {
    addProducto();
  });

  cojinesfiltro.addEventListener('click', function() {
    divProductos.innerHTML = ""; // Limpiar el contenido previo en el contenedor
    addProducto('cojinesfiltro'); // Llamar a addProductos() con el filtro 1
  });

  colchasfiltro.addEventListener('click', function() {
    divProductos.innerHTML = ""; // Limpiar el contenido previo en el contenedor
    addProducto('colchasfiltro'); // Llamar a addProductos() con el filtro 1
  });
//Termina lo referente a pintar el catalogo de prodcutos del html



//Inicia lo referente a pintar el carousel del html

const divCarousel = document.querySelector("#productosCarousel");

function addProductoCarousel() {
//conexion a la promesa que retorna las espuestas del json
    productosjson.then(array => {
//filtro para seleccionar olo 5 productos del arreglo de objetos
        const tope = 5;
        const productostop = array.slice(0, tope);
//fin del filtro

//se usa productostop porque es la variable que trae el arreglo y contiene un limite de 5 productos
    productostop.forEach(function (objeto) {

        var productCardCarousel = document.createElement("div");
        productCardCarousel.classList = "item";

        productCardCarousel.innerHTML = `
        <div class="card" id="imageButton">
            <img src="${objeto.img}"
            alt="Producto" class="card-img-top">
        </div>
`;
        divCarousel.appendChild(productCardCarousel);
    });
    });
//fin de la conexion con la promesa
}


addProductoCarousel();

//Finaliza lo referente a pintar el carousel del html

//Inicia jQuery carousel

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplay:true,
    autoplayTimeout:1500,
    autoplayHoverPause:true,
    
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

//Finaliza jQuery carousel


//Almaceno el lugar de destino de mi tarjeta en una constante
// const product_image_modal = document.getElementById("product_image_modal");
// const imageProductButton = document.getElementById("imageButton");


// function imageButtons() {


//     //Guardo los valores de mis inputs



//     //1Creo el elemento

//     product_image_modal.innerHTML = `

//     <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
//         aria-hidden="true">
//         <div class="modal-dialog modal-lg ">
//             <div class="modal-content">
//                 <div class="modal-body">
//                     <div class="container">
//                         <div class="row justify-content-end">
//                             <button id="button_close_modal" type="button"
//                             data-bs-dismiss="modal" aria-label="Close">
//                             <i class="fi fi-sr-cross" id="cross-icon"></i>
//                             </button>
//                         </div>


                        
//                         <div class="row">
//                             <div class="col-lg-7">
//                                 <img class="img-fluid"  src="./assets/img/productos/prod-coj-01.jpg"
//                                     alt="Producto">
//                             </div>

//                             <div class="col-lg-5" class="container ">

//                                 <br>

                                
//                                     <div class="container-fluid " id="text_content_modal">

//                                         <div id="title_product_catalog">
//                                             Funda para cojín
//                                         </div>
//                                         <br>
//                                         <div class="text_product_modal"
//                                             id="price_product_catalog">
//                                             $250
//                                         </div>
//                                         <div class="text_product_modal"
//                                             id="color_product_catalog">
//                                             Color: Azul
//                                         </div>
//                                         <div class="text_product_modal"
//                                             id="size_product_catalog">
//                                             Tamaño: 50 x 50 cm
//                                         </div>
//                                         <div class="text_product_modal"
//                                             id="material_ product_catalog">
//                                             Material: Algodón
//                                         </div>
//                                         <div class="text_product_modal"
//                                             id="composition_ product_catalog">
//                                             Composición: 100% natural
//                                         </div>
//                                         <br>

//                                         <div class="container-fluid " id="button_content_modal">
                                        
//                                         <button id="addCart"> Añadir al carrito</button>
                                
                               
                                    
//                                     </div>
//                                 </div>
                               
                                   
                                   
                              
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
// </div>`;


// }

//Creamos el botón de escucha
//imageProductButton.addEventListener("click", imageButtons);

