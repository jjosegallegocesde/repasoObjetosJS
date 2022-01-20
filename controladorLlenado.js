
//arreglo de objetos 
let productos=[

    {nombre:"Aguardiente Tapa Roja",tamano:"1/2 Botella",precio:200000,foto:"img/taparoja.png"},
    {nombre:"Aguardiente Tapa Azul",tamano:"1/2 Botella",precio:220000,foto:"img/tapazul.png"},
    {nombre:"Tequila Don Julio",tamano:"1 Botella Grande",precio:300000,foto:"img/donjulio.png"},
    {nombre:"Cerveza Aguila",tamano:"1 Botella",precio:8000,foto:"img/aguila.png"},
    {nombre:"Cerveza Pilsen",tamano:"1 Botella",precio:7000,foto:"img/pilsen.png"},
    {nombre:"Ron Medellin",tamano:"1/2 Botella",precio:220000,foto:"img/ronmedellin.png"},
    {nombre:"Ron Añejo 220 años De Caldas",tamano:"1/2 Botella",precio:100000,foto:"img/roncaldas.png"},
    {nombre:"Agua",tamano:"1 Botella",precio:4000,foto:"img/awa.png"},
    {nombre:"Soda",tamano:"1 Botella",precio:6000,foto:"img/soda.png"},
    {nombre:"Gatorade",tamano:"1 Botella",precio:9000,foto:"img/gatorade.png"}
]

let productos2=[1,2,3,4,5,6]

//crear una referencia a la etiqueta fila
let fila=document.getElementById("fila")

//Recorrer el arreglo y sacarle fotocopia a la informacion que hay por dentro
productos.forEach(function(producto){
   
    let columna=document.createElement("div")
    columna.classList.add("col")

    let tarjeta=document.createElement("div")
    tarjeta.classList.add("card")
    tarjeta.classList.add("h-100")

    let imagen=document.createElement("img")
    imagen.classList.add("card-img-top")
    imagen.classList.add("h-50")
    imagen.classList.add("p-3")
    imagen.src=producto.foto

    let nombreProducto=document.createElement("h4")
    nombreProducto.textContent=producto.nombre

    //PADRES E HIJOS
    tarjeta.appendChild(imagen)
    tarjeta.appendChild(nombreProducto)

    columna.appendChild(tarjeta)

    fila.appendChild(columna)


})