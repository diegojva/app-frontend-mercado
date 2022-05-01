import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../login.service';
import { NuevoVendedor } from '../nuevoVendedor.model';

@Component({
  selector: 'app-form-registrar',
  templateUrl: './form-registrar.component.html',
  styleUrls: ['./form-registrar.component.css']
})
export class FormRegistrarComponent implements OnInit {

  form: FormGroup;

  @Input() vendedorNew: NuevoVendedor = new NuevoVendedor();
  @Output() onSubmit: EventEmitter<any> = new EventEmitter();

  constructor( private loginService: LoginService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
      
    this.form = this.formBuilder.group({
      username:[
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(30),
        ],
      ],
      password: ['', [Validators.required,  Validators.minLength(8),Validators.maxLength(150),]],
      nombre: ['', [Validators.required,Validators.minLength(2),Validators.maxLength(25)]],
      apellido: ['', [Validators.required,Validators.minLength(5),Validators.maxLength(50)]],
      dni: ['', [Validators.minLength(8),Validators.maxLength(8),Validators.required]],
    });
  }

  registrar() {
    this.onSubmit.emit(this.form.value);
  }


}
