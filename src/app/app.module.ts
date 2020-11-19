import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component';
import { environment } from 'src/environments/environment';

import { AngularFireModule} from '@angular/fire';

import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './componentes/login/login.component';
import { AltaUsuarioComponent } from './componentes/alta-usuario/alta-usuario.component';
import { AltaAdminComponent } from './componentes/alta-admin/alta-admin.component';
import { AdminComponent } from './componentes/admin/admin.component';
import { AlumnoComponent } from './componentes/alumno/alumno.component';
import { ProfesorComponent } from './componentes/profesor/profesor.component';
import { AltaMateriaComponent } from './componentes/alta-materia/alta-materia.component';
import { InscripcionMateriaComponent } from './componentes/inscripcion-materia/inscripcion-materia.component';
import { VerMateriasComponent } from './componentes/ver-materias/ver-materias.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AltaUsuarioComponent,
    AltaAdminComponent,
    AdminComponent,
    AlumnoComponent,
    ProfesorComponent,
    AltaMateriaComponent,
    InscripcionMateriaComponent,
    VerMateriasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
