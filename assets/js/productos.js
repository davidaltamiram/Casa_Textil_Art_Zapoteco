//variable que almacena las posiciones y funge como indice
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



//se trae los datos del html

const divProductos = document.querySelector("#contenedor");
const cojinesfiltro = document.getElementById("cojines");
const colchasfiltro = document.getElementById("colchas");
const mantelesfiltro = document.getElementById("manteles");
const tapetesfiltro = document.getElementById("tapetes");

//funcion con parametro filtro
function addProducto(filtro,arregloProductos) {

    //promesa con funcion array 
    arregloProductos.then(array => {
        //variable de objetos ya impresos en pantalla
        var objetosImpresos = []; 

        //forEach con parametro objeto y indice, el parametro objeto funge como variable de los objetos al cual se puede acceder mediante objeto.value (key)

        //el parametro indice funge como indice sobre las posiciones de los objetos dentro del array
        array.forEach(function (objeto, indice) {
            //condicional de filtro donde pasa al parametro posiciones.push(indice) en donde empuja la condicional del filtro al parametro indice, donde retorna las posiciones de los obejetos aplicados por el filtro
            if (filtro === 'cojinesfiltro' && objeto.categoria === 'cojines') {
                // Filtrar caso 1
              } else if (filtro === 'colchasfiltro' && objeto.categoria === 'colchas') {
                // Filtrar caso 2
              } else if (filtro === 'mantelesfiltro' && objeto.categoria === 'manteles') {
                // Filtrar caso 3
              } else if (filtro === 'tapetesfiltro' && objeto.categoria === 'tapetes') {
                // Filtrar caso 4
              } else if (!filtro) {
                // Sin filtro, mostrar todos los objetos
              } else {
                return; // Salir del bucle si no se cumple ningún filtro
              }
        
              //envia los datos a indice
              posiciones.push(indice);

              //plantilla literaria de productos
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

            //plantilla literaria de modal agregada a la plantilla de productos
                // Verificar si el objeto ya se ha impreso previamente
        if (!objetosImpresos.includes(indice)) {
            var modal = document.createElement("div");
            modal.innerHTML = `
            <div class="modal fade" id="exampleModal${indice}" tabindex="-1" aria-labelledby="exampleModalLabel${indice}" aria-hidden="true">
                     <div class="modal-dialog modal-lg ">
                         <div class="modal-content">
                             <div class="modal-body">
                                 <div class="container">
                                     <div class="row justify-content-end">
                                         <button id="button_close_modal" type="button"
                                         data-bs-dismiss="modal" aria-label="Close">
                                         <i class="fi fi-sr-cross" id="cross-icon"></i>
                                         </button>
                                     </div>
            
            
                                    
                                     <div class="row">
                                         <div class="col-lg-7">
                                             <img class="img-fluid"  src="${objeto.img}"
                                                 alt="Producto">
                                         </div>
            
                                         <div class="col-lg-5" class="container ">
            
                                             <br>
            
                                            
                                                 <div class="container-fluid " id="text_content_modal">
            
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
                                                        Color: ${objeto.color}
                                                     </div>
                                                     <div class="text_product_modal"
                                                         id="size_product_catalog">
                                                         Tamaño: ${objeto.tamaño}
                                                     </div>
                                                     <div class="text_product_modal"
                                                         id="material_ product_catalog">
                                                         Material: ${objeto.material}
                                                     </div>
                                                     <div class="text_product_modal"
                                                         id="composition_ product_catalog">
                                                         Composición: ${objeto.composicion}
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
             </div>
          `;

          //se agrega el modal con id al boton del producto
          productCard.appendChild(modal);

          //empuja los objetos impresos al array
          objetosImpresos.push(indice); // Marcar el objeto como impreso

        }
        });
    
      });
}
//carga los producos al cargar o recargar la pagina al principio
document.addEventListener("DOMContentLoaded", function() {
    addProducto(null, productosjson);
  });

  //hace accionar el parametro filtro que acciona la condicional, pasando los datos de la posiciones a indice empujando como resultado los objetos filtrados por su tipo de categoria
  cojinesfiltro.addEventListener('click', function() {
    divProductos.innerHTML = ""; // Limpiar el contenido previo en el contenedor
    addProducto('cojinesfiltro', productosjson); // Llamar a addProductos() con el filtro 1
  });

  colchasfiltro.addEventListener('click', function() {
    divProductos.innerHTML = ""; // Limpiar el contenido previo en el contenedor
    addProducto('colchasfiltro', productosjson); // Llamar a addProductos() con el filtro 2
  });

  mantelesfiltro.addEventListener('click', function() {
    divProductos.innerHTML = ""; // Limpiar el contenido previo en el contenedor
    addProducto('mantelesfiltro', productosjson); // Llamar a addProductos() con el filtro 3
  });

  tapetesfiltro.addEventListener('click', function() {
    divProductos.innerHTML = ""; // Limpiar el contenido previo en el contenedor
    addProducto('tapetesfiltro', productosjson); // Llamar a addProductos() con el filtro 4
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


 //Inicia la logica para la funcionalidad del filttro
 const botonFiltrar = document.getElementById("filtrar-boton");
 const botonlimpiarFiltro = document.getElementById("limpiar-filtro");

 //Botones del modal
 const botonFiltrarModal = document.getElementById("filtrar-boton-modal");
 const botonlimpiarFiltroModal = document.getElementById("limpiar-filtro-modal");

//Aqui se colocan los elementos del chechbox lateral
const checkCojin = document.getElementById("cojin-lateral");
const checkColcha = document.getElementById("colcha-lateral");
const checkManteles = document.getElementById("mantel-lateral");
const checkTapetes = document.getElementById("tapetes-lateral");

const checkAlgodon = document.getElementById("algodon-lateral");
const checkLana = document.getElementById("lana-lateral");

const checkAzul = document.getElementById("azul-lateral");
const checkCafe = document.getElementById("cafe-lateral");
const checkGris = document.getElementById("gris-lateral");
const checkNaranja = document.getElementById("naranja-lateral");
const checkNegro = document.getElementById("negro-lateral");
const checkRojo = document.getElementById("rojo-lateral");
const checkRosa = document.getElementById("rosa-lateral");
const checkVerde = document.getElementById("verde-lateral");

//Aqui se colocan los elementos del chechbox del modal
const checkCojinModal = document.getElementById("cojin-modal");
const checkColchaModal = document.getElementById("colcha-modal");
const checkMantelesModal = document.getElementById("mantel-modal");
const checkTapetesModal = document.getElementById("tapetes-modal");

const checkAlgodonModal = document.getElementById("algodon-modal");
const checkLanaModal = document.getElementById("lana-modal");

const checkAzulModal = document.getElementById("azul-modal");
const checkCafeModal = document.getElementById("cafe-modal");
const checkGrisModal = document.getElementById("gris-modal");
const checkNaranjaModal = document.getElementById("naranja-modal");
const checkNegroModal = document.getElementById("negro-modal");
const checkRojoModal = document.getElementById("rojo-modal");
const checkRosaModal = document.getElementById("rosa-modal");
const checkVerdeModal = document.getElementById("verde-modal");

//Funcionalidad del boton borrar filtro y checkboxes
botonlimpiarFiltro.addEventListener("click", ()=>{
    divProductos.innerHTML = ""
    addProducto(null, productosjson);
    uncheckAll();
});

//Funcionalidad del boton borrar filtro y checkboxes Modal
botonlimpiarFiltroModal.addEventListener("click", (e)=>{
    e.preventDefault();
    divProductos.innerHTML = ""
    addProducto(null, productosjson);
    uncheckAll();
});

//Funcionalidad del boton filtrar
var arregloFiltros = [];

botonFiltrar.addEventListener("click",()=>{
    filtrosCheckbox();
    const arreglocheckbox = collectFilteredItems(arregloFiltros);
    if(arregloFiltros.length !== 0){
        divProductos.innerHTML = ""
        addProducto(null, arreglocheckbox);
        arregloFiltros = [];
    }
});

//Funcionalidad del boton filtrar Modal
botonFiltrarModal.addEventListener("click",(e)=>{
    filtrosCheckbox();
    const arreglocheckbox = collectFilteredItems(arregloFiltros);
    if(arregloFiltros.length !== 0){
        divProductos.innerHTML = ""
        addProducto(null, arreglocheckbox);
        arregloFiltros = [];
    }
});

//Funcion para recolectar los filtros del checkbox
function filtrosCheckbox(){

    if(checkCojin.checked || checkCojinModal.checked){
        arregloFiltros.push(checkCojin.value.toLowerCase())
    }
    if(checkColcha.checked || checkColchaModal.checked){
        arregloFiltros.push(checkColcha.value.toLowerCase())
    }
    if(checkManteles.checked || checkMantelesModal.checked){
        arregloFiltros.push(checkManteles.value.toLowerCase())
    }
    if(checkTapetes.checked || checkTapetesModal.checked){
        arregloFiltros.push(checkTapetes.value.toLowerCase())
    }

    if(checkAlgodon.checked || checkAlgodonModal.checked){
        arregloFiltros.push(checkAlgodon.value.toLowerCase())
    }
    if(checkLana.checked || checkLanaModal.checked){
        arregloFiltros.push(checkLana.value.toLowerCase())
    }

    if(checkAzul.checked || checkAzulModal.checked){
        arregloFiltros.push(checkAzul.value.toLowerCase())
    }
    if(checkCafe.checked || checkCafeModal.checked){
        arregloFiltros.push(checkCafe.value.toLowerCase())
    }
    if(checkGris.checked || checkGrisModal.checked){
        arregloFiltros.push(checkGris.value.toLowerCase())
    }
    if(checkNaranja.checked  || checkNaranjaModal.checked){
        arregloFiltros.push(checkNaranja.value.toLowerCase())
    }
    if(checkNegro.checked || checkNegroModal.checked){
        arregloFiltros.push(checkNegro.value.toLowerCase())
    }
    if(checkRojo.checked || checkRojoModal.checked){
        arregloFiltros.push(checkRojo.value.toLowerCase())
    }
    if(checkRosa.checked || checkRosaModal.checked){
        arregloFiltros.push(checkRosa.value.toLowerCase())
    }
    if(checkVerde.checked || checkVerdeModal.checked){
        arregloFiltros.push(checkVerde.value.toLowerCase())
    }

};

//Funcion para desmarcar checkboxes

function uncheckAll(){
    checkCojin.checked = false;
    checkCojinModal.checked = false;
    checkColcha.checked = false;
    checkColchaModal.checked = false;
    checkManteles.checked = false;
    checkMantelesModal.checked = false;
    checkTapetes.checked = false;
    checkTapetesModal.checked = false;
    checkAlgodon.checked = false;
    checkAlgodonModal.checked = false;
    checkLana.checked = false;
    checkLanaModal.checked = false;
    checkAzul.checked = false;
    checkAzulModal.checked = false;
    checkCafe.checked = false;
    checkCafeModal.checked = false;
    checkGris.checked = false;
    checkGrisModal.checked = false;
    checkNaranja.checked = false;
    checkNaranjaModal.checked = false;
    checkNegro.checked = false;
    checkNegroModal.checked = false;
    checkRojo.checked = false;
    checkRojoModal.checked = false;
    checkRosa.checked = false;
    checkRosaModal.checked = false;
    checkVerde.checked = false;
    checkVerdeModal.checked = false;  
};

//Funcion de filtrado de elementos
async function collectFilteredItems(searchElement) {
    var searchArray = [];
    var found = [];
    
    const arrayProductos = await productosjson;
    
    searchElement.forEach(searchElement => {

      const searchWord = searchElement;
  
      arrayProductos.forEach(item=> {
        const lowerCaseProducto = item.producto.toLowerCase();
        const lowerCaseCategoria = item.categoria.toLowerCase();
        const lowerCaseColor = item.color.toLowerCase();
        const lowerCaseMaterial = item.material.toLowerCase();
        
        if ((lowerCaseProducto.includes(searchWord) || 
            lowerCaseCategoria.includes(searchWord)||
            lowerCaseColor.includes(searchWord) ||
            lowerCaseMaterial.includes(searchWord)) &&
            !productoEncontrado(found, item)){
  
          searchArray.push(item);
          found.push(item);     
        } 
      },
    )});
  
      return searchArray;
};

//Funcion para buscar si X elemento ya se almaceno durante el filtrado, de ser asi excluirlo.
function productoEncontrado(elementosAlmacenados, buscar){
    return elementosAlmacenados.some(search => {return search.id===buscar.id })
};




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

