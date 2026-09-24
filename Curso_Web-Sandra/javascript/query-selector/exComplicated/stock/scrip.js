
let producto = document.querySelectorAll(".producto");

for(let i=0; i < producto.length; i++){

    let textstock = producto[i].querySelector(".stock").textContent;
    let stock = parseInt(textstock.split(":")[1]);
    if(stock < 5){
        producto[i].style.backgroundColor = "mistyrose";
        producto[i].querySelector(".stock").textContent = `${textstock} ¡Ultimas unidades!`
    }else{
        producto[i].style.backgroundColor = "honeydew"
    }
}




// let productos = document.querySelectorAll(".producto");

// for (let i = 0; i < productos.length; i++) {
//     let stockTexto = productos[i].querySelector("p:last-child").textContent;
//     let stock = parseInt(stockTexto.replace(/\D/g, "")); // extrae el número

//     if (stock < 5) {
//         productos[i].style.backgroundColor = "mistyrose";
//         productos[i].querySelector("p:last-child").textContent = `${stockTexto} ¡Últimas unidades!`;
//     } else {
//         productos[i].style.backgroundColor = "honeydew";
//     }
// }

