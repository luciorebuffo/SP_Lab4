import { Component, OnInit } from '@angular/core';
import {DataService} from '../../servicio/data.service';

import { AngularFirestore } from '@angular/fire/firestore';


@Component({
  selector: 'app-inscripcion-materia',
  templateUrl: './inscripcion-materia.component.html',
  styleUrls: ['./inscripcion-materia.component.css']
})
export class InscripcionMateriaComponent implements OnInit {

  materia = "ninguno";
  materiaNombre = "ninguno";
  materiaCuatrimestre;
  materiaCupo;
  materiaProfesor;

  alumno = "ninguno";

  Materias;
  Alumnos;

  constructor(private data: DataService,private afs : AngularFirestore) { }

   ngOnInit(): void {

    this.Materias = this.data.materias;
    this.Alumnos = this.data.alumnos;

    console.log(this.Materias);
    console.log(this.Alumnos);
  }

  agregarAlumno(Alum){

    this.alumno = Alum;

  }

  agregarMateria(Mat,Nom,Cua,Cupo,Prof){

    this.materia = Mat;
    this.materiaNombre = Nom;
    this.materiaCuatrimestre = Cua;
    this.materiaCupo = Cupo;
    this.materiaProfesor = Prof;

  }


  cargarAlumnoAMateria(e){

    const nuevoCupo = this.materiaCupo -1;

    const materiaMod = {
      id: this.materia,
      nombre: this.materiaNombre, 
      cuatrimestre: this.materiaCuatrimestre,
      cupo: this.materiaCupo,
      profesor: this.materiaProfesor,
    };

    console.log(nuevoCupo);


  
    if(this.alumno != 'ninguno' && this.materia != 'ninguno'){

      if(this.materiaCupo >0){

        const nuevoCupo = this.materiaCupo -1;

        const materiaMod = {
          id: this.materia,
          nombre: this.materiaNombre, 
          cuatrimestre: this.materiaCuatrimestre,
          cupo: nuevoCupo,
          profesor: this.materiaProfesor,
        };

        try {

          const insert =  this.afs.collection('materias').doc(this.materia).collection('alumnos').doc(this.alumno).set({email:this.alumno});

          const update =  this.afs.collection('materias').doc(this.materia).update(materiaMod);

          console.log(insert);

        } catch (error) {

          console.log(error);

        }

      }
      
    }else{
      alert("Debe seleccionar un alumno y una materia");

    }

  }

}
