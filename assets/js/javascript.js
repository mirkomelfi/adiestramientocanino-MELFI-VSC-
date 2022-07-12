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

function mas_caro_vendido(array_compras){
    let mayor=0;
    let pos=0;
    for (elemento of array_compras){
        if (elemento.precio>mayor){
            mayor=elemento.precio;
            pos=array_compras.indexOf(elemento);
        }
    }
    return array_compras[pos].nombre
}



function mas_vendido(array_compras){
    let mas_vendido=0;
    let pos_mas_vendido=0;
    for (elemento of array_compras){
        if (elemento.cant>mas_vendido){
            mas_vendido=elemento.cant;
            pos_mas_vendido=array_compras.indexOf(elemento);
        }
}
    return array_compras[pos_mas_vendido].nombre
}

function fecha_hoy(){
    return new Date()
}

function carrito_valor_alto(usr){
    return usr.carrito>=40000
}

function tiene_codigo(){
    let codigo= prompt("¿tienes codigo de descuento? SI/NO");
    if (codigo=="SI" || codigo=="SÍ" || codigo=="si" || codigo=="sí" || codigo=="Si" || codigo=="Sí"){
        codigo=prompt("Ingrese el código: ");
        alert("VALIDADO. TIENE 10% DE DESCUENTO")
        let productos_codigo=productos.map(descuento_codigo);
        productos=productos_codigo;
    }
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

function impresion(rdo){
    for (curso of rdo){
        console.log (curso.nombre);
    }
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
    
}

function loggear(){
    let nombre_usr= document.getElementById("nombre");
    let apellido_usr= document.getElementById("apellido");
    let cursos_usr= document.getElementById("cursos");
    let correo_usr= document.getElementById("correo");
    let codigo_usr= document.getElementById("codigo");
    let contenedor=document.getElementById("contenedorPrueba");
    contenedor.innerHTML=`<h3>LOGGEADO</h3><p>Nombre: ${nombre_usr.value}</p><p>Apellido: ${apellido_usr.value}</p><p>Cursos realizados: ${cursos_usr.value}</p><p>Correo: ${correo_usr.value}</p>`;
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


let boton_añadir= document.getElementsByClassName("boton_añadir");
for (boton of boton_añadir){
    boton.addEventListener("click",function(e){

        let carrito=cliente_uno.getCarrito();
        
        if(e.target.id=="boton_cero"){
            cliente_uno.setCarrito(carrito+productos[0].precio);
            if (!(compras.includes(productos[0]))){
                productos[0].cant=1;
                compras.push(productos[0]);
            }else{
               productos[0].cant=productos[0].cant+1;
            }
            ver_carrito(productos[0]);
            let prod_storage=JSON.stringify(productos[0]);
            carrito_storage.push(prod_storage);
            localStorage.setItem("producto",carrito_storage);
        }
        else if(e.target.id=="boton_uno"){
            cliente_uno.setCarrito(carrito+productos[1].precio);
            if (!(compras.includes(productos[1]))){
                productos[1].cant=1;
                compras.push(productos[1]);
            }else{

               productos[1].cant=productos[1].cant+1;
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

               productos[2].cant=productos[2].cant+1;
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

               productos[3].cant=productos[3].cant+1;
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

               productos[4].cant=productos[4].cant+1;
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

               productos[5].cant=productos[5].cant+1;
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

               productos[6].cant=productos[6].cant+1;
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

               productos[7].cant=productos[7].cant+1;
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

                productos[8].cant=productos[8].cant+1;
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

})


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

console.log("Nombre: ",cliente_uno.nombre);
console.log("Apellido: ", cliente_uno.apellido);
console.log("E-mail: ", cliente_uno.email);
console.log("Cantidad de cursos realizados en la escuela: ", cliente_uno.cursos);


console.log("------------------------------------");


mostrar_cursos(productos);


saber_presencial(productos);
console.log("------------------------------------");
saber_online(productos);
console.log("------------------------------------");


tiene_codigo();


let tipo_cliente=cliente_uno.es_cliente(cliente_uno.cursos); 
cliente_uno.saludar(tipo_cliente); 


let carrito_final=comprar_cursos(0,productos,compras,cantidad_compras); 
console.log("El total de la compra es de $",carrito_final); 


precio_final=promocion(cliente_uno.cursos,carrito_final);
cliente_uno.setCarrito(precio_final);


console.log("Hoy", fecha_hoy(),"se realizaron ",cantidad_compras.length,"compras");

console.log("El curso mas caro vendido hoy fue", mas_caro_vendido(compras));

console.log("El curso mas vendido hoy fue", mas_vendido(compras));

console.log("------------------------------------");

cliente_uno.saludo_final();







*/