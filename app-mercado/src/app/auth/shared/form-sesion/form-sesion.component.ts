import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LayoutComponent } from 'src/app/admin/layout/layout.component';
import { environment } from 'src/environments/environment';
import { LoginService } from '../login.service';
import { Usuario } from '../usuario.model';

@Component({
  selector: 'app-form-sesion',
  templateUrl: './form-sesion.component.html',
  styleUrls: ['./form-sesion.component.css']
})
export class FormSesionComponent implements OnInit {

  public auth: boolean = LayoutComponent.auth;
  form: FormGroup;

  @Input() usuario: Usuario = new Usuario();
  @Output() onSubmit: EventEmitter<any> = new EventEmitter();
  
  constructor(
    private loginService: LoginService,
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
      password: ['', [Validators.required,  Validators.minLength(8),
        Validators.maxLength(50),]],
    });

  }

  save() {
    this.onSubmit.emit(this.form.value);
  }

}
