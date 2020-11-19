import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  usuario;
  email;
  

  constructor(private router: Router) {
    
   }

  ngOnInit(): void {

    this.usuario = JSON.parse(localStorage.getItem('usuario'));
    this.email = this.usuario.email;
    
    if(this.usuario.tipo == "admin")
    {
      this.router.navigateByUrl("Admin");
    }

    if(this.usuario.tipo == "Alumno")
    {
      this.router.navigateByUrl("Alumno");
    }

    if(this.usuario.tipo == "Profesor")
    {
      this.router.navigateByUrl("Profesor");
    }

    
     
  }


  

  

}
