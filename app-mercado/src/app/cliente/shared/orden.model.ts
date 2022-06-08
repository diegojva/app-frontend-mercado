import { Despachador } from "src/app/auth/shared/despachador.mode";
import { OrderItem } from "./orden-item.model";
import { PagoContraEntrega } from "./pago-contra-entrega.model";


export class Order {
  id?: number;
  cliente: any;
  estado?:any;
  items?: OrderItem[];
  pagoContraEntrega? : PagoContraEntrega;
  despachador?: Despachador;
}
