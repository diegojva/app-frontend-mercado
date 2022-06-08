import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { MasterService } from '../shared/master.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  static auth: boolean = environment.autenticado;
  administrador : any;

  constructor(private router: Router, private masterService : MasterService) { }

  ngOnInit(): void {
    this.masterService.get(Number(sessionStorage.getItem('idUsuario'))).subscribe((data:any) => {
      this.administrador = data;
    });
  }

  signOut() {
    const ok = confirm('¿Estás seguro qué desear salir?');
    if(ok){
      LayoutComponent.auth = true;
      sessionStorage.clear();
      this.router.navigate(['/']);
      console.log('Sesión finalizada!');
    }
  }

}
