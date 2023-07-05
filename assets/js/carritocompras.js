let cartShopping = JSON.parse(localStorage.getItem("CartShopping")) || [];




const containerMyBagOrder580SH = document.getElementById("containerMyBagOrder580");

const containerMyBagOrder460SH = document.getElementById("containerMyBagOrder460");
const containerMyBagOrderMobileSH = document.getElementById("containerMyBagOrderMobile");
const quantitySubtotalProduct580 = document.querySelector("#quantitySubtotal580");
const quantitySubtotalProduct460 = document.querySelector("#quantitySubtotal460");
const quantitySubtotalProductMobile = document.getElementById("quantitySubtotalMobile");
console.log(quantitySubtotalProductMobile);




function ShowHideDesktop() {
  if (window.innerWidth > 866) {
    containerMyBagOrder580SH.style.display = 'flex';
  } else {

    containerMyBagOrder580SH.style.display = 'none';
  }
}



function ShowHideTablet() {

  if (window.innerWidth > 461 && window.innerWidth <= 866) {
    containerMyBagOrder460SH.style.display = 'flex';
  } else {
    containerMyBagOrder460SH.style.display = 'none';
  }
}


function ShowHideMobile() {
  if (window.innerWidth <= 460) {
    containerMyBagOrderMobileSH.style.display = 'flex';
  } else {
    containerMyBagOrderMobileSH.style.display = 'none';
  }
}



window.addEventListener('resize', ShowHideDesktop);
window.addEventListener('resize', ShowHideTablet);
window.addEventListener('resize', ShowHideMobile);

ShowHideDesktop();
ShowHideTablet();
ShowHideMobile();




window.addEventListener("load", checkScreenWidth);//Finalmente llamamos la funcion checkScreenWidth cuando cargue la pagina 




// INICIA EL PINTADO


const divMyBagContent580 = document.querySelector("#myBagContent580");

function addMyBagContent580() {
  
  var myBagContent

    cartShopping.forEach(function (objeto, indice) {
   

      myBagContent = document.createElement("div");
      myBagContent.classList = " card mb-3 col-auto";

      myBagContent.innerHTML = `
    <div id="myBagContent2 ${indice}" class="  row g-0 container-fluid">
    <div class="col-auto">
      <img id="productImgMyBag" class="img-fluid rounded-start" src="${objeto.img}"
        alt="...">
    </div>
    <div id="descriptionMyBag" class="card-body col-sm-auto col-md-auto col-lg-auto">
      <div class="card-title" id="productTitle"> ${objeto.producto} </div>
      <div class="card-text" id="color_product_catalog">
        Color: ${objeto.color}
      </div>
      <div class="card-text" id="size_product_catalog">
        Tamaño: ${objeto.tamaño}
      </div>
      <div id="material_product_catalog" class="card-text">
        Material: ${objeto.material}
      </div>
    </div>
    <div class="col-auto" id="productQuantity">
              <div> Cantidad</div>
              <select id="productQuantitySelect" class="form-select" aria-label="Default select example">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>
            <div class="col-auto" id="productPrice">
              <div> $${objeto.precio} MXN</div>
            </div>
            <div id="crossButton" class="col-auto">
              <button id="cross-icon-button580${indice}" class = "cross-icon-buttons" type="button">
                <i id="cross-icon" class="fi fi-sr-cross"></i>
              </button>
            </div>

  
    
    `;
    divMyBagContent580.appendChild(myBagContent);
   

    var deleteButton = document.getElementById(`cross-icon-button580${indice}`);



    deleteButton.addEventListener("click", function() {
      console.log("Antes del splice dentro de la funcion", cartShopping)

      cartShopping.splice(indice, 1);
      divMyBagContent580.innerHTML = "";
      addMyBagContent580();

      const subtotalProducts = cartShopping.reduce((acc, producto) => acc + producto.precio, 0);
      quantitySubtotalProduct580.innerHTML = `$${subtotalProducts} MXN`;
      localStorage.setItem("CartShopping", JSON.stringify(cartShopping));
      console.log("Despues set local storage", cartShopping)
      




      });


    });
   


    //Price in the modal
    const subtotalProducts = cartShopping.reduce((acc, producto) => acc + producto.precio, 0);
    
    quantitySubtotalProduct580.innerHTML = `$${subtotalProducts} MXN`;
    
  
    
   


}



document.addEventListener("DOMContentLoaded", addMyBagContent580);




//PINTADO PRODUCTO 460


const divMyBagContent460 = document.querySelector("#myBagContent460");

function addMyBagContent460() {
 
   

    cartShopping.forEach(function (objeto, indice) {


      var myBagContent = document.createElement("div");
      myBagContent.classList = " card mb-3 col-auto";

      myBagContent.innerHTML = `
      <div id="myBagContent2 ${indice}" class="  row g-0 container-fluid">
      <div class="col-auto">
        <img id="productImgMyBag" class="img-fluid rounded-start" src="${objeto.img}"
          alt="...">
      </div>
      <div id="descriptionMyBag" class="card-body col-auto">
        <div class="card-title" id="productTitle"> ${objeto.producto} </div>
        <div class="card-text" id="color_product_catalog">
          Color: ${objeto.color}
        </div>
        <div class="card-text" id="size_product_catalog">
          Tamaño: ${objeto.tamaño}
        </div>
        <div id="material_product_catalog" class="card-text">
          Material: ${objeto.material}
        </div>
      </div>
      <div id="crossButton" class="col-auto">
        <button id="cross-icon-button460${indice}" class = "cross-icon-buttons" type="button">
          <i id="cross-icon" class="fi fi-sr-cross"></i>
        </button>
      </div>
    </div>
    <div class="row">
      <div class="col-6" id="productQuantity">
        <div> Cantidad</div>
        <select id="productQuantitySelect" class="form-select" aria-label="Default select example">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
      <div class="col-6" id="productPrice">
        <div> $${objeto.precio} MXN</div>
      </div>
    </div>
  </div>
  
  
    
    `;

      divMyBagContent460.appendChild(myBagContent);

      var deleteButton = document.getElementById(`cross-icon-button460${indice}`);

      deleteButton.addEventListener("click", function() {

        cartShopping.splice(indice, 1);
        divMyBagContent460.innerHTML = "";
        addMyBagContent460();
        
        const subtotalProducts = cartShopping.reduce((acc, producto) => acc + producto.precio, 0);
        quantitySubtotalProduct460.innerHTML = `$${subtotalProducts} MXN`;
        localStorage.setItem("CartShopping", JSON.stringify(cartShopping));
  
  
  
  
        });
      

    });


  //Price in the modal
  const subtotalProducts = cartShopping.reduce((acc, producto) => acc + producto.precio, 0);
    
  quantitySubtotalProduct460.innerHTML = `$${subtotalProducts} MXN`;
  

  


  



}



document.addEventListener("DOMContentLoaded", addMyBagContent460);



//PINTADO PRODUCTO MOBILE


const divMyBagContentMobile = document.querySelector("#myBagContentMobile");

function addMyBagContentMobile() {

  

    cartShopping.forEach(function (objeto, indice) {


      var myBagContent = document.createElement("div");
      myBagContent.classList = " card mb-3 col-auto";

      myBagContent.innerHTML = `
      <div id="myBagContent0  ${indice} " class="col-auto ">
      <div id="myBagContent2" class="  row g-0 container-fluid">
        <div class="col-auto">
          <img id="productImgMyBag" class="img-fluid rounded-start" src="${objeto.img}"
            alt="...">
        </div>
        <div id="crossButton" class="col-auto">
          <button id="cross-icon-buttonMobile${indice}" class = "cross-icon-buttons" type="button">
            <i id="cross-icon" class="fi fi-sr-cross"></i>
          </button>
        </div>
      </div>
      <div class="row">
        <div id="descriptionMyBag" class="card-body col-auto">
          <div class="card-title" id="productTitle">  ${objeto.producto}</div>
          <div class="card-text" id="color_product_catalog">
            Color: ${objeto.color}
          </div>
          <div class="card-text" id="size_product_catalog">
            Tamaño: ${objeto.tamaño}
          </div>
          <div id="material_product_catalog" class="card-text">
            Material:  ${objeto.material}
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-6" id="productQuantity">
          <div> Cantidad</div>
          <select id="productQuantitySelect" class="form-select" aria-label="Default select example">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>
        <div class="col-6" id="productPrice">
          <div> $${objeto.precio} MXN</div>
        </div>
      </div>
    </div>
  
  
    
    `;

      divMyBagContentMobile.appendChild(myBagContent);


      var deleteButton = document.getElementById(`cross-icon-buttonMobile${indice}`);


      deleteButton.addEventListener("click", function() {
  
        cartShopping.splice(indice, 1);
        divMyBagContentMobile.innerHTML = "";
        addMyBagContentMobile();
  
        const subtotalProducts = cartShopping.reduce((acc, producto) => acc + producto.precio, 0);
        quantitySubtotalProductMobile.innerHTML = `$${subtotalProducts} MXN`;
        localStorage.setItem("CartShopping", JSON.stringify(cartShopping));
  
  
  
  
        });
  
      


    });


  //Price in the modal
  const subtotalProducts = cartShopping.reduce((acc, producto) => acc + producto.precio, 0);
    
  quantitySubtotalProductMobile.innerHTML = `$${subtotalProducts} MXN`;
  

  


}



document.addEventListener("DOMContentLoaded", addMyBagContentMobile);



//Load the cartShopping array from local storage on page load
document.addEventListener("DOMContentLoaded", function(){

  if (localStorage.getItem("CartShopping")){
    cartShopping = JSON.parse(localStorage.getItem("CartShopping"));
    console.log("Loaded cart from local storage: ", cartShopping);
  }
})





