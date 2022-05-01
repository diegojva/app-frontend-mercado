import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Sector } from '../../shared/sector.mode';
import { SectorService } from '../../shared/sector.service';

@Component({
  selector: 'app-nuevo-sector',
  templateUrl: './nuevo-sector.component.html',
  styleUrls: ['./nuevo-sector.component.css']
})
export class NuevoSectorComponent implements OnInit {

  constructor(private sectorService: SectorService,
    private router: Router){ }

  ngOnInit(): void {
  }

  registrarSector(sector: Sector) {

    this.sectorService.create(sector).subscribe(
      (res:any)=>{
         
        this.router.navigate([`/admin/vendedor/sectores`]);

      },
      (error: any)=> {
        console.log(error);
      }
    );
    
  }

}
