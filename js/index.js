
/* let nombre = prompt (`Ingrese su Nombre`);
while (nombre== "") {
    console.log (`no ingreso nada`);
    nombre = prompt (`Ingrese su NOMBRE, por favor`);
}
if (nombre !== "") {
    console.log (`nombre: ${nombre} ingresado`);
}else {
    console.log (`No ingreso nada`);
    nombre = prompt (`Ingrese su NOMBRE, por favor`);
}

let email = prompt (`Ingrese su Email`);
while (email== "") {
    console.log (`no ingreso nada`);
    email = prompt (`Ingrese su email, por favor`);
}
if (email !== "") {
    console.log (`email: ${email} ingresado`);
    }else {
    console.log (`No ingreso nada`);
    email = prompt (`Ingrese su email, por favor`);
} */


let buton1 = document.getElementById("paquete1");
let buton2 = document.getElementById("paquete2");
let buton3 = document.getElementById("paquete3");
let buton4 = document.getElementById("paquete4");
let buton5 = document.getElementById("paquete5");

updateCatalog(paquetes);

buton1.addEventListener("click", contratar1);

buton2.addEventListener("click", contratar2);

buton3.addEventListener("click", contratar3);

buton4.addEventListener("click", contratar4);

buton5.addEventListener("click", finish);



function contratar1(){
        let option = 1;
        let qty = parseInt(prompt(selectQ));
        addToCart (option, qty);
        if (cart>0){
            alert (`Servicio Agregado!`);
            console.log (`Su compra tiene un total de $${cart}`);
        }
    }
    function contratar2(){
    let option = 2;
    let qty = parseInt(prompt(selectQ));
    addToCart (option, qty);
    if (cart>0){
    alert (`Servicio Agregado!`);
    console.log (`Su compra tiene un total de $${cart}`);
    
}
}
function contratar3(){
    let option = 3;
    let qty = parseInt(prompt(selectQ));
    addToCart (option, qty);
    if (cart>0){
    alert (`Servicio Agregado!`);
    console.log (`Su compra tiene un total de $${cart}`);
    }
}
function contratar4(){
    let option = 4;
    let qty = parseInt(prompt(selectQ));
    addToCart (option, qty);
    if (cart>0){
    alert (`Servicio Agregado!`);
    console.log (`Su compra tiene un total de $${cart}`);
    }
}
function finish(){
    if (cart>0){
     alert (`Su compra tiene un total de $${cart}`);
     console.log (`Su compra tiene un total de $${cart}`);
    }
    updateCatalog(paquetes);
loadCatalog();
}
updateCatalog(paquetes);
loadCatalog();

