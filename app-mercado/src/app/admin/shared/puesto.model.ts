import { NuevoVendedor } from "src/app/auth/shared/nuevoVendedor.model";
import { Market } from "src/app/cliente/shared/market.model";
import { Sector } from "./sector.model";

export class Puesto {
    id?:number;
    nombre: string;
    descripcion: string;
    estado: string;
    vendedor?: any;
    sector: Sector;
    mercado: Market
}
