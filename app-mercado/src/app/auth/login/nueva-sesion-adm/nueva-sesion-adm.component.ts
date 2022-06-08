import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../shared/login.service';

@Component({
  selector: 'app-nueva-sesion-adm',
  templateUrl: './nueva-sesion-adm.component.html',
  styleUrls: ['./nueva-sesion-adm.component.css']
})
export class NuevaSesionAdmComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  iniciarSesionAdm(administrador: any){
    this.loginService.loginUsuario(administrador).subscribe(admin => {
      const rol = admin['authorities'][0]['authority'];
      const idUsuario = admin['idUser'];
      sessionStorage.clear();
      sessionStorage.setItem('tokenDeAcceso', admin['tokenDeAcceso']);
      sessionStorage.setItem('idUsuario', idUsuario);
      sessionStorage.setItem('rol', rol);
      this.verificarTipoUsuario(rol, idUsuario);
    }, (error) => {
      alert('Las credenciales son incorrectas.');
    })
  }

  verificarTipoUsuario(rol: string, id: number) {
    if (rol == 'ROLE_MASTER') {
      this.router.navigate([`/master`]);
      alert('¡Bienvenido!');
    }else{alert('No tienes acceso.')}
}
}