import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DespachadorService } from '../shared/despachador.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  static auth: boolean;
  despachador : any;
  constructor(private router: Router, private despachadorService : DespachadorService) {
    this.despachadorService.getDespachadorById(Number(sessionStorage.getItem('idUsuario')))
    .subscribe((data: any) => {
      this.despachador = data;
    });
   }

  ngOnInit(): void {
  }

  signOut() {
    const ok = confirm('¿Estás seguro qué desear salir?');
    if(ok){
      LayoutComponent.auth = true;
      sessionStorage.clear();
      this.router.navigate(['']);
    }
  }
}
