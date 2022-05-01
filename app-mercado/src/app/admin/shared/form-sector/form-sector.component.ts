import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Sector } from '../sector.mode';

@Component({
  selector: 'app-form-sector',
  templateUrl: './form-sector.component.html',
  styleUrls: ['./form-sector.component.css']
})
export class FormSectorComponent implements OnInit {

  msg='';

  form: FormGroup;

  @Input() sectorNew: Sector = new Sector();
  @Output() onSubmit: EventEmitter<any> = new EventEmitter();
  
  constructor(private formBuilder: FormBuilder) { 
         
    this.form = this.formBuilder.group({
      nombre:[
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(15),
        ],
      ],
      descripcion: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
  }

  registrar() {
    this.onSubmit.emit(this.form.value);
  }

}
