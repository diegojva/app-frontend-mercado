import { Puesto } from "./puesto.model";
import { Sector } from "./sector.mode";
import { UnidadMedida } from "./unidadMedida.model";

export class Producto {
    id?:number;
    nombre: string;
    precio: number;
    stock: number;
    puesto: Puesto;
    sector: Sector;
    unidadMedida: UnidadMedida;
}
