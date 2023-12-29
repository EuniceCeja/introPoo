/* Paradigmas de programación 

Programación Imperativa: Se basa en instrucciones detalladas ejecutando un flujo o una secuencia determinada

Programación basada en eventos: Se basa en la gestión y respuesta de eventos

Programación declarativa: Explicar lo que queremos obtener.

Programación orientada a objetos: Toma cierta información o estructura del mundo real (objetos) para poder explicar ciertas cosas, como sus características (propiedades o atributos) y sus comportamientos o acciones (métodos).

*/

//Clases: Plantillas para crear objetos. Nos ayudan a definir un tipo de objeto y crear instancias de este tipo de objeto.

//EJEMPLO:
/* class Animal {
   sonido() {
     console.log('Hace un sonido genérico');
   }
 }
 
 class Perro extends Animal {
   sonido() {
     console.log('Guau guau');
   }
 }
 
 class Gato extends Animal {
   sonido() {
     console.log('Miau');
   }
 }
 
 const perro = new Perro();
 const gato = new Gato();
 
 perro.sonido();  
 gato.sonido(); */

class persona { //Clase principal 
    nombre = "";
    apellido = "";
    edad = 0;
    email = "";
    telefono = "";

    //Objetos
    //El constructor es una función especial, cuya finalidad es la de construir o instanciar objetos
    //Para indicializar un objeto es necesario definir un constructor que tomará los atributos
    //clases = molde Objeto = gomita constructor = chefsitx atributos = ingredientes métodos = comportamientos 

    constructor(nombre, apellido, edad, email, telefono) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.email = email;
        this.telefono = telefono;
    }

    comer() {
        console.log("Bon apetit");
    } //método comer

    bailar() {
        console.log("Dale hasta el suelo");
    } // método bailar

    escribir() {
        console.log("Poema a la madre");
    }

    mostrarInfo() {
        console.log("Nombre: ", this.nombre);
        console.log("Apellido: ", this.apellido);
        console.log("Edad: ", this.edad);
        console.log("Email: ", this.email);
        console.log("Teléfono: ", this.telefono);
    }
}
//Instanciar objetos
let usuario1 = new persona("Fernanda", "Ramos", 31, "fe@gmail.com", "5556352554");
let usuario2 = new persona("Daira", "Ceja", 23, "dai@gmail.com", "5533567543");
let usuario3 = new persona("Eunice", "Ceja", 30, "euceja@gmail.com", "45676534335");
let usuario4 = new persona("Rocio", "Hernandez", 29, "rohdz@gmail.com", "4566765443");
let usuario5 = new persona("Gabriela", "Cortes", 26, "gaby@gmail.com", "4567643457");

console.log(usuario1); //Imprimir objeto completo
console.log(usuario4.email); //Imprimir un atributo en específico
console.log(usuario1.email, usuario2.email, usuario3.email, usuario4.email, usuario5.email);

usuario4.comer(); //Invocar el método
usuario5.bailar();
usuario1.comer();
usuario2.escribir();
usuario2.mostrarInfo();
console.log(usuario3.telefono, usuario5.apellido);

//Pilares de la programación orientada a objetos

/*  Herencia
    Polimorfismo
    Encapsulamiento
    Abstracción
 */

// Herencia nos permite heredar a clases inferiores para poder optimizar el programa, con menos atributos y más específicos
class arrendador extends persona { //Subclase, extends+clase principal
    capacidad = 0;
    costo = 0;
    nombreLugar = "";

    constructor(nombre, apellido, edad, email, telefono, capacidad, costo, nombreLugar) {
        super(nombre, apellido, edad, email, telefono);
        this.capacidad = capacidad;
        this.costo = costo;
        this.nombreLugar = nombreLugar;
    }

    mostrarInfo() {
        console.log("Capacidad", this.capacidad);
        console.log("Costo", this.costo);
        console.log("Nombre del lugar", this.nombreLugar);
    }
}


/* class arrendadorGuadalajara extends arrendador { //clase + nombre + extends + subclase(de quien hereda)
} */
let arrendador1 = new arrendador("Rocio", "Hernandez", 29, "rocio@gmail.com", "456753434667", 100, 50000, "Salón G");
console.log(arrendador1);
console.log(arrendador1.nombre);

arrendador1.mostrarInfo();


/*  Polimorfismo:
    Tener objetos de diferentes tipos que pueden ser manipulados en común. 
    Nota: la posibilidad de realizar cambios en distintos objetos que comparten atributos en común
    Proviene de Poli = muchas, morfismo = formas. Se utiliza para crear métodos con el mismo nombre pero con diferente comportamiento.

    Ejemplo de Polimorfismo:

class Animal {
    sonido() {
        console.log('Hace un sonido genérico');
    }
}

class Perro extends Animal {
    sonido() {
        console.log('Guau guau');
    }
}

class Gato extends Animal {
    sonido() {
        console.log('Miau');
    }
}

const perro = new Perro();
const gato = new Gato();

perro.sonido(); //el mismo método sonido(), para perro muestra "guau guau"
gato.sonido(); //el mismo método sonido(), para gato muestra "miau"
 */
class producto { //clase padre
    marca = "";
    precio = 0;

    constructor(marca, precio) {
        this.marca = marca;
        this.precio = precio;
    }

    mostrarDescripcion() {
        console.log("Marca ");
        console.log("Precio ");
    }
}

let producto1 = new producto("Cerave", 85);

/*  Encapsulamiento:
    Ocultar la implementación de un objeto y sólo mostrar los datos necesarios
 */

class Usuario {
    #contraseña;

    constructor(userName, correo, contraseña) {
        this.userName = userName;
        this.correo = correo;
        this.contraseña = contraseña;
    }
    verificarContraseña(contraseña) {
        return this.#contraseña === contraseña;
    }

}

/*Abstracción es traer objetos del mundo real y poder aplicarlos a la programación mediante clases, métodos, constructores y objetos. Objeto Json facilita la interpretación ya que viene en "" (string) */

//Los objetos de tipo Json en un formato de intercambio de datos ligero, accesible, estructurado, manipulable (DOM) y que nos brindan una mejor comunicación entre el cliente y el servidor. Esto gracias a que son más flexibles y generalmente se ejecutan con fetch.

let objetoJson = {
    "nombre" : "Juanin",
    "apellido" : "Juan Harry",
    "edad" : 31,
    "email": "juanin@gnail.com",
    "telefono": "5574980693",

}


console.log(objetoJson);

let objetoLiteral = {
    nombre: "Juanin",
    apellido: "Juan Harry",
    edad: 31,
    email: "juanin@gnail.com",
    telefono: "5574980693",

}


console.log(objetoLiteral);
  
//Principios Solid === 
/* 
    -Principio de responsabilidad unica(Single Responsability Principle SRP).
    Una clase de tener asignada una tarea o responsabilidad específica y esta no debería de cambiar.
    -Principio abierto/cerrado (open/close principle OCP).
    Una clase puede estar abierta a extensiones y agregar nuevas funcionalidades, pero sin generar cambios en la misma.
    -Principio de sustitución de Liskov (Liskov Substitution Principle LSP).
    Una clase hijo puede sustituir objetos de una clase padre.
    -Principio de segregación de interfaces (Interface Segregation Principle ISP).
    Delimitar los métodos y dejas fuera los innecesarios.
    -Principio de inversión de dependencias (Dependency Inversion Principle).

 */

/*Programa que conste de una clase llamada alumno que tenga como atributos: nombre y calificación. 
Definir los métodos para inicilizar sus atributos (constructor), imprimirlos y mostrar un mensaje con el resultado de si la calificación es aprobatoria o no.

Atributos
nombre
calificación

metodos
imprimir calificación 
Evaluación

calificacion aprobatoria es de 6
if para evaluar calificación 
*/
class alumno {
    nombre = "";
    calificacion = 0;

    constructor (nombre, calificacion){
        this.nombre = nombre;
        this.calificacion = calificacion;
    }
    imprimirCalificacion(){
        console.log(`Tu calificación es ${this.calificacion}`);
    }
    evaluacion(){
        if(this.calificacion >= 6){
            console.log(`Aprobaste ${this.nombre}`);
        } else{
            console.log(`Reprobaste ${this.nombre}`);
        }
    }
}

let alumno1 = new alumno ("Rene", 9);
let alumno2 = new alumno ("Abi", 4);
let alumno3 = new alumno ("Karen", 10);
let alumno4 = new alumno ("Baruch", 10);
let alumno5 = new alumno ("Eunice", 2);
let alumno6 = new alumno ("Oswaldo", 20);
let alumno7 = new alumno ("Montse", 8);
let alumno8 = new alumno ("Emiliano", 7);
let alumno9 = new alumno ("David", 1);

console.log(alumno1, alumno2, alumno3, alumno4, alumno5, alumno6, alumno7, alumno8, alumno9);
alumno1.evaluacion();
alumno1.imprimirCalificacion();
alumno2.evaluacion();
alumno2.imprimirCalificacion();