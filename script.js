const servicios = [
  { nombre: "auto", precio: 100 },
  { nombre: "Sillon", precio: 200 },
  { nombre: "Colchon", precio: 300 },
  { nombre: "Alfombra", precio: 400 },
  { nombre: "Silla", precio: 500 },
];
let carrito = []

let seleccion = prompt("Desea contratar algún servicio? Ingrese si/no")

while (seleccion != "si" && seleccion != "no"){
    alert("Responda por si o por no")
    seleccion = prompt("Desea contratar algún servicio ? Ingrese si/no")
}
if(seleccion  == "si"){
    alert("A continuación lista precios")
    let todosServicios = servicios.map(
        (servicio) => servicio.nombre + " " + "$" + servicio.precio 
    );
    alert(todosServicios.join(" - "))
}else if (seleccion == "no"){
    alert("Gracias por consultarnos")
}

while(seleccion != "no"){
    let servicio = prompt(" Qué desea limpiar? (auto, sillon, colchon, alfombra o silla)")
    let precio = 0

    if( servicio == "auto" || servicio == "sillon" || servicio == "colchon" || 
    servicios == "alfombra" || servicio == "silla" ) {
        switch (servicio) {
            case "auto":
                precio = 100;
                break;
            case "sillon":
                precio = 200;
                break;
            case "colchon":
                precio = 300;
                break;    
            case "alfombra":
                precio = 400;
                break;  
            case "silla":
                precio = 500;
                break;
            default:
                break;
        }
        let cant = parseInt(prompt("ingrese cantidad"))

        carrito.push({servicio, cant, precio})
        console.log(carrito)

    } else {
        alert("Por el momento no contamos con ese servicio")
    }
    seleccion = prompt("Queres limpiar otro tapizado ? Ingrese si/no")

    while (seleccion == "no") {
        alert("Gracias por elegirnos")
        carrito.forEach((carritoFinal) => {
            console.log(`servicio: ${carritoFinal.servicio},
             cantidad: ${carritoFinal.cant}, total a pagar 
             por serevicio contratado $ ${carritoFinal.cant * carritoFinal.precio}`)
        })
        break;
    }
}

const total = carrito.reduce((acu, el) => acu + el.precio * el.cant, 0)
console.log(`el total a pagar es: $ ${total}`)


