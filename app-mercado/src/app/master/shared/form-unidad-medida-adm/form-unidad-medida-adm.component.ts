import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UnidadMedida } from 'src/app/admin/shared/unidadMedida.model';

@Component({
  selector: 'app-form-unidad-medida-adm',
  templateUrl: './form-unidad-medida-adm.component.html',
  styleUrls: ['./form-unidad-medida-adm.component.css']
})
export class FormUnidadMedidaAdmComponent implements OnInit {

  form: FormGroup;

  @Input() set unidadMedida(unidadMedida: UnidadMedida) {
    this.form?.patchValue(unidadMedida);
  }

  @Output() onSubmit: EventEmitter<any> = new EventEmitter();

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      abreviatura: [
        '',
        [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(5),
        ],
      ],
      descripcion: ['', [Validators.required, Validators.minLength(3),Validators.maxLength(50)]],
    });
  }

  registrar() {
    this.onSubmit.emit(this.form.value);
  }

}
