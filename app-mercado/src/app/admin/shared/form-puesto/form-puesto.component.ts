import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Puesto } from '../puesto.model';
import { PuestoService } from '../puesto.service';
import { Sector } from '../sector.mode';
import { SectorService } from '../sector.service';

@Component({
  selector: 'app-form-puesto',
  templateUrl: './form-puesto.component.html',
  styleUrls: ['./form-puesto.component.css']
})
export class FormPuestoComponent implements OnInit {

  public sectores : Array<any> = [];
  msg='';

  form: FormGroup;

  @Input() vendedorNew: Puesto = new Puesto();
  @Output() onSubmit: EventEmitter<any> = new EventEmitter();

  constructor(private puestoService: PuestoService, private sectorService: SectorService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
       
    this.form = this.formBuilder.group({
      nombre:[
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
        ],
      ],
      descripcion: ['', [Validators.required,  Validators.minLength(10), Validators.maxLength(150),]],
      sector: ['']
    });
    this.cargarSectores();
  }

  registrar() {
    this.onSubmit.emit(this.form.value);
  }

  cargarSectores(){
    this.sectorService.getSectores().subscribe(
      (data:any)=>{

        this.sectores.push(data);
      },
      (err: any)=> {
        this.msg="";
      }
    );
  }

}
