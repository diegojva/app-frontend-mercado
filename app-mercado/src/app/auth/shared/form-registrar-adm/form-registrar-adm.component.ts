import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-registrar-adm',
  templateUrl: './form-registrar-adm.component.html',
  styleUrls: ['./form-registrar-adm.component.css']
})
export class FormRegistrarAdmComponent implements OnInit {

  form: FormGroup;
  captcha: string;

  @Output() onSubmit: EventEmitter<any> = new EventEmitter();
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(15),
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
    });
  }
  registrarAdm() {
    this.onSubmit.emit(this.form.value);
  }
}
