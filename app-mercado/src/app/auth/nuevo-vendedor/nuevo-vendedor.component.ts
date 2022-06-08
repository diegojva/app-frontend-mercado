import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Despachador } from '../shared/despachador.mode';
import { FormRegistrarComponent } from '../shared/form-registrar/form-registrar.component';
import { LoginService } from '../shared/login.service';
import { NuevoCliente } from '../shared/nuevoCliente.model';
import { NuevoVendedor } from '../shared/nuevoVendedor.model';

@Component({
  selector: 'app-nuevo-vendedor',
  templateUrl: './nuevo-vendedor.component.html',
  styleUrls: ['./nuevo-vendedor.component.css'],
})
export class NuevoVendedorComponent implements OnInit {
  nuevoCliente: NuevoCliente = new NuevoCliente();
  nuevoVendedor: NuevoVendedor = new NuevoVendedor();
  nuevoDespachador: Despachador = new Despachador();

  constructor(private usuarioService: LoginService, private router: Router) {}

  ngOnInit(): void {}

  registrarUsuario(usuario: any) {
    if (usuario.tipo == 'CLIENTE') {
      this.nuevoCliente.email = usuario?.email;
      this.nuevoCliente.apellido = usuario?.apellido;
      this.nuevoCliente.password = usuario?.password;
      this.nuevoCliente.direccion = usuario?.direccion;
      this.nuevoCliente.telefono = usuario?.telefono;
      this.nuevoCliente.nombre = usuario?.nombre;

      this.usuarioService.registrarCliente(this.nuevoCliente).subscribe(
        (res: any) => {
          alert('Tu cuenta ha sido creada con éxito.');
          this.router.navigate(['/auth']);
        },
        (error: any) => {
          alert(
            'Es posible que el nombre de usuario o telefono móvil ya exista. Intenta con otro.'
          );
        }
      );
    } if(usuario.tipo==null) {
      this.nuevoVendedor.username = usuario?.username;
      this.nuevoVendedor.apellido = usuario?.apellido;
      this.nuevoVendedor.password = usuario?.password;
      this.nuevoVendedor.dni = usuario?.dni;
      this.nuevoVendedor.nombre = usuario?.nombre;

      this.usuarioService.registrarVendedor(this.nuevoVendedor).subscribe(
        (res: any) => {
          alert('Tu cuenta ha sido creada con éxito.');
          this.router.navigate(['/auth']);
        },
        (error: any) => {
          alert(
            'Es posible que el nombre de usuario o telefono móvil ya exista. Intenta con otro.'
          );
        }
      );
    }if(usuario.tipo=="DESPACHADOR"){
      this.nuevoDespachador.username = usuario?.username;
      this.nuevoDespachador.apellido = usuario?.apellido;
      this.nuevoDespachador.password = usuario?.password;
      this.nuevoDespachador.dni = usuario?.dni;
      this.nuevoDespachador.nombre = usuario?.nombre;

      this.usuarioService.registrarDespachador(this.nuevoDespachador).subscribe(
        (res: any) => {
          alert('Tu cuenta ha sido creada con éxito.');
          this.router.navigate(['/auth']);
        },
        (error: any) => {
          alert(
            'Es posible que el nombre de usuario o telefono móvil ya exista. Intenta con otro.'
          );
        }
      );
    }
  }
}
