import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { LoginService } from '../login.service';
import { NuevoVendedor } from '../nuevoVendedor.model';

@Component({
  selector: 'app-form-registrar',
  templateUrl: './form-registrar.component.html',
  styleUrls: ['./form-registrar.component.css'],
})
export class FormRegistrarComponent implements OnInit {
  formVendedor: FormGroup;
  formCliente: FormGroup;
  formDespachador: FormGroup;
  captcha: string;
  formulario: number;

  //@Input() formulario:number;
  @Output() onSubmit: EventEmitter<any> = new EventEmitter();

  constructor(
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.formVendedor = this.formBuilder.group({
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
    });

    this.formCliente = this.formBuilder.group({
      email: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(60),
          Validators.email
        ],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(250),
        ],
      ],
      nombre: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(30),
        ],
      ],
      apellido: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(60),
        ],
      ],
      telefono: [
        '',
        [Validators.minLength(9), Validators.maxLength(9), Validators.required],
      ],
      direccion: [
        '',
        [
          Validators.minLength(5),
          Validators.maxLength(120),
          Validators.required,
        ],
      ],
      tipo: [''],
    });

    this.formDespachador = this.formBuilder.group({
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
      tipo: [''],
    });
  }

  resolved(captchaResponse: string) {
    this.captcha = captchaResponse;
    console.log('resuelve captcha with respuesta: ' + this.captcha);
  }

  registrarUsuario() {
    if (this.formulario == 1) {
      this.onSubmit.emit(this.formVendedor.value);
    } if(this.formulario == 2) {
      this.formCliente.controls['tipo'].setValue('CLIENTE');
      this.onSubmit.emit(this.formCliente.value);
    }if(this.formulario == 3) {
      this.formDespachador.controls['tipo'].setValue('DESPACHADOR');
      this.onSubmit.emit(this.formDespachador.value);
    }
  }
}
