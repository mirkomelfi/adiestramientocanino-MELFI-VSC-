class Cliente{
    constructor (nombre,apellido,email,cursos,codigo){
        this.nombre;
        this.apellido;
        this.email;
        this.cursos;
        this.carrito=0;
    }

    setNombre(nombre){
        this.nombre=nombre;
    }

    setApellido(apellido){
        this.apellido=apellido;
    }
    setEmail(email){
        this.email=email;
    }
    setCursos(cursos){
        this.cursos=cursos;
    }

    setCarrito (valor){
        this.carrito=valor;
    }

    setCodigo(codigo){
        this.codigo=codigo;
    }

    getCarrito(){
        return this.carrito;
    }

    es_cliente(cantidad){
        let clienteRegular;
        cantidad>3 ? clienteRegular=true : clienteRegular=false;
        return clienteRegular
    }

}


function notificacion_agregado(){
    Toastify({
    text: "Agregado al carrito",
    gravity:"bottom",
    duration: 1000,
    style:{
        background:"white",
        color:"red",
        width: "230px",
        height:"60px",
        fontSize:"20px",
        textAlign: "center"
    }
    
    }).showToast();

}

function notificacion_eliminado(){
    Toastify({

    text: "Eliminado del carrito",
    gravity:"bottom",
    duration: 1000,
    style:{
        background:"white",
        color:"black",
        width: "230px",
        height:"60px",
        fontSize:"20px"
    }
    
    }).showToast();

}

function ver_carrito(producto){
    let fila=document.createElement("tr");

    fila.innerHTML=`<td id="${producto.nombre}">${producto.nombre}</td>
                    <td>${producto.cant}</td>
                    <td>${producto.precio}</td>
                    <td><button class="borrar btn btn-danger" id="${producto.precio}">eliminar</button></td>
 
    `;
    let tbody=document.getElementById("tbody");
    tbody.append(fila);
    let boton_borrar=document.querySelectorAll(".borrar");
    for (boton of boton_borrar){
        boton.addEventListener("click",borrar_elemento);
    }
    
}

function borrar_elemento(e){

    let resta= parseInt(e.target.id);
    let hijo=e.target;
    let abuelo=hijo.parentNode.parentNode;
    abuelo.remove();
    let carrito= cliente_uno.getCarrito()
    cliente_uno.setCarrito(carrito-resta);
    notificacion_eliminado();
    eliminar(resta);
    
}


function loggear(){
    let nombre_usr= document.getElementById("nombre");
    let apellido_usr= document.getElementById("apellido");
    let cursos_usr= document.getElementById("cursos");
    let correo_usr= document.getElementById("correo");
    let codigo_usr= document.getElementById("codigo");
    cliente_uno.setNombre(nombre_usr.value);
    cliente_uno.setApellido(apellido_usr.value);
    cliente_uno.setEmail(correo_usr.value);
    cliente_uno.setCursos(cursos_usr.value);
    cliente_uno.setCodigo(codigo_usr.value);
    if (cliente_uno.es_cliente(cliente_uno.cursos)){
        Swal.fire({
            icon: "success",
            title: `¡Hola de nuevo, ${cliente_uno.nombre}! `,
            text: "Datos recibidos. Continúe con su compra",
            showCloseButton: true,
            focusConfirm: false,
            confirmButtonText:
                '<i class="fa fa-thumbs-up"></i> Continuar comprando',
            confirmButtonAriaLabel: 'Thumbs up, great!',
            footer: "Adiestramiento Canino Jirok",
        })
    }else{
        Swal.fire({
            icon: "success",
            title: `¡Bienvenido a nuestra escuela! Esperamos le guste `,
            text: "Datos recibidos. Continúe con su compra",
            showCloseButton: true,
            focusConfirm: false,
            confirmButtonText:
                '<i class="fa fa-thumbs-up"></i>  Continuar comprando',
            confirmButtonAriaLabel: 'Thumbs up, great!',
            footer: "Adiestramiento Canino Jirok",
        })
    }
}

let compras=[];
let carrito_storage=[];

let cliente_uno=new Cliente();

let productos=[
    {nombre: "Curso de Educación Básica para Cachorros", precio:9300, modalidad:"Presencial",cant:1},
    {nombre: "Curso de Modificación de Conductas", precio:12180, modalidad:"Presencial",cant:1},
    {nombre: "Curso de Agility", precio:7200, modalidad:"Online",cant:1},
    {nombre: "Curso de Protección Civil", precio:15200, modalidad:"Presencial",cant:1},
    {nombre: "Curso de Búsqueda", precio:15200, modalidad:"Presencial",cant:1},
    {nombre: "Seminario Miedos y Fobias", precio:5300, modalidad:"Online",cant:1},
    {nombre: "Seminario Ansiedad", precio:5300, modalidad:"Online",cant:1},
    {nombre: "Seminario Conductas Agresivas", precio:5300, modalidad:"Presencial",cant:1},
    {nombre: "Seminario Mejorar tus Paseos", precio:2500, modalidad:"Online",cant:1},
];


let boton_añadir= document.getElementsByClassName("boton_añadir");
for (boton of boton_añadir){
    boton.addEventListener("click",function(e){
        notificacion_agregado();
        let carrito=cliente_uno.getCarrito();
        if(e.target.id=="boton_cero"){
            cliente_uno.setCarrito(carrito+productos[0].precio);
            compras.push(productos[0]);
            let prod_storage=JSON.stringify(productos[0]);
            carrito_storage.push(prod_storage);
            localStorage.setItem("producto",carrito_storage);
            ver_carrito(productos[0]);      
        }
        else if(e.target.id=="boton_uno"){
            cliente_uno.setCarrito(carrito+productos[1].precio);
            compras.push(productos[1]);
            ver_carrito(productos[1]);
            let prod_storage=JSON.stringify(productos[1]);
            carrito_storage.push(prod_storage);
            localStorage.setItem("producto",carrito_storage);
        }
        else if(e.target.id=="boton_dos"){
            cliente_uno.setCarrito(carrito+productos[2].precio);
            compras.push(productos[2]);
            ver_carrito(productos[2]);
            let prod_storage=JSON.stringify(productos[2]);
            carrito_storage.push(prod_storage);
            localStorage.setItem("producto",carrito_storage);
        }
        else if(e.target.id=="boton_tres"){
            cliente_uno.setCarrito(carrito+productos[3].precio);
            compras.push(productos[3]);
            ver_carrito(productos[3]);
            let prod_storage=JSON.stringify(productos[3]);
            carrito_storage.push(prod_storage);
            localStorage.setItem("producto",carrito_storage);
        }
        else if(e.target.id=="boton_cuatro"){
            cliente_uno.setCarrito(carrito+productos[4].precio);
            compras.push(productos[4]);
            ver_carrito(productos[4]);
            let prod_storage=JSON.stringify(productos[4]);
            carrito_storage.push(prod_storage);
            localStorage.setItem("producto",carrito_storage);
        }
        else if(e.target.id=="boton_cinco"){
            cliente_uno.setCarrito(carrito+productos[5].precio);
            compras.push(productos[5]);
            ver_carrito(productos[5]);
            
            let prod_storage=JSON.stringify(productos[5]);
            carrito_storage.push(prod_storage);
            localStorage.setItem("producto",carrito_storage);
        }
        else if(e.target.id=="boton_seis"){
            cliente_uno.setCarrito(carrito+productos[6].precio);
            compras.push(productos[6]);
            ver_carrito(productos[6]);
            let prod_storage=JSON.stringify(productos[6]);
            carrito_storage.push(prod_storage);
            localStorage.setItem("producto",carrito_storage);
        }
        else if(e.target.id=="boton_siete"){
            cliente_uno.setCarrito(carrito+productos[7].precio);
            compras.push(productos[7]);
            ver_carrito(productos[7]);
            let prod_storage=JSON.stringify(productos[7]);
            carrito_storage.push(prod_storage);
            localStorage.setItem("producto",carrito_storage);
        }
        else if(e.target.id=="boton_ocho"){
            cliente_uno.setCarrito(carrito+productos[8].precio);
            compras.push(productos[8]);
            ver_carrito(productos[8]);
            let prod_storage=JSON.stringify(productos[8]);
            carrito_storage.push(prod_storage);
            localStorage.setItem("producto",carrito_storage);
        }
    });
}

let boton_carrito= document.getElementById("boton_carrito");
boton_carrito.addEventListener("click",function(){
    let carrito=document.getElementById("info_carrito");
    carrito.className="fondo_blanco";
    let cliente_regular=cliente_uno.es_cliente(cliente_uno.cursos);
    localStorage.clear();
    if (cliente_uno.getCarrito()!=0){
        if (cliente_regular){
            Swal.fire({
                icon: "success",
                title: "Compra finalizada con éxito",
                text:`Cuenta con un descuento del 15% por ser un cliente regular, 
                el valor final del carrito es de: $${cliente_uno.getCarrito()*0.85}`,
                showCloseButton: true,
                focusConfirm: false,
                confirmButtonText:
                    '<i class="fa fa-thumbs-up"></i> ',
                confirmButtonAriaLabel: 'Thumbs up, great!',
                footer: "<a href='cursos.html'>Volver al menú de compras</a>",
            })
        }else{
            Swal.fire({
                icon: "success",
                title: "Compra finalizada con éxito",
                text:`Valor del carrito: $${cliente_uno.getCarrito()}`,
                showCloseButton: true,
                focusConfirm: false,
                confirmButtonText:
                    '<i class="fa fa-thumbs-up"></i> ',
                confirmButtonAriaLabel: 'Thumbs up, great!',
                footer: "<a href='cursos.html'>Volver al menú de compras</a>",
            })
        }         
    }else{
        Swal.fire({
            icon: "error",
            title: "CARRITO VACÍO",
            text:`No seleccionó ningún producto para comprar`,
            showCloseButton: true,
            focusConfirm: false,
            confirmButtonText:
                '<i class="fa fa-thumbs-up"></i> ',
            confirmButtonAriaLabel: 'Thumbs up, great!',
            footer: "<a href='cursos.html'>Volver al menú de compras</a>",
        })
    }


})

let clima=document.getElementById("clima");
let boton_clima=document.getElementById("boton_clima");
boton_clima.addEventListener("click",function(){
    fetch ("https://api.openweathermap.org/data/2.5/weather?q=Buenos%20Aires&lang=es&appid=d42ff593ca5a7188e77927589f45cc05")
        .then(response=>response.json())
        .then(data=>{
            let clima_actual= data.weather[0].main;
            let descripcion= data.weather[0].description;
            if (clima_actual=="Clear" || clima_actual=="Clouds"){
                    clima.innerHTML=`<p>Clima actual: ${descripcion}</p>
                                    <p> HOY HAY CLASES ! </p>`;
            }
            else{
                    clima.innerHTML=`<p> CLASES DE HOY SUSPENDIDAS POR LLUVIA ! </p>
                                        <p>Clima actual: ${descripcion}</p> `;
            }
        }
    )
});
