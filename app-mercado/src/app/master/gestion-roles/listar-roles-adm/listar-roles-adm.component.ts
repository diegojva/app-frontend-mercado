import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Rol } from '../../shared/rol.model';
import { RolService } from '../../shared/rol.service';

@Component({
  selector: 'app-listar-roles-adm',
  templateUrl: './listar-roles-adm.component.html',
  styleUrls: ['./listar-roles-adm.component.css']
})
export class ListarRolesAdmComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nombre', 'accion'];
  dataSource: MatTableDataSource<Rol>;

  constructor(private rolService: RolService, private router: Router) { }

  ngOnInit(): void {
    this.getRoles();
  }

  applyFilter(value: string) {
    this.dataSource.filter = value.trim().toLowerCase();
  }

  getRoles() {
    this.rolService.getRoles().subscribe((data: any) => {
      this.dataSource = new MatTableDataSource(data);
    });
  }

  eliminar(id: number) {
    const ok = confirm('¿Estás seguro de eliminar el sector?');
    if (ok) {
      this.rolService.delete(id).subscribe(
        () => {
          alert('Eliminado con éxito.');
          this.getRoles();
        },
        (error) => {
          alert('El rol tiene usuarios asignados.');
        }
      );
    }
  }

}
