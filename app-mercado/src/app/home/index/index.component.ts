import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  private auth: boolean = environment.autenticado;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.verificarStatusSesion();
  }

  verificarStatusSesion(){
    if(!this.auth){
      this.router.navigate([`/auth`]);
    }
  }

}
