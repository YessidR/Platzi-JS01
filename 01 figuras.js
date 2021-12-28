// Este es el código del cuadrado
console.group("Cuadrado");

function perimetroCuadrado(lado) {
    return (lado * 4);
} 

function areaCuadrado (lado) {
    return (lado * lado);
}

console.groupEnd();

// Este es el código del triáungulo
console.group("Triangulo")

function perimetroTriangulo(lado1, lado2, base) {
    return (lado1 + lado2 + base);
} 

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
} 

// console.log("El área del triángulo es: "+ areaTriangulo +" cm^2");
console.groupEnd();

// Este es el código del circulo
console.group("Circulo")

const PI = Math.PI;

function diametroCirculo(radio){
    return (radio * 2);
}

function perimetroCirculo(radio){
    const diametro = diametro(radio);
    return (diametro * PI);
}

function area(radio){
    return (radio * radio * PI)
};

console.groupEnd();

// Inicia interacción con HTML
// Funcion del cuadrado en html
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

// Funcion de la altura del triángulo
function trianguloIsosceles(){
    const lado1 = document.getElementById("InputLado1");
    const value1 = lado1.value;
    console.log(value1);

    const lado2 = document.getElementById("InputLado2");
    const value2 = lado2.value;
    console.log(value2);

    const lado3 = document.getElementById("InputLado3");
    const value3 = lado3.value;
    console.log(value3);

    if (value1 == value2){
        const valor = ((value1 * value2) - ((value3 * value3) / 4));
        const altura = Math.sqrt(valor);
        console.log(altura);
        alert(altura);
    } else {
        alert("No es un triángulo isosceles")
    }
}