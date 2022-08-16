function myFunction1() {
    document.getElementById("tab1").style.display = "block";
    document.getElementById("tab2").style.display = "block";
    document.getElementById("tab3").style.display = "none";
    document.getElementById("tab4").style.display = "none";
    document.getElementById("tab5").style.display = "none";
    document.getElementById("tab6").style.display = "none";
    document.getElementById("tab7").style.display = "none";  
    document.getElementById("tab8").style.display = "none";  
    document.getElementById("tab9").style.display = "block"; 
}
function myFunction2() {
    document.getElementById("tab1").style.display = "none";
    document.getElementById("tab2").style.display = "none"; 
    document.getElementById("tab3").style.display = "block"
    document.getElementById("tab4").style.display = "none";
    document.getElementById("tab5").style.display = "none";
    document.getElementById("tab6").style.display = "none";
    document.getElementById("tab7").style.display = "none";   
    document.getElementById("tab8").style.display = "block"; 
    document.getElementById("tab9").style.display = "block";
}

function myFunction3() {
    document.getElementById("tab1").style.display = "none";
    document.getElementById("tab2").style.display = "none";
    document.getElementById("tab3").style.display = "none";
    document.getElementById("tab4").style.display = "block";
    document.getElementById("tab5").style.display = "none";
    document.getElementById("tab6").style.display = "none";
    document.getElementById("tab7").style.display = "none";  
    document.getElementById("tab8").style.display = "none"; 
    document.getElementById("tab9").style.display = "block";   
}

function myFunction4() {
    document.getElementById("tab1").style.display = "none";
    document.getElementById("tab2").style.display = "none";
    document.getElementById("tab3").style.display = "none";
    document.getElementById("tab4").style.display = "none";
    document.getElementById("tab5").style.display = "block";
    document.getElementById("tab6").style.display = "none";
    document.getElementById("tab7").style.display = "none"; 
    document.getElementById("tab8").style.display = "none"; 
    document.getElementById("tab9").style.display = "block";
}       

function myFunction5() {
    document.getElementById("tab1").style.display = "none";
    document.getElementById("tab2").style.display = "none";
    document.getElementById("tab3").style.display = "none";
    document.getElementById("tab4").style.display = "none";
    document.getElementById("tab5").style.display = "none";
    document.getElementById("tab6").style.display = "block";
    document.getElementById("tab7").style.display = "none";
    document.getElementById("tab8").style.display = "none";   
    document.getElementById("tab9").style.display = "block"; 
}     
function myFunction6() {
    document.getElementById("tab1").style.display = "none";
    document.getElementById("tab2").style.display = "none";
    document.getElementById("tab3").style.display = "none";
    document.getElementById("tab4").style.display = "none";
    document.getElementById("tab5").style.display = "none";
    document.getElementById("tab6").style.display = "none";
    document.getElementById("tab7").style.display = "block";
    document.getElementById("tab8").style.display = "block";  
    document.getElementById("tab9").style.display = "block";  
}  

let boton = document.getElementById("calculador");
boton.onclick = () => {

    let anch1 = parseInt(document.getElementById('altura').value);
    let altu2 = parseInt(document.getElementById('ancho').value);
    let colorr = document.getElementById("coloreado");
    let colo3 = parseInt(colorr.options[colorr.selectedIndex].value);
    let suma = `total $ ${((anch1 * altu2) * colo3)}`;
    document.getElementById("resultado").value = suma;
    sessionStorage.setItem("Presupuesto Final" , suma);
    sessionStorage.ANCHO = anch1;
    sessionStorage.ALTURA = altu2;
};

class cliente{
    constructor(nombre,correo,mesaje){
        this.nombre = nombre;
        this.correo = correo;
        this.mesaje = mesaje;
        }
}

let boton2 = document.getElementById("enviarInfo");
boton2.addEventListener("click", cargarCliente);

function cargarCliente(){
    let nombre = document.getElementById("nombrecito").value;
    let correo = document.getElementById("mailcito").value;
    let mesaje = document.getElementById("mensajito").value;
    let cliente1 = new cliente(nombre, correo, mesaje);
    console.log(cliente1);
    mostrarCliente(cliente1);

    function mostrarCliente(cliente){
        let formulario = document.getElementById("customer");
        formulario.innerHTML = "";

        let nuevoContenido = document.createElement("div");
        nuevoContenido.innerHTML = "<p> gracias"
        

        nuevoContenido.className = "col-lg-6";
        formulario.appendChild(nuevoContenido);
        Swal.fire(
            'Gracias por su mensaje!',
            'Lo estaremos revisando cuanto antes!',
            'success'
          )
    
    }
}

//JS para Market place
let productos = [
    {
        id: 1,
        nombre:"Producto 1",
        precio: 950,
        imagen: src="./Imagenes/img1.jpeg",
    },
    {
        id: 2,
        nombre:"Producto 2",
        precio: 850,
        imagen: "./Imagenes/img2.jpg",
    },
    {
        id: 3,
        nombre:"Producto 3",
        precio: 750,
        imagen: "./Imagenes/img3.jpeg",
    },
    {
        id: 4,
        nombre:"Producto 4",
        precio: 650,
        imagen: "./Imagenes/img4.jpg",
    },
    {
        id: 5,
        nombre:"Producto 5",
        precio: 550,
        imagen: "./Imagenes/img5.jpeg",
    },
    {
        id: 6,
        nombre:"Producto 6",
        precio: 550,
        imagen: "./Imagenes/img6.jpeg",
    },
    {
        id:7,
        nombre:"Producto 7",
        precio: 450,
        imagen: "./Imagenes/img7.png",
    },
    {
        id:8,
        nombre:"Producto 8",
        precio: 350,
        imagen: "./Imagenes/img8.jpg",
    }
];

const contenedor = document.getElementById("container");
productos.forEach((producto,indice)=>{
    let card = document.createElement("div");
    card.classList.add("card", "col-sm-12", "col-lg-3","bg-secondary", "text-white")
    let html =`<img src="${producto.imagen}" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title" id="tituloServicios">${producto.nombre}</h5>
        <p class="card-text"> $ ${producto.precio}</p>
        <a href="#" class="btn btn-info" onClick="agregarAlCarrito(${indice})">Comprar</a>
    </div>`
    card.innerHTML= html;
    contenedor.appendChild(card);

});

let modalCarrito = document.getElementById("cart");
let totalMP = 0
const dibujarCarrito = ()=>{
    modalCarrito.className= "cart";
    modalCarrito.innerHTML="";
    if(cart.length > 0){
        cart.forEach((producto, indice) => {
            totalMP = totalMP + producto.precio * producto.cantidad;
            const carritoContainer = document.createElement("div");
            carritoContainer.className = "producto-carrito";
            carritoContainer.innerHTML=`
            <img class="car-img" src="${producto.imagen}"/>
            <div class="product-details">
            ${producto.nombre}
            </div>
            <div class="product-details"> Cantidad:${producto.cantidad}</div>
            <div class="product-details"> Precio $ ${producto.precio}</div>
            <div class="product-details"> Subtotal $ ${producto.precio * producto.cantidad} </div>
            <button class="btn btn-info" id="remove-product" onClick="removeProduct(${indice})">Eliminar producto</button>
            `;
            modalCarrito.appendChild(carritoContainer);
        });
       
    const totalContainer = document.createElement("div");
    totalContainer.className = "total-carrito";
    totalContainer.innerHTML = `<div class= "total"> TOTAL $ ${totalMP}</div>
    <button class= "btn btn-info btn-outline-warning finalizar" id="finalizar" onClick= "dibujarFormu()"> FINALIZAR COMPRA </button>`;
    modalCarrito.appendChild(totalContainer);
} else{
    modalCarrito.classList.remove("cart");
}
};
    
let cart = [];

const agregarAlCarrito=(indice) => {
const indiceEncontradoCarrito = cart.findIndex((elemento)=>{
    return elemento.id === productos[indice].id;
});
if (indiceEncontradoCarrito === -1) {
    const productoAgregar = productos[indice];
    productoAgregar.cantidad = 1;
    cart.push(productoAgregar);
    actualizarStorage(cart);
    dibujarCarrito();
} else {
    cart[indiceEncontradoCarrito].cantidad += 1;
    actualizarStorage(cart);
    dibujarCarrito();
}
};

const removeProduct = (indice)=>{
    cart.splice(indice,1);
    actualizarStorage(cart);
    dibujarCarrito();
}


// const finalizarCompra = () => {
//     const totalMP = document.getElementsByClassName("total")[0].innerHTML;
//     modalCarrito.innerHTML = "";
//     const compraFinalizada = `<div class="compra-finalizada"><p class="compra-parrafo"> LA COMPRA YA CASI ES TUYO </p>
//     <div class="datos-cliente">
//     <p class=datos-parrafo"> Complete el formulario  bla bla </p>
//     <button class="btn btn-info formulario" id="formulario" onClick="dibujarFormu()">FORMULARIO </button>
//     </div)`
//     modalCarrito.innerHTML= compraFinalizada;
// };

const dibujarFormu = () => {
    modalCarrito.innerHTML = "";
    Swal.fire({
        position: 'top-end',
        icon: 'warning',
        title: 'Por favor ingresa datos de contacto',
                imageUrl: 'Imagenes/logo.jpg',
                imageWidth: 150,
                imageHeight: 150,
                imageAlt: 'logo v-for-vera',
                textColor:'white',
                customClass:{
                    title:'titulo_alerts',
                    popup:'background_alerts',
                    },
        showConfirmButton: false,
        timer: 8000,
      })
    const formulario = `
    <div class="container px-5 my-2 ">
           <h2 class="fw-bolder" id="tituloServicios">Datos del Comprador</h2>
            <div class="row gx-5 justify-content-center" >
                <div class="col-lg-6" id="customer">
                   <form id="contactForm" style="color: rgb(255,81,0)" >
                       
                        <div class="form mb-3">
                            <label for="name">Nombre:</label>
                            <input class="form-control" id="nombrecito" type="text" placeholder="Juan Perez..." />
                        </div>    
                        
                        <div class="form  mb-3">
                            <label for="email">Email:</label>
                            <input class="form-control" id="mailcito" type="email" placeholder="Juan.Perez@example.com" />
                            
                        </div>
                                                                          
                        <div class="d-grid">
                            <button onClick="mostrarMensaje()" class="btn btn-info mt-2 mb-2 btn-outline-warning" id="" type="button">CONFIRMAR</button></div>
                    </form>
                </div>
            </div>
        </div>
    `;
    modalCarrito.innerHTML = formulario;
};

const mostrarMensaje = () => {
    const nombreCliente = document.getElementById("nombrecito").value;
    const domicilioCliente = document.getElementById("mailcito").value;
    modalCarrito.innerHTML = "";
    let mensaje = `<div class = "mensaje-final"> Muchas gracias ${nombreCliente} por su compra. En breve estara recibiendo un correo de confirmacion
    en: ${domicilioCliente} <br> Por favor ante cualquier consulta contactarse con nosotros en <button onClick="myFunction6()" class="btn btn-info mt-2 mb-2 btn-outline-warning" id="" type="button">Contactar</button></div> </div>`;
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'gracias por su compra </div>',
                textColor:'white',
                customClass:{
                    title:'titulo_alerts',
                    popup:'background_alerts',
                    },
        showConfirmButton: false,
        timer: 8000,
      })

    //agregar boton de regreso a inicio con limpieza de local storage//
    modalCarrito.innerHTML = mensaje;
};

const actualizarStorage = (cart)=>{
    localStorage.setItem("cart", JSON.stringify(cart))

}
//turnos //
var app = new function() {
    var turno1 = {
      Tatuaje: "Color & ByN",
      tamaño: "completo",
      hora: new Date(2018, 4, 15, 12),
      reservas: []
    };
    var turno2 = {
      Tatuaje: "Color & ByN",
      tamaño: "completo",
      hora: new Date(2018, 4, 28, 7, 30),
      reservas: []
    };
    var turno3 = {
      Tatuaje: "Color & ByN",
      tamaño: "completo",
      hora: new Date(2018, 4, 21, 18),
      reservas: []
    };
    var turno4 = {
      Tatuaje: "Flash tattoo",
      tamaño: "EXPRESS!!",
      hora: new Date(2018, 4, 28, 6, 50),
      reservas: [1078]
    };
    var turno5 = {
      Tatuaje: "Flash tattoo",
      tamaño: "EXPRESS!!",
      hora: new Date(2018, 5, 1, 19, 30),
      reservas: []
    };
    this.turnos = [turno1, turno2, turno3, turno4, turno5];
    
    

    this.mostrarturnos = function() {
      var data = '<br>';
      if (this.turnos.length > 0) {
        for (i = 0; i < this.turnos.length; i++) {
          var hora = this.turnos[i].hora.getHours() < 10 ? '0' + this.turnos[i].hora.getHours() : this.turnos[i].hora.getHours();
          var minutos = this.turnos[i].hora.getMinutes() < 10 ? '0' + this.turnos[i].hora.getMinutes() : this.turnos[i].hora.getMinutes();
          data += '<tr>';
          data += '<td>Turno  ' + this.turnos[i].tamaño + ' Tatuaje: ' + this.turnos[i].Tatuaje + " ----> " + hora + ":" + minutos + '</td>' + " ";
          data += '<td><button class="btn btn-info" onclick="app.Reservar(' + i + ')">Reservar</button></td>';
          data += '</tr>';
        }
      }
      document.getElementById('turnos').innerHTML = data;
      document.getElementById('turnos').style.display = 'block';
      document.getElementById('btnback').style.display = 'block';
      document.getElementById('menu1').style.display = 'none';
      document.getElementById('menu2').style.display = 'none';
      document.getElementById('opcionesturnos').style.display = 'block';
    };

    this.Reservar = function (item) {
      var el = document.getElementById('lienzo');
      document.getElementById('lienzo').value = "";
      document.getElementById('datosturnos').style.display = 'block';
      document.getElementById('turnos').style.display = 'none';
      document.getElementById('menu1').style.display = 'none';
      document.getElementById('menu2').style.display = 'block';
      document.getElementById('btnback').style.display = 'block';
      document.getElementById('opcionesturnos').style.display = 'none'

      var hora = this.turnos[item].hora.getHours() < 10 ? '0' + this.turnos[item].hora.getHours() : this.turnos[item].hora.getHours();
      var minutos = this.turnos[item].hora.getMinutes() < 10 ? '0' + this.turnos[item].hora.getMinutes() : this.turnos[item].hora.getMinutes();

      document.getElementById('datosturnos').innerHTML = "turnos # " + (item + 1) + ":<br>Tatuaje: " + this.turnos[item].Tatuaje + this.turnos[item].hora.toDateString() + " " + hora + ":" + minutos;
      document.getElementById('campodoc').style.display = 'block';
      self = this;
      document.getElementById('reserva-edit').onsubmit = function() {
        var d = el.value * 1;
        if (isNaN(d) || d == 0) {
            Swal.fire({
                title: 'Por favor ingresar E-mail!',
                html: '<span class="text_alerts">Y avanzamos con la reserva del turno</span>',
                imageUrl: 'Imagenes/logo.jpg',
                imageWidth: 200,
                imageHeight: 200,
                imageAlt: 'logo v-for-vera',
                confirmButtonText:"Dale!",
                textColor:'white',
                customClass:{
                    confirmButton:'boton_alerts',
                    title:'titulo_alerts',
                    popup:'background_alerts',
                    },
                
              });
        }else{
          var flag = false;
          for (j = 0; j < self.turnos.length; j++) {
            var auxDoc = self.turnos[j].reservas.indexOf(d)
            if (auxDoc != -1) {
              if (self.turnos[j].hora.getFullYear() == self.turnos[item].hora.getFullYear() &&
                self.turnos[j].hora.getMonth() == self.turnos[item].hora.getMonth() &&
                self.turnos[j].hora.getDate() == self.turnos[item].hora.getDate()) {
                flag = true;
                break;
              }
            }
          }
          if (flag) {
            window.alert("Error: usted ya tiene reservado un turno para esta fecha");
          }else{
            self.turnos[item].reservas.push(d);
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Reserva confirmada!!',
                html: '<span class="text_alerts">Te estara llegando la confirmacion por E-mail</span>',
                showConfirmButton: false,
                timer: 1500,
                customClass:{
                    confirmButton:'boton_alerts',
                    title:'titulo_alerts',
                    popup:'background_alerts',
                    },
              });
            document.getElementById('menu1').style.display = 'block';
            document.getElementById('menu2').style.display = 'block';
            document.getElementById('datosturnos').style.display = 'none';
            document.getElementById('campodoc').style.display = 'none';

            document.getElementById('btnback').style.display = 'none';
          }
        }
      }
    };

      this.Volver = function (){
      document.getElementById('datosturnos').style.display = 'none';
      document.getElementById('campodoc').style.display = 'none';
      document.getElementById('turnos').style.display = 'none';
      document.getElementById('btnback').style.display = 'none';
      document.getElementById('menu1').style.display = 'block';
      document.getElementById('menu2').style.display = 'block';
      document.getElementById('docConsulta').value = "";
    };
}


//ofertas//

const ofertador1 = document.getElementById("invento");
productos.slice(0,3).forEach((producto,indice)=>{
    let cardferta = document.createElement("div");
    cardferta.classList.add("card", "mx-5","bg-secondary", "text-white")
    cardferta.classList.add("ofert")
    let html1 =`<img src="${producto.imagen}" class="card-img-top oferts" alt="...">
    <div class="card-body">
        
        <p class="card-text"> $ ${producto.precio}</p>
        <a href="#" class="btn btn-info" onClick="myFunction3()">Comprar</a>
    </div>`
    cardferta.innerHTML= html1;
    ofertador1.appendChild(cardferta);

});
const ofertador2 = document.getElementById("invento2");
productos.slice(3,6).forEach((producto,indice)=>{
    let cardferta2 = document.createElement("div");
    cardferta2.classList.add("card", "mx-5","bg-secondary", "text-white")
    cardferta2.classList.add("ofert")
    let html2 =`<img src="${producto.imagen}" class="card-img-top oferts" alt="...">
    <div class="card-body">
        
        <p class="card-text"> $ ${producto.precio}</p>
        <a href="#" class="btn btn-info" onClick="myFunction3()">Comprar</a>
    </div>`
    cardferta2.innerHTML= html2;
    ofertador2.appendChild(cardferta2);

});
const ofertador3 = document.getElementById("invento3");
productos.slice(5,8).forEach((producto,indice)=>{
    let cardferta3 = document.createElement("div");
    cardferta3.classList.add("card", "mx-5","bg-secondary", "text-white",)
    cardferta3.classList.add("ofert")
    let html3 =`<img src="${producto.imagen}" class="card-img-top oferts" alt="...">
    <div class="card-body">
        
        <p class="card-text"> $ ${producto.precio}</p>
        <a href="#" class="btn btn-info" onClick="myFunction3()">Comprar</a>
    </div>`
    cardferta3.innerHTML= html3;
    ofertador3.appendChild(cardferta3);

});
