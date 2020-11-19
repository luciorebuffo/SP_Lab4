import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  usuario;
  email;

  constructor(private router : Router) { }

  ngOnInit(): void {
    this.usuario = JSON.parse(localStorage.getItem('usuario'));
    this.email = this.usuario.email;
  }

  altaMateria(){
    this.router.navigateByUrl("altaMateria");
  }

  inscripcionMateria(){
    this.router.navigateByUrl("inscripcionMateria");

  }

  verMaterias(){
    this.router.navigateByUrl("verMaterias");
  }

  verUsuarios(){}

}
