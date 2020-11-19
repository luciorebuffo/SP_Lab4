import { Component, OnInit } from '@angular/core';
import {DataService} from '../../servicio/data.service';

import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-alta-materia',
  templateUrl: './alta-materia.component.html',
  styleUrls: ['./alta-materia.component.css']
})
export class AltaMateriaComponent implements OnInit {

  nombre;
  cuatrimestre;
  cupo;

  profesor="ninguno";

  Profesores;

  constructor(private data: DataService,private afs : AngularFirestore) { }

  ngOnInit(): void {
    this.Profesores = this.data.profesores;
    console.log(this.Profesores);

  }

  cargarMateria(e){

    const random = Math.floor(Math.random() * 100000000) + 1
    
    const ID = String(random).concat(this.nombre);
    

    const materia = {
      id: ID,
      nombre: this.nombre, 
      cuatrimestre: this.cuatrimestre,
      cupo: this.cupo,
      profesor: this.profesor,
    };

    if(this.profesor != 'ninguno'){
      try {

        const insert =  this.afs.collection('materias').doc(ID).set(materia);

        console.log(insert);

      } catch (error) {

        console.log(error);

      }
    }
    else{
      alert("Debe seleccionar un profesor");
    }

  }

  agregarProfesor(Prof){

    this.profesor = Prof;

  }

}
