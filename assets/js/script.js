
/*Inicio de elementos y evento de bton filtro en contenedor de productos*/
var bton = document.getElementById("bton-filtro");
var filtro = document.querySelector("#filtro");

bton.addEventListener("click", (e) => {
    e.preventDefault();
    if (filtro.style.display === "none"){
        filtro.style.display = "block";
    }else{
        filtro.style.display = "none";
    }
});
/*Fin de elementos de bton filtro en contenedor de productos*/

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
})




//Obtener los elementos del HTML para guardarlos en variables

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
                        <button id="button_close_product_catalog" type="button"
                            data-bs-dismiss="modal" aria-label="Close"><svg width="20"
                                height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M19.7338 1.55191C20.0887 1.1969 20.0887 0.621295 19.7338 0.266277C19.3787 -0.0887591 18.8031 -0.0887591 18.448 0.266277L10 8.71435L1.55191 0.266277C1.1969 -0.0887591 0.621295 -0.0887591 0.266277 0.266277C-0.0887591 0.621295 -0.0887591 1.1969 0.266277 1.55191L8.71435 10L0.266277 18.448C-0.0887591 18.8031 -0.0887591 19.3787 0.266277 19.7338C0.621295 20.0887 1.1969 20.0887 1.55191 19.7338L10 11.2857L18.448 19.7338C18.8031 20.0887 19.3787 20.0887 19.7338 19.7338C20.0887 19.3787 20.0887 18.8031 19.7338 18.448L11.2857 10L19.7338 1.55191Z"
                                    fill="black" />
                            </svg>
                        </button>
                    </div>
                    <div class="row">
                        <div class="col-lg-7">
                            <img class="img-fluid"  src="./assets/ImagenesComprar/Comprar Cojín Algodón amarillo y blanco.jpg"
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

</div>`;


}

//Creamos el botón de escucha
imageProductButton.addEventListener("click", imageButtons);
