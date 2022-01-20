//ENTRADAS
const NOMBRE_CLIENTE="PEDRO CORAL"
let direccionCliente="doña nidia cr 100 # 10-20"
let telefonoCliente="6012908000"
let metodoPagoCliete="efectivo"

let nombreRepartidor="caliche tavera"
let identificacionRepartidor="1017854698"
let ubicacionRepartidor="unicentro cr 65 #85-20"

let nombreTienda="Los postres de doña chechi SAS"
let nombreProducto="Postre de Tiramizu"
let precioUnitarioProducto=40000
let cantidadProducto=2

const IVA=0.25

const tieneDescuento=true


//PROCESO PARA CALCULAR EL COSTO TOTAL DEL ENVIO
let valorNeto=precioUnitarioProducto*cantidadProducto
let ValorIva=valorNeto*IVA
let valorImpuesto=valorNeto+ValorIva
let valorTotal=valorImpuesto-10000

//COPIA DE SEBASTIAN


let valorTotal=(precioUnitarioProducto*cantidadProducto+valorNeto*IVA)-10000

// salida

console.log("................................................... ")
console.log("...................RAPPI...........................")
console.log("...................................................")
console.log(`Nombre del Producto: ${nombreProducto}`)
console.log(`Precio Unitario: ${precioUnitarioProducto}`)
console.log(`cantidad de producto: ${cantidadProducto}`)
console.log(`Precio total: ${valorTotal}`)


