// const precioOriginal = 120;
// const descuento = 18;

function calcularPrecioConDescuento (precio, descuento){
    
    const porcentajePrecioConDescuento = (100 - descuento);
    const precioConDescuento = (precio * porcentajePrecioConDescuento)/100;

    return precioConDescuento
}


function buttonPriceDiscount(){
    const inputPrice=document.getElementById("InputPrice");
    const priceValue = inputPrice.value;


    const inputDiscount=document.getElementById("InputDiscount");
    const discountValue = inputDiscount.value;

    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);

    //Imprime en la linea p, dentro del html
    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento es: $"+precioConDescuento;
}
//---------------------------------------------------------//

const coupons = [
    "25",
    "30",
    "ayuda",
]

const InputCoupon = document.getElementById("InputCoupon");
const couponValue = InputCoupon.value;

function onClickButtonPriceDiscount(){
    const inputPrice = document.getElementById("InputPrice");
    const proceValue = inputPrice.value;

    const inputCoupon = document.getElementById("InputCoupon");
    const couponValue = inputCoupon.value;

    let descuento;

    switch (couponValue) {
        case coupons[0]:
            descuento = 15;
        break;

        case coupons[1]:
            descuento = 20;
        break;

        case coupons[2]:
            descuento = 45;
    }

    const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);

  const resultP = document.getElementById("ResultP");
  resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
}



// El console.log recibe un objeto...
// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento
// })