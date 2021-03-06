import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { NuevaSesionComponent } from 'src/app/auth/login/nueva-sesion/nueva-sesion.component';
import { DatosService } from 'src/app/auth/shared/datos.service';
import { LoginService } from 'src/app/auth/shared/login.service';
import { environment } from 'src/environments/environment';
import { Vendedor } from '../shared/vendedor.model';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent implements OnInit {

  static auth: boolean = environment.autenticado;
  public id :number;
  public vendedor: Vendedor;
  dataSource: any;
  constructor(
    private router: Router,
    private usuarioService: LoginService,
    private cookieService: CookieService
  ) {}

  ngOnInit(): void {
    LayoutComponent.auth=false;
    this.getUsuarioPorId();
  }

  getUsuarioPorId(){
    this.usuarioService.getVendedor(Number(sessionStorage.getItem('idUsuario'))).subscribe((data:any) => {
      this.dataSource = data;
    });
  }

  mostrarDatos(){
    console.log(this.dataSource);
  }


  signOut() {
    const ok = confirm('¿Estás seguro qué desear salir?');
    if(ok){
      LayoutComponent.auth = true;
      sessionStorage.clear();
      this.router.navigate(['']);
      console.log('Sesión finalizada!');
    }
  }

}
