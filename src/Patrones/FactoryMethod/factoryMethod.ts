
interface Equipo {
    tipo: string,
    nombre: string;
    ram: string;
    procesador: string;
}

class Notebook implements Equipo {
    public tipo: string;
    public nombre: string;
    public ram: string;
    public procesador: string;

    constructor(tipo: string, nombre: string, ram: string, procesador: string) {
        this.tipo = tipo;
        this.nombre = nombre;
        this.ram = ram;
        this.procesador = procesador;
    }
    public detalles(): string {
        return `Tipo: ${this.tipo}, Nombre: ${this.nombre}, RAM: ${this.ram}, Procesador: ${this.procesador} clase 1`;
    }
}

class Desktop implements Equipo {
    public tipo: string;
    public nombre: string;
    public ram: string;
    public procesador: string;

    constructor(tipo: string, nombre: string, ram: string, procesador: string) {
        this.tipo = tipo;
        this.nombre = nombre;
        this.ram = ram;
        this.procesador = procesador;
    }

    public detalles(): string {
        return `Tipo: ${this.tipo}, Nombre: ${this.nombre}, RAM: ${this.ram}, Procesador: ${this.procesador} clase 2`;
    }
}

class Servidor implements Equipo {
    public tipo: string;
    public nombre: string;
    public ram: string;
    public procesador: string;

    constructor(tipo: string, nombre: string, ram: string, procesador: string) {
        this.tipo = tipo;
        this.nombre = nombre;
        this.ram = ram;
        this.procesador = procesador;
    }

    public detalles(): string {
        return `Tipo: ${this.tipo}, Nombre: ${this.nombre}, RAM: ${this.ram}, Procesador: ${this.procesador} clase3`;
    }
    
}


export class EquipoFactory {

    public crearEquipo(tipo: string, nombre: string, ram: string, procesador: string) {
        switch (tipo) {
            case "Notebook":
                return new Notebook(tipo, nombre, ram, procesador);
            case "Desktop":
                return new Desktop(tipo, nombre, ram, procesador);
            case "Servidor":
                return new Servidor(tipo, nombre, ram, procesador);
            default:
                throw new Error("Tipo no encontrado");
        }
    }


}

