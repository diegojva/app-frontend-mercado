import { NuevoVendedor } from "src/app/auth/shared/nuevoVendedor.model";
import { Sector } from "./sector.mode";

export class Puesto {
    id?:number;
    nombre: string;
    descripcion: string;
    vendedor: NuevoVendedor;
    sector: Sector;
}
