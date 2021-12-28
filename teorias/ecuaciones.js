// Este es el código del cuadrado
console.group("Cuadrado");
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: "+ ladoCuadrado +"cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perímetro del cuadrado es: "+ perimetroCuadrado +" cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El área del cuadrado es: "+ areaCuadrado +"cm^2");
console.groupEnd();

// Este es el código del triáungulo
console.group("Triangulo")
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;

console.log("Los lados del tiránguo miden: "+
    ladoTriangulo1 +
    "cm, "
    + ladoTriangulo2 
    +"cm, "
    + baseTriangulo +
    "cm."
);

const alturaTriangulo = 5.5;
console.log("La altura del tiránguo es: "+alturaTriangulo+"cm");

const perimetroTriangulo = ladoTriangulo1+ladoTriangulo2+baseTriangulo
console.log("El perímetro del triángulo es: "+ perimetroTriangulo +" cm");

const areaTriangulo = (baseTriangulo*alturaTriangulo)/2;
console.log("El área del triángulo es: "+ areaTriangulo +" cm^2");
console.groupEnd();

// Este es el código del circulo
console.group("Circulo")
const radioCirculo = 4;
const diametroCirculo = 2 * radioCirculo;
const PI = Math.PI;
console.log("El radio del cículo es: "+radioCirculo+"cm");
console.log("El diametro del cículo es: "+diametroCirculo+"cm");
console.log("El valor de PI es: "+PI);

const perimetroCirculo = PI * diametroCirculo
console.log("El peímetro del cículo es: "+perimetroCirculo+"cm");

const areaCirculo = (radioCirculo*radioCirculo) * PI;
console.log("El área del cículo es: "+areaCirculo+"cm^2");

console.groupEnd();