/* ESTE ARCHIVO CONTIENE LAS VARIABLES GENERALES PARA EL DESARROLO DE QUIRON FUERZA */
class Paquete {
    constructor(id, name, service, turns, price, dispo){
        this.id = id;
        this.name = name;
        this.service = service;
        this.turns = turns;
        this.price = price;
        this.dispo = dispo;
    }
}
let paquetes = [];
paquetes.push (new Paquete (1,"Paquete Basico UNO","2 veces por semana","Simple turno",2500,5));
paquetes.push (new Paquete (2,"Paquete Basico DOS","3 veces por semana","Doble turno",3000,2));
paquetes.push (new Paquete (3,"Paquete Premium UNO","2 veces por semana","Simple turno",3500,6));
paquetes.push (new Paquete (4,"Paquete Premium DOS","3 veces por semana","Doble turno",4000,4));

const selectQ = "Indique la cant. de paquetes que desea (Debera enviarnos luego por mail los datos de los beneficiaros de cada paquete)";
let cart = 0;
let resp = `Si`;
let divPaquete = document.createElement("div");
divPaquete.innerHTML=`<h2>Estos son nuestros Paquetes de servicio:</h2>`;
document.getElementById("showProd").appendChild(divPaquete);