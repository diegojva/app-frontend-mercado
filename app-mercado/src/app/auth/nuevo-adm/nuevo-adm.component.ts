import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../shared/login.service';

@Component({
  selector: 'app-nuevo-adm',
  templateUrl: './nuevo-adm.component.html',
  styleUrls: ['./nuevo-adm.component.css'],
})
export class NuevoAdmComponent implements OnInit {
  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit(): void {}

  registrarAdm(administrador: any) {
    this.loginService.registrarAdm(administrador).subscribe(
      (admin) => {
        alert('La cuenta de administrador ha sido creada con éxito');
        this.router.navigate(['/auth/nueva-sesion-adm']);
      },
      (error: any) => {
        alert(
          'Error al crear la cuenta. Intenta con otro username, por favor.'
        );
      }
    );
  }
}
