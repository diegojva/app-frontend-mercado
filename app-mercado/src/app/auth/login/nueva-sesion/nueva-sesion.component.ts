import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LayoutComponent } from 'src/app/admin/layout/layout.component';
import { LoginService } from '../../shared/login.service';
import { Usuario } from '../../shared/usuario.model';

@Component({
  selector: 'app-nueva-sesion',
  templateUrl: './nueva-sesion.component.html',
  styleUrls: ['./nueva-sesion.component.css'],
})
export class NuevaSesionComponent implements OnInit {
  
  public username: string;

  constructor(
    private usuarioService: LoginService,
    private router: Router,
  ) {}

  ngOnInit(): void {}

  iniciarSesion(usuario: Usuario) {
    this.usuarioService.loginUsuario(usuario).subscribe(
      (res) => {
        const idUsuario = res['id'];
        this.router.navigate([`/admin/vendedor/puestos/${idUsuario}`]);
        sessionStorage.setItem('idUsuario', idUsuario);
        alert('¡Bienvenido!');
      },
      (err) => {
        alert('Al parecer las ingresadas no son correctas. Intenta nuevamente');
        //this.msg = 'Nombre de usuario o contraseña incorrectos';
      }
    );
  }

  validacionLogin(){
    
  }

}
