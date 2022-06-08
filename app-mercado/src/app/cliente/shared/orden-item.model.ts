import { Producto } from 'src/app/admin/shared/producto.model';
import { Order } from './orden.model';


export class OrderItem {
  id?: number;
  producto: Producto;
  price: number;
  quantity: number;
  total: number;
}
