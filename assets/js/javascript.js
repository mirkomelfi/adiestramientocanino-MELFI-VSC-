//constructor

class Cliente{
    constructor (nombre,apellido,email,cursos){
        this.nombre=nombre;
        this.apellido=apellido;
        this.email=email;
        this.cursos=cursos;
        this.carrito;
    }
    setCarrito (valor){
        this.carrito=valor;
    }

    es_cliente(cantidad){
        let clienteRegular=false;
        if (cantidad>0){
            clienteRegular=true;
        }
        return clienteRegular;
    }
    saludar(cliente){
        if (cliente){
            console.log("Hola de nuevo,",this.nombre,"!");
        }else{
            console.log("Bienvenido",this.nombre,"!");
        }

    }
    saludo_final(){
        console.log("Gracias por su compra,",this.nombre," ¡Lo esperamos pronto!");
    }
}

//funciones

function mostrar_cursos(array_productos){
    console.log("<---------CURSOS ---------->");
    for (let producto of array_productos){
        console.log(producto.nombre);
    } 
    console.log(" (-1) Volver");
    console.log("------------------------------------");
}



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

//programa ppal

let cliente_uno=new Cliente(prompt("Ingrese su nombre: "),prompt("Ingrese su apellido: "),prompt("Ingrese su email: "),parseInt(prompt("Ingrese cantidad de cursos realizados en la escuela: "))) // cargo los datos
let productos=[
    {nombre: "(1) Curso de Educación Básica para Cachorros", precio:9300, modalidad:"Presencial"},
    {nombre: "(2) Curso de Modificación de Conductas", precio:12180, modalidad:"Presencial"},
    {nombre: "(3) Curso de Agility", precio:7200, modalidad:"Online"},
    {nombre: "(4) Curso de Protección Civil", precio:15200, modalidad:"Presencial"},
    {nombre: "(5) Curso de Búsqueda", precio:15200, modalidad:"Presencial"},
    {nombre: "(6) Seminario Miedos y Fobias", precio:5300, modalidad:"Online"},
    {nombre: "(7) Seminario Ansiedad", precio:5300, modalidad:"Online"},
    {nombre: "(8) Seminario Conductas Agresivas", precio:5300, modalidad:"Presencial"},
    {nombre: "(9) Seminario Mejorar tus Paseos", precio:2500, modalidad:"Online"},
];
let compras=[];
let cantidad_compras=[];


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







