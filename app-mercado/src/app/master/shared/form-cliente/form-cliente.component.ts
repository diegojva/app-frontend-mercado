import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Cliente } from 'src/app/cliente/shared/cliente.model';
import { RolService } from '../rol.service';

@Component({
  selector: 'app-form-cliente',
  templateUrl: './form-cliente.component.html',
  styleUrls: ['./form-cliente.component.css']
})
export class FormClienteComponent implements OnInit {

  form: FormGroup;

  @Input() set cliente(cliente: Cliente) {
    this.form?.patchValue(cliente);
  }

  @Output() onSubmit: EventEmitter<any> = new EventEmitter();

  constructor(private formBuilder: FormBuilder, private rolService: RolService) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(60),
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
          Validators.minLength(3),
          Validators.maxLength(30),
        ],
      ],
      apellido: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(60),
        ],
      ],
      telefono: [
        '',
        [Validators.minLength(9), Validators.maxLength(9), Validators.required],
      ],
      direccion: [
        '',
        [Validators.minLength(5), Validators.maxLength(120), Validators.required],
      ],
    });
    //this.cargarRoles();
  }

  registrar() {
    this.onSubmit.emit(this.form.value);
  }

}
