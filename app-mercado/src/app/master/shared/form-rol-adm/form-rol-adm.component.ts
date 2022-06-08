import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Rol } from '../rol.model';

@Component({
  selector: 'app-form-rol-adm',
  templateUrl: './form-rol-adm.component.html',
  styleUrls: ['./form-rol-adm.component.css']
})
export class FormRolAdmComponent implements OnInit {

  form: FormGroup;

  @Input() set rol(rol: Rol) {
    this.form?.patchValue(rol);
  }

  @Output() onSubmit: EventEmitter<any> = new EventEmitter();

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nombre: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(25),
        ],
      ],
    });
  }

  registrar() {
    this.onSubmit.emit(this.form.value);
  }

}
