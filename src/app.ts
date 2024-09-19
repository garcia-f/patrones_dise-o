import { Inventario } from "./Patrones/Singleton/singleton";




// Ejercicio 1: Implementar Patrón Singleton para el Inventario
const inventario = Inventario.obtenerInstancia();
inventario.agregarEquipo("Notebook HP", "Portátil", "disponible");
console.log(inventario.listarEquipo());