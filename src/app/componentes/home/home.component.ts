import { Component, OnInit } from '@angular/core';
import { AngularFirestore,AngularFirestoreDocument,DocumentData } from '@angular/fire/firestore';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  contador = 0;

  nombreUsuario:string;
  mensajeUsuario:string;
  Mensajes= [];

  constructor(private afs : AngularFirestore) {
    
   }

  ngOnInit(): void {

    const doc =  this.afs.collection('chatLab4').doc('Chat').collection('Mensajes');
    /*const mensaje = { nombre: "Lucio", mensaje: "Hola"};
    this.afs.collection('chatLab4').doc().set(mensaje);*/

    doc
    .valueChanges()
    .subscribe(data =>{
      this.Mensajes = data;
    })
     
  }


  agregarTest(e){
    
    const mensaje = { nombre: this.nombreUsuario, mensaje: this.mensajeUsuario};
    //this.afs.collection('chatLab4').doc(this.contador.toString()).set(mensaje);

    try {

      const insert =  this.afs.collection('chatLab4').doc('Chat').collection('Mensajes').add(mensaje);

      console.log(insert);

    } catch (error) {

      console.log(error);

    }
    
    
  }

  

}
