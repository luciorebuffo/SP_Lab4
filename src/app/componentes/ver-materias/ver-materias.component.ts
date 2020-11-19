import { Component, OnInit } from '@angular/core';
import {DataService} from '../../servicio/data.service';

@Component({
  selector: 'app-ver-materias',
  templateUrl: './ver-materias.component.html',
  styleUrls: ['./ver-materias.component.css']
})
export class VerMateriasComponent implements OnInit {

  

  Materias;
  Alumnos;

  constructor(private data: DataService) { }

   ngOnInit(): void {
    this.Materias = this.data.materias;
    
  }

  async buscar(idMateria){

    this.Alumnos = await this.data.busarMateria(idMateria);
    console.log(this.Alumnos);

  }

}
