import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteService } from '../shared/cliente.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  cliente : any;
  static auth: boolean;

  constructor(private router: Router,
    private clienteService: ClienteService) {
    this.clienteService.getClienteById(Number(sessionStorage.getItem('idUsuario')))
    .subscribe((data: any) => {
      this.cliente = data;
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
