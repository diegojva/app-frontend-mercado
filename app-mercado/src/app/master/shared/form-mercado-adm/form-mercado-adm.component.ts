import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Market } from 'src/app/cliente/shared/market.model';

@Component({
  selector: 'app-form-mercado-adm',
  templateUrl: './form-mercado-adm.component.html',
  styleUrls: ['./form-mercado-adm.component.css']
})
export class FormMercadoAdmComponent implements OnInit {

  form: FormGroup;

  @Input() set mercado(mercado: Market) {
    this.form?.patchValue(mercado);
  }

  @Output() onSubmit: EventEmitter<any> = new EventEmitter();

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nombre: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(30),
        ],
      ],
      distrito: ['', [Validators.required, Validators.minLength(3),Validators.maxLength(30)]],
      ubicacion: ['',[Validators.required, Validators.minLength(5),Validators.maxLength(70)]]
    });
  }

  registrar() {
    this.onSubmit.emit(this.form.value);
  }

}
