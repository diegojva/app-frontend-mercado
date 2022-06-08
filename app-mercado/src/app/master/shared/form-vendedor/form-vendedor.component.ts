import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Vendedor } from 'src/app/admin/shared/vendedor.model';
import { RolService } from '../rol.service';

@Component({
  selector: 'app-form-vendedor',
  templateUrl: './form-vendedor.component.html',
  styleUrls: ['./form-vendedor.component.css']
})
export class FormVendedorComponent implements OnInit {

  roles : any = [];
  form: FormGroup;

  @Input() set vendedor(vendedor: Vendedor) {
    this.form?.patchValue(vendedor);
  }

  @Output() onSubmit: EventEmitter<any> = new EventEmitter();

  constructor(private formBuilder: FormBuilder, private rolService: RolService) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(30),
        ],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(150),
        ],
      ],
      nombre: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(25),
        ],
      ],
      apellido: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(50),
        ],
      ],
      dni: [
        '',
        [Validators.minLength(8), Validators.maxLength(8), Validators.required],
      ],
      estado: ['', [Validators.required]],
      //roles:['',[Validators.required]]
    });
    //this.cargarRoles();
  }
  /*cargarRoles(){
    this.rolService.getRoles().subscribe(
      (data:any)=>{
        this.roles.push(data);
      },
      (err: any)=> {
      }
    );
  }*/

  registrar() {
    this.onSubmit.emit(this.form.value);
  }

}
