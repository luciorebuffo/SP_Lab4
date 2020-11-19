import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  profesores;
  alumnos;
  materias;

  materiaBuscada;
  

  constructor(private afs : AngularFirestore) {
    this.listaProfesores();
    this.listaAlumnos();
    this.listaMaterias();

  }

  listaProfesores(){
    const doc =  this.afs.collection('usuarios',ref => ref.where('tipo','==', 'profesor' ));
    

    doc
    .valueChanges()
    .subscribe(data =>{
      this.profesores = data;
      console.log(this.profesores);
      
    })
  }

  listaAlumnos(){
    const doc =  this.afs.collection('usuarios',ref => ref.where('tipo','==', 'alumno' ));
    

    doc
    .valueChanges()
    .subscribe(data =>{
      this.alumnos = data;
      console.log(this.alumnos);
      
    })
  }

  listaMaterias(){
    const doc =  this.afs.collection('materias');
    

    doc
    .valueChanges()
    .subscribe(data =>{
      this.materias = data;
      console.log(this.materias);
      
    })
  }

  busarMateria(materia){
    const doc =  this.afs.collection('materias').doc(materia).collection('alumnos');
    

    doc
    .valueChanges()
    .subscribe(data =>{
      this.materiaBuscada = data;
      console.log(this.materiaBuscada);
      
    })

  }

}
