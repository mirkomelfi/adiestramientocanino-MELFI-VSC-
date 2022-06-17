//constructor

class Cliente{
    constructor (nombre,apellido,email,cursos){
        this.nombre=nombre;
        this.apellido=apellido;
        this.email=email;
        this.cursos=cursos;
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

//programa ppal

let cliente_uno=new Cliente(prompt("Ingrese su nombre: "),prompt("Ingrese su apellido: "),prompt("Ingrese su email: "),parseInt(prompt("Ingrese cantidad de cursos realizados en la escuela: "))) // cargo los datos

// imprimo los datos
console.log("nombre",cliente_uno.nombre);
console.log("apellido", cliente_uno.apellido);
console.log("email", cliente_uno.email);
console.log("cursos", cliente_uno.cursos);

console.log("-------------------------");

let tipo_cliente=cliente_uno.es_cliente(cliente_uno.cursos); // checkeo si es cliente nuevo o frecuente

cliente_uno.saludar(tipo_cliente); // saludo al usr

console.log("-------------------------");

mostrar_cursos() // muestro productos para comprar

let carrito_final=comprar_cursos() // cargo el carrito

console.log("El total de la compra es de $",carrito_final); // precio sin promo

// promociones

if(cliente_uno.cursos>5){
    carrito_final=carrito_final*0.5;
    console.log("Debido a haber realizado más de 5 cursos en la escuela tiene un descuento del 50%. El total de la compra es de $",carrito_final);
}
else if (cliente_uno.cursos>2){
    carrito_final=carrito_final*0.3;
    console.log("Debido a haber realizado más de 2 cursos en la escuela tiene un descuento del 30%. El total de la compra es de $",carrito_final);
}

console.log("Gracias por su compra,",cliente_uno.nombre," ¡Lo esperamos pronto!");