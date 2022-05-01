import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/auth/shared/login.service';
import { Puesto } from '../../shared/puesto.model';
import { PuestoService } from '../../shared/puesto.service';
import { Vendedor } from '../../shared/vendedor.model';

@Component({
  selector: 'app-nuevo-puesto',
  templateUrl: './nuevo-puesto.component.html',
  styleUrls: ['./nuevo-puesto.component.css']
})
export class NuevoPuestoComponent implements OnInit {

  msg='';
  public vendedor: Vendedor;
  dataSource: any;

  constructor(
    private router: Router,
    private usuarioService: LoginService,
    private puestoService: PuestoService
  ) { }

  ngOnInit(): void {
    this.getUsuarioPorId();
  }

  getUsuarioPorId(){
    this.usuarioService.getVendedor(Number(sessionStorage.getItem('idUsuario'))).subscribe((data:any) => {
      this.dataSource = data;
    });
  }

  registrarPuesto(puesto: Puesto) {
 
    puesto.vendedor = this.dataSource;
    this.puestoService.create(puesto).subscribe(
      (res:any)=>{

        alert('El puesto ha sido creado con éxito');
         
        this.router.navigate([`/admin/vendedor/puestos/${this.dataSource.id}`]);

      },
      (error: any)=> {
        alert('Es posible que ya tengas un puesto con el mismo nombre. Intenta con otro. ' + error.message);
      }
    );
    
  }

}
