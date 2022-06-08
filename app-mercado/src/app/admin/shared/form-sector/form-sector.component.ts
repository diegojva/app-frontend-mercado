import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Sector } from '../sector.model';

@Component({
  selector: 'app-form-sector',
  templateUrl: './form-sector.component.html',
  styleUrls: ['./form-sector.component.css'],
})
export class FormSectorComponent implements OnInit {
  form: FormGroup;

  @Input() sectorNew: Sector = new Sector();
  @Output() onSubmit: EventEmitter<any> = new EventEmitter();

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      nombre: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(30),
        ],
      ],
      descripcion: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  registrar() {
    this.onSubmit.emit(this.form.value);
  }
}
