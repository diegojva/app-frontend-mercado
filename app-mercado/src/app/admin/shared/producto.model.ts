import { Puesto } from "./puesto.model";
import { Sector } from "./sector.model";
import { UnidadMedida } from "./unidadMedida.model";

export class Producto {
    id?:number;
    nombre: string;
    precio: number;
    stock: number;
    puesto: Puesto;
    sector: Sector;
    foto: string;
    unidadMedida?: UnidadMedida;
}
