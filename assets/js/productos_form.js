function agregarProducto(){
   

    var producto = document.getElementById("producto").value;
    var precio = document.getElementById("precio").value;
    var color = document.getElementById("color").value;
    var tamaño = document.getElementById("tamaño").value;
    var material = document.getElementById("material").value;
    var img = document.getElementById("img").value;
 


    var objeto = {
        producto: producto,
        precio: precio,
        color: color,
        tamaño: tamaño,
        material: material,
        img: "./assets/img/productos/"
    }

    var productoExistente = JSON.parse(localStorage.getItem('datos')) || [];

    productoExistente.push(objeto);

    localStorage.setItem('datos', JSON.stringify(productoExistente));
    console.log('Objeto agregado correctamente');
    // fetch('./assets/js/productos.json', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(objeto)
    //   })

    // .then(function(res){
    //     if (res.ok){
    //         console.log('Objeto agregado correctamente');
    //     }else{
    //         console.log('Error al agregar el producto');
    //     }
    // })

    // .catch(function(error){
    //     console.log('Error de conexion', error);
    // });

    console.log(objeto);
    console.log(productoExistente);
}
var boton = document.getElementById("boton");
boton.addEventListener("click",(e)=> {
    e.preventDefault();
    agregarProducto()});



