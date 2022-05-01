import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../shared/login.service';
import { NuevoVendedor } from '../shared/nuevoVendedor.model';

@Component({
  selector: 'app-nuevo-vendedor',
  templateUrl: './nuevo-vendedor.component.html',
  styleUrls: ['./nuevo-vendedor.component.css']
})
export class NuevoVendedorComponent implements OnInit {

  msg='';
  constructor(    private usuarioService: LoginService,
    private router: Router,) { }

  ngOnInit(): void {
  }

  registrarVendedor(vendedor: NuevoVendedor){
 
    this.usuarioService.registrarVendedor(vendedor).subscribe(
      (res:any)=>{

        this.msg=res['¡Registrado correctamente!']
         
        alert('Tu cuenta ha sido creada con éxito.')
        this.router.navigate(['/auth']);

      },
      (error: any)=> {
        alert('Es posible que el nombre de usuario o DNI ya exista. Intenta con otro.')
      }
    );
    
  }
}
