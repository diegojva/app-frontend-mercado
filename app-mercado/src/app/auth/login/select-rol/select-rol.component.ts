import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VendedorServicioService } from 'src/app/admin/shared/vendedor-servicio.service';
import { RolService } from 'src/app/master/shared/rol.service';

@Component({
  selector: 'app-select-rol',
  templateUrl: './select-rol.component.html',
  styleUrls: ['./select-rol.component.css']
})
export class SelectRolComponent implements OnInit {

  showFiller = false;
  vendedor :any;
  roles : any;

  constructor( private rolService: RolService,
    private activatedRoute: ActivatedRoute, private vendedorService: VendedorServicioService) { 
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      this.vendedorService.get(Number(paramMap.get('id'))).subscribe((data: any) => {
        this.vendedor = data;
        this.roles = this.vendedor['roles'];
        console.log(this.roles);
      });
    });
  }

  ngOnInit(): void {
  }
  onChange(deviceValue) {
    console.log(deviceValue);
}

}
