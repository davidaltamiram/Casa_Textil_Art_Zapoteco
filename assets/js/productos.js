

/*Inicio de elementos y evento de bton filtro en contenedor de productos*/
var bton = document.getElementById("bton-filtro");
var filtro = document.querySelector("#filtro");

bton.addEventListener("click", (e) => {
    e.preventDefault();
    if (filtro.style.display === "none") {
        filtro.style.display = "block";
    } else {
        filtro.style.display = "none";
    }
});


/*Fin de elementos de bton filtro en contenedor de productos*/




//Catálogo de todos los prodcutos

const catalogo = [{
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
    consecutivo: 3,
    img: "./assets/img/productos/prod-coj-03.jpg",
},
{
    id: "prod-coj-04",
    producto: "Funda para cojin",
    categoria: "cojines",
    precio: 200,
    color: "Amarillo",
    tamaño: "50x50 cm",
    material: "Algodon",
    composicion: "100% natural",
    consecutivo: 4,
    img: "./assets/img/productos/prod-coj-04.jpg",
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
    consecutivo: 5,
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
    consecutivo: 6,
    img: "./assets/img/productos/prod-coj-06.jpg",
},
{
    id: "prod-coj-07",
    producto: "Funda para cojin",
    categoria: "cojines",
    precio: 400,
    color: "Verde",
    tamaño: "50x50 cm",
    material: "Algodon",
    composicion: "100% natural",
    consecutivo: 7,
    img: "./assets/img/productos/prod-coj-07.jpg",
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
    consecutivo: 8,
    img: "./assets/img/productos/prod-coj-08.jpg",
},
{
    id: "prod-coj-09",
    producto: "Funda para cojin",
    categoria: "cojines",
    precio: 300,
    color: "Naranja",
    tamaño: "50x50 cm",
    material: "Algodon",
    composicion: "100% natural",
    consecutivo: 9,
    img: "./assets/img/productos/prod-coj-09.jpg",
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
    consecutivo: 10,
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
    consecutivo: 11,
    img: "./assets/img/productos/prod-coj-03.jpg",
},

{
    id: "prod-coj-10",
    producto: "Funda para cojin",
    categoria: "cojines",
    precio: 350,
    color: "Negro",
    tamaño: "50x50 cm",
    material: "Algodon",
    composicion: "100% natural",
    consecutivo: 12,
    img: "./assets/img/productos/prod-coj-01.jpg",
}];

//Aquí termina el catalogo de productos

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

//Termina el catálogo de los productos más vendidos


//Inicia lo referente a pintar el catalogo de prodcutos del html

const divProductos = document.querySelector("#productos");


function addProducto() {

    catalogo.forEach(function (objeto) {



        var productCard = document.createElement("div");
        productCard.classList = "col-sm-6 col-md-4 col-lg-4 align-items-center";
        productCard.setAttribute('id', 'eachProduct');

        productCard.innerHTML = `
<button id="imageButton" data-bs-toggle="modal" data-bs-target="#exampleModal" >
  <div class="card" id="card-gallery" ">
    <img class="card-img-top" src="${objeto.img}" alt="Producto">
    <div class="card-body">
      <p class="card-text">$${objeto.precio} MXN</p>
    </div>
  </div>
</button>
<div class="container" id="product_image_modal"></div>
`;

        divProductos.appendChild(productCard);


    });
}


addProducto();




//Termina lo referente a pintar el catalogo de prodcutos del html

//Inicia lo referente a pintar el carousel del html

const divCarousel = document.querySelector("#productosCarousel");

function addProductoCarousel() {

    catalogoMasVendidos.forEach(function (objeto) {

        var productCardCarousel = document.createElement("div");
        productCardCarousel.classList = "item";

        productCardCarousel.innerHTML = `
        <div class="card">
            <img src="${objeto.img}"
            alt="Producto" class="card-img-top">
        </div>
`;
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

//Finaliza jQuery carousel


//Almaceno el lugar de destino de mi tarjeta en una constante
const product_image_modal = document.getElementById("product_image_modal");
const imageProductButton = document.getElementById("imageButton");


function imageButtons() {


    //Guardo los valores de mis inputs



    //1Creo el elemento

    product_image_modal.innerHTML = `

    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
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
                                <img class="img-fluid"  src="./assets/img/productos/prod-coj-01.jpg"
                                    alt="Producto">
                            </div>

                            <div class="col-lg-5" class="container ">

                                <br>

                                
                                    <div class="container-fluid " id="text_content_modal">

                                        <div id="title_product_catalog">
                                            Funda para cojín
                                        </div>
                                        <br>
                                        <div class="text_product_modal"
                                            id="price_product_catalog">
                                            $250
                                        </div>
                                        <div class="text_product_modal"
                                            id="color_product_catalog">
                                            Color: Azul
                                        </div>
                                        <div class="text_product_modal"
                                            id="size_product_catalog">
                                            Tamaño: 50x50 cm
                                        </div>
                                        <div class="text_product_modal"
                                            id="material_ product_catalog">
                                            Material: Algodón
                                        </div>
                                        <div class="text_product_modal"
                                            id="composition_ product_catalog">
                                            Composición: 100% natural
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
</div>`;


}

//Creamos el botón de escucha
imageProductButton.addEventListener("click", imageButtons);






/*Se comenta segundo intento porque marca error al creer crear los atributos de bootstrap

//Obtener los elementos del HTML para guardarlos en variables

//Almaceno el lugar de destino de mi tarjeta en una constante


const divEachProduct = document.getElementById("eachProduct");
const imageProductButton = document.getElementById("imageButton");

function imageButtonsProducts() {

    var divProductosModal = document.createElement("div");
    divProductosModal.classList = "modal fade";
    divProductosModal.setAttribute('id', 'examplemodal');
    divProductosModal.setAttribute('tabindex', '-1');
    divProductosModal.setAttribute('aria-labelledby', 'exampleModalLabel');
    divProductosModal.setAttribute('aria-hidden', 'true');


    divProductosModal.innerHTML = `
    <div class="modal-dialog modal-lg ">
    <div class="modal-content">

        <div class="modal-body">
            <div class="container">
                <div class="row justify-content-end">
                    <button id="button_close_product_catalog" type="button"
                    data-bs-dismiss="modal" aria-label="Close">
                    <svg width="20"
                        height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M19.7338 1.55191C20.0887 1.1969 20.0887 0.621295 19.7338 0.266277C19.3787 -0.0887591 18.8031 -0.0887591 18.448 0.266277L10 8.71435L1.55191 0.266277C1.1969 -0.0887591 0.621295 -0.0887591 0.266277 0.266277C-0.0887591 0.621295 -0.0887591 1.1969 0.266277 1.55191L8.71435 10L0.266277 18.448C-0.0887591 18.8031 -0.0887591 19.3787 0.266277 19.7338C0.621295 20.0887 1.1969 20.0887 1.55191 19.7338L10 11.2857L18.448 19.7338C18.8031 20.0887 19.3787 20.0887 19.7338 19.7338C20.0887 19.3787 20.0887 18.8031 19.7338 18.448L11.2857 10L19.7338 1.55191Z"
                            fill="black" />
                    </svg>
                    </button>
                </div>


                
                <div class="row">
                    <div class="col-lg-7">
                        <img class="img-fluid"  src="./assets/img/productos/prod-coj-08.jpg"
                            alt="Producto">
                    </div>

                    <div class="col-lg-5" class="container ">

                        <br>

                        <div class="floater">
                            <div class="container-fluid " id="text_content_modal">

                                <div id="title_product_catalog">
                                    Funda para cojín
                                </div>
                                <br>
                                <div class="text_product_modal"
                                    id="price_product_catalog">
                                    $####
                                </div>
                                <div class="text_product_modal"
                                    id="color_product_catalog">
                                    Color: Amarillo con blanco
                                </div>
                                <div class="text_product_modal"
                                    id="size_product_catalog">
                                    Tamaño: 50x50 cm
                                </div>
                                <div class="text_product_modal"
                                    id="material_ product_catalog">
                                    Material: Algodón
                                </div>
                                <div class="text_product_modal"
                                    id="composition_ product_catalog">
                                    Composición: 100% natural
                                </div>
                                <br>

                                <div>
                                    <button> Añadir al
                                        carrito</button>
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

};


//Creamos el botón de escucha
imageProductButton.addEventListener("click", imageButtonsProducts)

*/

/* SE CANCELA EN LO QUE SE REALIZAN PRUEBAS
const product_image_modal = document.getElementById("eachProduct");
const imageProductButton = document.getElementById("imageButton");

function imageButtons() {

    var divProductosModal = document.createElement("div");
    divProductosModal.classList = "modal fade";
    divProductosModal.setAttribute('id', 'examplemodal');
    divProductosModal.setAttribute('tabindex', '-1');
    divProductosModal.setAttribute('aria-labelledby', 'exampleModalLabel');
    divProductosModal.setAttribute('aria-hidden', 'true');


    divProductosModal.innerHTML = `

    
    <div class="modal-dialog modal-lg ">
        <div class="modal-content">

            <div class="modal-body">
                <div class="container">
                <div class="row justify-content-end">
                <button id="button_close_product_catalog" type="button"
                    data-bs-dismiss="modal" aria-label="Close">
                    <svg width="20"
                        height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M19.7338 1.55191C20.0887 1.1969 20.0887 0.621295 19.7338 0.266277C19.3787 -0.0887591 18.8031 -0.0887591 18.448 0.266277L10 8.71435L1.55191 0.266277C1.1969 -0.0887591 0.621295 -0.0887591 0.266277 0.266277C-0.0887591 0.621295 -0.0887591 1.1969 0.266277 1.55191L8.71435 10L0.266277 18.448C-0.0887591 18.8031 -0.0887591 19.3787 0.266277 19.7338C0.621295 20.0887 1.1969 20.0887 1.55191 19.7338L10 11.2857L18.448 19.7338C18.8031 20.0887 19.3787 20.0887 19.7338 19.7338C20.0887 19.3787 20.0887 18.8031 19.7338 18.448L11.2857 10L19.7338 1.55191Z"
                            fill="black" />
                    </svg>
                </button>
            </div>

                    <div class="row">
                        <div class="col-lg-7">
                            <img class="img-fluid" src="${objeto.img}"
                                alt="Producto">
                        </div>

                        <div class="col-lg-5" class="container ">

                            <br>

                            <div class="floater">
                                <div class="container-fluid " id="text_content_modal">

                                    <div id="title_product_catalog">
                                        ${objeto.producto}
                                    </div>
                                    <br>
                                    <div class="text_product_modal"
                                        id="price_product_catalog">
                                        ${objeto.precio}
                                    </div>
                                    <div class="text_product_modal"
                                        id="color_product_catalog">
                                        Color: ${objeto.color}
                                    </div>
                                    <div class="text_product_modal"
                                        id="size_product_catalog">
                                        Tamaño: ${objeto.tamaño} cm
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

                                    <div>
                                        <button> Añadir al
                                            carrito</button>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>



                </div>




            </div>
        </div>
    

</div>`;

};


//Creamos el botón de escucha
imageProductButton.addEventListener("click", imageButtons);
*/

