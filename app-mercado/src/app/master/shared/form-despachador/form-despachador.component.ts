import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Vendedor } from 'src/app/admin/shared/vendedor.model';
import { Despachador } from 'src/app/auth/shared/despachador.mode';
import { RolService } from '../rol.service';

@Component({
  selector: 'app-form-despachador',
  templateUrl: './form-despachador.component.html',
  styleUrls: ['./form-despachador.component.css']
})
export class FormDespachadorComponent implements OnInit {

  form: FormGroup;

  @Input() set despachador(despachador: Despachador) {
    this.form?.patchValue(despachador);
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
      estado:['',[Validators.required]]
    });
    //this.cargarRoles();
  }

  registrar() {
    this.onSubmit.emit(this.form.value);
  }


}
