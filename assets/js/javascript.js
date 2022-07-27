//constructor

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
        let clienteRegular=false;
        if (cantidad>0){
            clienteRegular=true;
        }
        return clienteRegular;
    }
    saludar(cliente){
        let msj=document.getElementById("contenedorPrueba");
        let parrafo=document.createElement("h1");
        if (cliente){
            parrafo.innerText="Hola de nuevo!";
            console.log("Hola de nuevo,",this.nombre,"!");
        }else{
            parrafo.innerText="¡Primera vez en la escuela, Bienvenido!";
            console.log("Bienvenido",this.nombre,"!");
        }
        msj.append(parrafo);

    }
    saludo_final(){
        console.log("Gracias por su compra,",this.nombre," ¡Lo esperamos pronto!");
    }

}

//funciones
/*
function comprar_cursos(total,array_productos,array_compras,cant_compras){
    let compra= parseInt(prompt("Elija un curso o -1 para terminar: "));
    let i=0;
    while (compra != -1){
        let pos;
        if (compra<1 || compra>9){
            console.log("Error. Ingrese un número válido");
        }
        else{
            console.log(array_productos[compra-1].nombre,"añadido al carrito!");
            console.log("El precio del mismo es: ",array_productos[compra-1].precio);
            total=total+array_productos[compra-1].precio;
            prod_comprado=array_productos[compra-1];
            cant_compras.push(prod_comprado);
            if (!(array_compras.includes(prod_comprado))){
                array_compras.push(prod_comprado);
                pos= array_compras.indexOf(prod_comprado);
                array_compras[pos].cant=1;
                i=1;
            }else{
                pos= array_compras.indexOf(prod_comprado);
                array_compras[pos].cant=i+1;
                i=i+1;
            }
    
        }
        
        console.log("-------------------------");
        
        compra= prompt("Elija uno o -1 para salir: ");
    }
    return total;
}

function promocion(cant_cursos,precio){
    if(cant_cursos>5){
        precio=Math.round(precio*0.5);
        console.log("Debido a haber realizado más de 5 cursos en la escuela tiene un descuento del 50%. El total de la compra es de $",precio);
    }
    else if (cant_cursos>2){
        precio=Math.round(precio*0.7);
        console.log("Debido a haber realizado más de 2 cursos en la escuela tiene un descuento del 30%. El total de la compra es de $",precio);
    }
    return precio;
}


function fecha_hoy(){
    return new Date()
}


function descuento_codigo(array_productos){
    let desc= array_productos.precio*0.1;
    return {
        nombre:array_productos.nombre,
        precio:array_productos.precio-desc,
        modalidad:array_productos.modalidad
    }
}

function saber_presencial(array_productos){
    let pres= prompt("Desea saber cual es presencial? SI/NO ");
    if (pres=="SI" || pres=="SÍ" || pres=="si" || pres=="sí" || pres=="Si" || pres=="Sí"){
        let rdo_pres = array_productos.filter(modalidad_presencial);
        console.log ("CURSOS CON MODALIDAD PRESENCIAL");
        impresion(rdo_pres)
    } 
}

function saber_online(array_productos){
    let onl= prompt("Desea saber cual es online? SI/NO ");
    if (onl=="SI" || onl=="SÍ" || onl=="si" || onl=="sí" || onl=="Si" || onl=="Sí"){
        let rdo_onl = array_productos.filter(modalidad_online);
        console.log ("CURSOS CON MODALIDAD ONLINE");
        impresion(rdo_onl)
    }
}

function modalidad_presencial(producto){
    return producto.modalidad=="Presencial"
}

function modalidad_online(producto){
    return producto.modalidad=="Online"
}

*/



/*
arreglo_codigos=[];
let codigos_json=JSON.stringify(["DESC10","DESC20","DESC30","DESC40","DESC50"]);
arreglo_codigos.push(codigos_json);
localStorage.setItem("codigos",arreglo_codigos);



let recuperar_codigos
if (JSON.parse(localStorage.getItem("codigos")).includes(cliente_uno.codigo)){
    for (prod in productos){
       prod.precio=prod.precio*0.7;
}}*/




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

//funcion para usar SPREAD y OPERADOR TERNARIO
function curso_mas_caro(array_cursos){
    let msj=document.getElementById("cursoMayor");
    let parrafo=document.createElement("p");
    let array_valores=[];
    for (curso of array_cursos){
        array_valores.push(curso.precio);
    }
    let maximo=Math.max(...array_valores);
    if (cliente_uno.getCarrito()!=0){
        maximo>11000 ? parrafo.innerHTML=`El curso de mayor valor es de ${maximo} por lo que cuenta con un descuento del 15% `: parrafo.innerHTML=`Ninguno de los cursos comprados aplica al descuento del 15% `;
        msj.append(parrafo);
    }
   

}


function ver_carrito(producto){
    let fila=document.createElement("tr");
    fila.innerHTML=`<td>${producto.nombre}</td>
                    <td >${producto.cant}</td>
                    <td>${producto.precio}</td>
                    <td><button class="borrar" id="${producto.precio}">eliminar</button></td>
 
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
    
}

function loggear(){
    let nombre_usr= document.getElementById("nombre");
    let apellido_usr= document.getElementById("apellido");
    let cursos_usr= document.getElementById("cursos");
    let correo_usr= document.getElementById("correo");
    let codigo_usr= document.getElementById("codigo");
    let contenedor=document.getElementById("contenedorPrueba");
    //contenedor.innerHTML=`<h3>LOGGEADO</h3><p>Nombre: ${nombre_usr.value}</p><p>Apellido: ${apellido_usr.value}</p><p>Cursos realizados: ${cursos_usr.value}</p><p>Correo: ${correo_usr.value}</p>`;
    Swal.fire({
        icon: "success",
        title: "DATOS RECIBIDOS",
        text: "Continúe con su compra",
        showCloseButton: true,
        focusConfirm: false,
        confirmButtonText:
            '<i class="fa fa-thumbs-up"></i> Great!',
        confirmButtonAriaLabel: 'Thumbs up, great!',
        footer: "Adiestramiento Canino Jirok",
    })
    cliente_uno.setNombre(nombre_usr.value);
    cliente_uno.setApellido(apellido_usr.value);
    cliente_uno.setEmail(correo_usr.value);
    cliente_uno.setCursos(cursos_usr.value);
    cliente_uno.setCodigo(codigo_usr.value);
  }

let compras=[];
let carrito_storage=[];

let cliente_uno=new Cliente();

let productos=[
    {nombre: "Curso de Educación Básica para Cachorros", precio:9300, modalidad:"Presencial",cant:0},
    {nombre: "Curso de Modificación de Conductas", precio:12180, modalidad:"Presencial",cant:0},
    {nombre: "Curso de Agility", precio:7200, modalidad:"Online",cant:0},
    {nombre: "Curso de Protección Civil", precio:15200, modalidad:"Presencial",cant:0},
    {nombre: "Curso de Búsqueda", precio:15200, modalidad:"Presencial",cant:0},
    {nombre: "Seminario Miedos y Fobias", precio:5300, modalidad:"Online",cant:0},
    {nombre: "Seminario Ansiedad", precio:5300, modalidad:"Online",cant:0},
    {nombre: "Seminario Conductas Agresivas", precio:5300, modalidad:"Presencial",cant:0},
    {nombre: "Seminario Mejorar tus Paseos", precio:2500, modalidad:"Online",cant:0},
];

// HAY OPERADOR ++ EN CADA ELSE
let boton_añadir= document.getElementsByClassName("boton_añadir");
for (boton of boton_añadir){
    boton.addEventListener("click",function(e){
        notificacion_agregado();
        let carrito=cliente_uno.getCarrito();
        
        if(e.target.id=="boton_cero"){
            cliente_uno.setCarrito(carrito+productos[0].precio);
            if (!(compras.includes(productos[0]))){
                productos[0].cant=1;
                compras.push(productos[0]);

                /* hkear
                let prod_storage=JSON.stringify(productos[0]);
                carrito_storage.push(prod_storage);
                localStorage.setItem("producto",carrito_storage);*/
            }else{
               productos[0].cant++;
               //getteo el storage remuevo el actual y cargo el nuevo
            }
            let prod_storage=JSON.stringify(productos[0]);
            carrito_storage.push(prod_storage);
            localStorage.setItem("producto",carrito_storage);
            ver_carrito(productos[0]);
            
        }
        else if(e.target.id=="boton_uno"){
            cliente_uno.setCarrito(carrito+productos[1].precio);
            if (!(compras.includes(productos[1]))){
                productos[1].cant=1;
                compras.push(productos[1]);
            }else{

               productos[1].cant+=1;
            }
            compras.push(productos[1]);
            ver_carrito(productos[1]);
            let prod_storage=JSON.stringify(productos[1]);
            carrito_storage.push(prod_storage);
            localStorage.setItem("producto",carrito_storage);
        }
        else if(e.target.id=="boton_dos"){
            cliente_uno.setCarrito(carrito+productos[2].precio);
            if (!(compras.includes(productos[2]))){
                productos[2].cant=1;
                compras.push(productos[2]);
            }else{

               productos[2].cant+=1;
            }
            compras.push(productos[2]);
            ver_carrito(productos[2]);
            let prod_storage=JSON.stringify(productos[2]);
            carrito_storage.push(prod_storage);
            localStorage.setItem("producto",carrito_storage);
        }
        else if(e.target.id=="boton_tres"){
            cliente_uno.setCarrito(carrito+productos[3].precio);
            if (!(compras.includes(productos[3]))){
                productos[3].cant=1;
                compras.push(productos[3]);
            }else{

               productos[3].cant+=1;
            }
            compras.push(productos[3]);
            ver_carrito(productos[3]);
            let prod_storage=JSON.stringify(productos[3]);
            carrito_storage.push(prod_storage);
            localStorage.setItem("producto",carrito_storage);
        }
        else if(e.target.id=="boton_cuatro"){
            cliente_uno.setCarrito(carrito+productos[4].precio);
            if (!(compras.includes(productos[4]))){
                productos[4].cant=1;
                compras.push(productos[4]);
            }else{

               productos[4].cant+=1;
            }
            compras.push(productos[4]);
            ver_carrito(productos[4]);
            let prod_storage=JSON.stringify(productos[4]);
            carrito_storage.push(prod_storage);
            localStorage.setItem("producto",carrito_storage);
        }
        else if(e.target.id=="boton_cinco"){
            cliente_uno.setCarrito(carrito+productos[5].precio);
            if (!(compras.includes(productos[5]))){
                productos[5].cant=1;
                compras.push(productos[5]);
            }else{

               productos[5].cant+=1;
            }
            compras.push(productos[5]);
            ver_carrito(productos[5]);
            
            let prod_storage=JSON.stringify(productos[5]);
            carrito_storage.push(prod_storage);
            localStorage.setItem("producto",carrito_storage);
        }
        else if(e.target.id=="boton_seis"){
            cliente_uno.setCarrito(carrito+productos[6].precio);
            if (!(compras.includes(productos[6]))){
                productos[6].cant=1;
                compras.push(productos[6]);
            }else{

               productos[6].cant+=1;
            }
            compras.push(productos[6]);
            ver_carrito(productos[6]);
            let prod_storage=JSON.stringify(productos[6]);
            carrito_storage.push(prod_storage);
            localStorage.setItem("producto",carrito_storage);
        }
        else if(e.target.id=="boton_siete"){
            cliente_uno.setCarrito(carrito+productos[7].precio);
            if (!(compras.includes(productos[7]))){
                productos[7].cant=1;
                compras.push(productos[7]);
            }else{

               productos[7].cant+=1;
            }
            compras.push(productos[7]);
            ver_carrito(productos[7]);
            let prod_storage=JSON.stringify(productos[7]);
            carrito_storage.push(prod_storage);
            localStorage.setItem("producto",carrito_storage);
        }
        else if(e.target.id=="boton_ocho"){
            cliente_uno.setCarrito(carrito+productos[8].precio);
            if (!(compras.includes(productos[8]))){
                productos[8].cant=1;
                compras.push(productos[8]);
            }else{

                productos[8].cant+=1;
            }
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
    carrito.innerHTML=`Valor actual: ${cliente_uno.getCarrito()}`;
    curso_mas_caro(compras);
    Swal.fire({
        icon: "success",
        title: "Compra finalizada",
        showCloseButton: true,
        focusConfirm: false,
        confirmButtonText:
            '<i class="fa fa-thumbs-up"></i> Great!',
        confirmButtonAriaLabel: 'Thumbs up, great!',
        footer: "<a href='cursos.html'>Volver al menú de compras</a>",
    })
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

/*

let boton_comprar=document.getElementById("finalizar_compra");
boton_comprar.addEventListener("click",function(e){
//puedo reemplazar la tabla por el listado de productos y el precio final



})










/*
let boton_eliminar= document.getElementsByClassName("boton_eliminar");
for (boton of boton_eliminar){
    boton.addEventListener("click",function(e){
        let carrito=cliente_uno.getCarrito();
/*
        let msj=document.getElementById("contenedor_añadir");
        let parrafo=document.createElement("p");
        parrafo.innerText="Curso eliminado del carrito!";
        msj.append(parrafo);
*//*
        if(e.target.id=="boton_cero"){
            if (compras.includes(productos[0])){
                cliente_uno.setCarrito(carrito-productos[0].precio);
                //pos= compras.indexOf(productos[0]);
                //compras.splice(pos,1);
                productos[0].cant=productos[0].cant-1;
            }
        }
        else if(e.target.id=="boton_uno"){
            if (compras.includes(productos[1])){
                cliente_uno.setCarrito(carrito-productos[1].precio);
                pos= compras.indexOf(productos[1]);
                compras.splice(pos,1);
                productos[1].cant=productos[1].cant-1;
            }
        }
        else if(e.target.id=="boton_dos"){
            if (compras.includes(productos[2])){
                cliente_uno.setCarrito(carrito-productos[2].precio);
                pos= compras.indexOf(productos[2]);
                compras.splice(pos,1);
            }
        }
        else if(e.target.id=="boton_tres"){
            if (compras.includes(productos[3])){
                cliente_uno.setCarrito(carrito-productos[3].precio);
                pos= compras.indexOf(productos[3]);
                compras.splice(pos,1);
            }
        }
        else if(e.target.id=="boton_cuatro"){
            if (compras.includes(productos[4])){
                cliente_uno.setCarrito(carrito-productos[4].precio);
                pos= compras.indexOf(productos[4]);
                compras.splice(pos,1);
            }
        }
        else if(e.target.id=="boton_cinco"){
            if (compras.includes(productos[5])){
                cliente_uno.setCarrito(carrito-productos[5].precio);
                pos= compras.indexOf(productos[5]);
                compras.splice(pos,1);
            }
        }
        else if(e.target.id=="boton_seis"){
            if (compras.includes(productos[6])){
                cliente_uno.setCarrito(carrito-productos[6].precio);
                pos= compras.indexOf(productos[6]);
                compras.splice(pos,1);
            }
        }
        else if(e.target.id=="boton_siete"){
            if (compras.includes(productos[7])){
                cliente_uno.setCarrito(carrito-productos[7].precio);
                pos= compras.indexOf(productos[7]);
                compras.splice(pos,1);
            }
        }
        else if(e.target.id=="boton_ocho"){
            if (compras.includes(productos[8])){
                cliente_uno.setCarrito(carrito-productos[8].precio);
                pos= compras.indexOf(productos[8]);
                compras.splice(pos,1);// me sirve para ir sabiendo el precio final del carrito
                productos[8].cant=productos[8].cant-1;
            }
        }

    });
}*/







//programa ppal

/*
let compras=[];
let cantidad_compras=[];

//let contenedor = document.getElementById("contenedorPrueba");
//let div = document.createElement("div");
//div.innerHTML="<p> Nombre: ${cliente_uno.nombre}";
//contenedor.appendChild(div);


let tipo_cliente=cliente_uno.es_cliente(cliente_uno.cursos); 
cliente_uno.saludar(tipo_cliente); 


let carrito_final=comprar_cursos(0,productos,compras,cantidad_compras); 
console.log("El total de la compra es de $",carrito_final); 


precio_final=promocion(cliente_uno.cursos,carrito_final);
cliente_uno.setCarrito(precio_final);


console.log("Hoy", fecha_hoy(),"se realizaron ",cantidad_compras.length,"compras");


console.log("------------------------------------");

cliente_uno.saludo_final();







*/