import { EquipoFactory } from "./Patrones/FactoryMethod/factoryMethod";
import { Inventario } from "./Patrones/Singleton/singleton";



// Ejercicio 1: Implementar Patrón Singleton para el Inventario
// const inventario = Inventario.obtenerInstancia();
// inventario.agregarEquipo("Notebook HP", "Portátil", "disponible");
// console.log(inventario.listarEquipo());



// Ejercicio 2: Implementar Patrón Factory Method para Crear Equipos
const factory = new EquipoFactory();
const notebook = factory.crearEquipo("Notebook", "Dell XPS", "16GB", "i7");
console.log(notebook.detalles());