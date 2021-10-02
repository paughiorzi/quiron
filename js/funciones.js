/* ESTE ARCHIVO CONTIENE LAS FUNCIONES NECESARIAS PARA EL DESARROLO DE QUIRON FUERZA */


const showMenu = () => {
    let menu = "escoge un Producto:\n";
    paquetes.forEach((paquete)=> {
        menu = menu + paquete.id + ".-" + paquete.name + "\n";
    });
    menu += (paquetes.length + 1) + ".-Salir";
    return parseInt(prompt(menu));
}

const inStock = (option, qty) => {
    let stock = paquetes.find(paquete => paquete.id === option).dispo;
    if(qty>stock){
        alert (`No tenemos stock, el maximo disponible es ${stock}`);
        return false;
    }
    else return true;
}

const addToCart = (option, qty)=> {
    let found = paquetes.find(paquete => paquete.id === option)
    if(inStock(option, qty)){
        cart += (qty * found.price);
        found.dispo=found.dispo-qty; /* descuento de lo q se lleva, en el stock */
        alert (`Su paquete: ${found.name} fue agregado a la cuenta`);
        console.log (`Usted contrato: ${qty}-> ${found.name}, ${found.service}, ${found.turns}.`);
    }
}


const updateCatalog=(paquetes)=>{
    localStorage.setItem(`paquetes`,JSON.stringify(paquetes));
}
const loadCatalog=()=>{
    JSON.parse(localStorage.getItem(`paquetes`)).forEach(paquete=> {show(paquete)});
}

const show=(paquete)=>{
    divPaquete.appendChild(buildTarjeta(paquete));        
}
const buildTarjeta=(paquete)=>{
    let tarjeta = document.createElement("div")
    tarjeta.classList.add("tarjeta");
    
    let nameProd = document.createElement("h3");
    nameProd.classList.add("nameProd");
    nameProd.innerHTML =`Nombre: ${paquete.name}`;
    tarjeta.appendChild(nameProd);
    
    let idProd = document.createElement("div");
    idProd.innerHTML =`ID del Paquete: ${paquete.id}`;
    tarjeta.appendChild(idProd);

    let serviceProd = document.createElement("div");
    serviceProd.innerHTML =`Cantidad: ${paquete.service}`;
    tarjeta.appendChild(serviceProd);

    let turnsProd = document.createElement("div");
    turnsProd.innerHTML =`Tipo: ${paquete.turns}`;
    tarjeta.appendChild(turnsProd);

    let priceProd = document.createElement("div");
    priceProd.innerHTML =`Precio: $${paquete.price}`;
    tarjeta.appendChild(priceProd);
    
    let dispoProd = document.createElement("div");
    dispoProd.innerHTML =`<p>Stock: ${paquete.dispo} </p></br>`;
    tarjeta.appendChild(dispoProd);

    return tarjeta;
}

