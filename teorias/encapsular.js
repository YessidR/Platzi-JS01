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