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

function mostrar_cursos(){

    console.log("<---------CURSOS ---------->");
    console.log(" (1) Curso de Educación Básica para Cachorros");
    console.log(" (2) Curso de Modificación de Conductas");
    console.log(" (3) Curso de Agility");
    console.log(" (4) Curso de Protección Civil");
    console.log(" (5) Curso de Búsqueda");
    console.log(" (6) Seminario Miedos y Fobias");
    console.log(" (7) Seminario Ansiedad");
    console.log(" (8) Seminario Conductas Agresivas");
    console.log(" (9) Seminario Mejorar tus Paseos");
    console.log(" (-1) Volver");
}

function comprar_cursos(total=0){
    let compra= parseInt(prompt("Elija un curso o -1 para terminar: "));
    while (compra != -1){
        if (compra<1 || compra>9){
            console.log("Error. Ingrese un número válido");
        }
        if (compra==1){
            console.log("Precio= 9300");
            console.log("Añadido al carrito!");
            total=total+9300;
        }
        else if (compra==2){
            console.log("Precio= 12180");
            console.log("Añadido al carrito!");
            total=total+12180;
        }
        else if (compra==3){
            console.log("Precio= 7200");
            console.log("Añadido al carrito!");
            total=total+7200;
        }
        else if (compra==4 || compra==5){
            console.log("Precio= 15200");
            console.log("Añadido al carrito!");
            total=total+15200;
        }
        else if (compra==6 || compra==7 || compra==8){
            console.log("Precio= 5300");
            console.log("Añadido al carrito!");
            total=total+5300;
        }

        else if (compra==9){
            console.log("Precio= 2500");
            console.log("Añadido al carrito!");
            total=total+2500;
        }
        console.log("-------------------------");
        
        compra= prompt("Elija uno o -1 para salir: ");
    }
    return total;
}

function promocion(cant_cursos,precio){
    if(cant_cursos>5){
        precio=precio*0.5;
        console.log("Debido a haber realizado más de 5 cursos en la escuela tiene un descuento del 50%. El total de la compra es de $",precio);
    }
    else if (cant_cursos>2){
        precio=precio*0.3;
        console.log("Debido a haber realizado más de 2 cursos en la escuela tiene un descuento del 30%. El total de la compra es de $",precio);
    }
    return precio;
}


//programa ppal

let array_clientes=[];
let clientes_monto_alto=[];

let cant_clientes= prompt("ingrese cantidad de clientes: "); // para el desafio de arrays, no para mi proyecto final (no tendria sentido)
for (let i=0; i<cant_clientes;i++){
    let nombre=prompt("Ingrese su nombre: ");
    let apellido=prompt("Ingrese su apellido: ");
    let email=prompt("Ingrese su email: ");
    let cursos=parseInt(prompt("Ingrese cantidad de cursos realizados en la escuela: "));

    let cliente_uno=new Cliente(nombre,apellido,email,cursos);

    array_clientes.push(cliente_uno);
    
}
//let cliente_uno=new Cliente(prompt("Ingrese su nombre: "),prompt("Ingrese su apellido: "),prompt("Ingrese su email: "),parseInt(prompt("Ingrese cantidad de cursos realizados en la escuela: "))) // cargo los datos

// imprimo los datos
//console.log("Nombre: ",cliente_uno.nombre);
//console.log("Apellido: ", cliente_uno.apellido);
//console.log("E-mail: ", cliente_uno.email);
//console.log("Cantidad de cursos realizados en la escuela: ", cliente_uno.cursos);

//console.log("-------------------------");

for (let cliente of array_clientes){
    console.log("Nombre: ", cliente.nombre);
    console.log("Apellido: ", cliente.apellido);
    console.log("E-mail: ", cliente.email);
    console.log("Cantidad de cursos realizados en la escuela: ", cliente.cursos);

    console.log("-------------------------");

    let tipo_cliente=cliente.es_cliente(cliente.cursos); // checkeo si es cliente nuevo o frecuente
    cliente.saludar(tipo_cliente); // saludo al usr
    console.log("-------------------------");

    mostrar_cursos() // muestro productos para comprar

    let carrito_final=comprar_cursos() // cargo el carrito
    console.log("El total de la compra es de $",carrito_final); // precio sin promo

    precio_final=promocion(cliente.cursos,carrito_final);
    cliente.setCarrito(precio_final);
    cliente.saludo_final();
}

console.log("Clientes de hoy:",array_clientes);
console.log("La escuela hoy recibio compras de ",array_clientes.length, " personas");

// no creo funciones para esto ya que son solo para cumplir con el desafio de los arrays
for (let cliente of array_clientes){
    if (cliente.carrito>30000){
        clientes_monto_alto.push(cliente);
    }
}

if (clientes_monto_alto.length!=0){
    console.log("Clientes con monto de compra mayor a los $30.000:",clientes_monto_alto);
}else{
    console.log("Ninguna compra supero los $30.000");
}