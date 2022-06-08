import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { LayoutComponent } from 'src/app/admin/layout/layout.component';
import { DatosService } from '../../shared/datos.service';
import { LoginService } from '../../shared/login.service';
import { Usuario } from '../../shared/usuario.model';

@Component({
  selector: 'app-nueva-sesion',
  templateUrl: './nueva-sesion.component.html',
  styleUrls: ['./nueva-sesion.component.css'],
})
export class NuevaSesionComponent implements OnInit {

  roles: string[]=[];

  constructor(
    private loginService: LoginService,
    private router: Router,
    private datosService: DatosService
  ) {}

  ngOnInit(): void {}

  iniciarSesion(usuario: Usuario) {
    this.loginService.loginUsuario(usuario).subscribe(
      (res: any) => {
        const rol = res['authorities'][0]['authority'];
        const idUsuario = res['idUser'];
        sessionStorage.clear();
        sessionStorage.setItem('tokenDeAcceso', res['tokenDeAcceso']);
        sessionStorage.setItem('idUsuario', idUsuario);
        sessionStorage.setItem('rol', rol);
        this.roles = res['authorities'];
        //this.datosService.setAuthorities(rol);
        this.verificarTipoUsuario(rol, idUsuario);
      },
      (err) => {
        alert('Al parecer las ingresadas no son correctas. Intenta nuevamente');
      }
    );
  }

  verificarTipoUsuario(rol: any, id: number) {
    /*rol.forEach((roles)=>{
      if(rol.length==1){
        if (roles.authority == 'ROLE_ADMIN') {
          this.router.navigate([`/admin/vendedor/puestos/${id}`]);
          alert('¡Bienvenido!');
        }
        if (roles.authority == 'ROLE_USER') {
          this.router.navigate(['/cliente']);
          alert('¡Bienvenido!');
        }
        if (roles.authority  == 'ROLE_EMPLOYEE') {
          this.router.navigate(['/despachador']);
          alert('¡Bienvenido!');
        }
      }else {this.router.navigate([`/auth/select-rol/${id}`]);}
    })*/
    
      if (rol == 'ROLE_ADMIN') {
        this.router.navigate([`/admin/vendedor/puestos/${id}`]);
        alert('¡Bienvenido!');
      }
      if (rol == 'ROLE_USER') {
        this.router.navigate(['/cliente']);
        alert('¡Bienvenido!');
      }
      if (rol == 'ROLE_EMPLOYEE') {
        this.router.navigate(['/despachador']);
        alert('¡Bienvenido!');
      }
    }

  }


