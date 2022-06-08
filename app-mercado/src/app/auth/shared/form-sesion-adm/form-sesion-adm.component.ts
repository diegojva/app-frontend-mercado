import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LayoutComponent } from 'src/app/admin/layout/layout.component';
import { Usuario } from '../usuario.model';

@Component({
  selector: 'app-form-sesion-adm',
  templateUrl: './form-sesion-adm.component.html',
  styleUrls: ['./form-sesion-adm.component.css']
})
export class FormSesionAdmComponent implements OnInit {

  public auth: boolean = LayoutComponent.auth;
  form: FormGroup;
  captcha: string;
  
  @Input() usuario: Usuario = new Usuario();
  @Output() onSubmit: EventEmitter<any> = new EventEmitter();
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username:[
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(15),
        ],
      ],
      password: ['', [Validators.required,  Validators.minLength(8),Validators.maxLength(50),]],
    });
  }

  save() {
    if(this.captcha==null){
      //this.form.invalid;
      alert('Debes completar el captcha');
    }else {
      this.onSubmit.emit(this.form.value);
    }
  }

  resolved(captchaResponse: string){
    this.captcha = captchaResponse;
  }
}
