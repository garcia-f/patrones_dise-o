export class Inventario {
    private static instancia: Inventario;
    private equipo: { nombre: string, tipo: string, estado: string } = { nombre: "", tipo: "", estado: "" };

    constructor() {}

    public static obtenerInstancia(): Inventario {
        if(!Inventario.instancia) {
            Inventario.instancia = new Inventario();
        }
        return Inventario.instancia;
    }

    public agregarEquipo(nombre: string, tipo: string, estado: string): void {
        this.equipo = { nombre: nombre, tipo: tipo, estado: estado };
    }

    public listarEquipo(): { nombre: string, tipo: string, estado: string } {
        return this.equipo;
    }

}