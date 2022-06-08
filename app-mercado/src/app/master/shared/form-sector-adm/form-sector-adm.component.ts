import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Sector } from 'src/app/admin/shared/sector.model';

@Component({
  selector: 'app-form-sector-adm',
  templateUrl: './form-sector-adm.component.html',
  styleUrls: ['./form-sector-adm.component.css']
})
export class FormSectorAdmComponent implements OnInit {

  form: FormGroup;

  @Input() set sector(sector: Sector) {
    this.form?.patchValue(sector);
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
      descripcion: ['', [Validators.required, Validators.minLength(10),Validators.maxLength(150)]],
    });
  }

  registrar() {
    this.onSubmit.emit(this.form.value);
  }

}
