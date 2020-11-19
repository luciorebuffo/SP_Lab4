import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

import { AngularFirestore } from '@angular/fire/firestore';
@Component({
  selector: 'app-alta-usuario',
  templateUrl: './alta-usuario.component.html',
  styleUrls: ['./alta-usuario.component.css']
})
export class AltaUsuarioComponent implements OnInit {

  email:string;
  password:string;
  tipo:string;

  usuarios;

  constructor(private auth: AngularFireAuth,private router: Router,private afs : AngularFirestore) { }

  ngOnInit(): void {
  }

  async registro(e){

    //GUARDO EN AUTENTICAR
    try {

      const rta = await this.auth.createUserWithEmailAndPassword(this.email,this.password);
      
      console.log(rta);

      this.router.navigateByUrl("");
      
    } catch (error) {
      console.log(error);
    }

    //GUARDO EN CLOUD FIRESTORE
    try {

      const insert =  this.afs.collection('usuarios').doc(this.email).set({

        email: this.email,
        tipo : this.tipo

      });

      console.log(insert);

    } catch (error) {

      console.log(error);

    }
  }

}
