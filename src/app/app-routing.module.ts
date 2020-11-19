import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './componentes/admin/admin.component';
import { AltaAdminComponent } from './componentes/alta-admin/alta-admin.component';
import { AltaMateriaComponent } from './componentes/alta-materia/alta-materia.component';
import { AltaUsuarioComponent } from './componentes/alta-usuario/alta-usuario.component';
import { AlumnoComponent } from './componentes/alumno/alumno.component';
import { HomeComponent } from './componentes/home/home.component';
import { InscripcionMateriaComponent } from './componentes/inscripcion-materia/inscripcion-materia.component';
import { LoginComponent } from './componentes/login/login.component';
import { ProfesorComponent } from './componentes/profesor/profesor.component';
import { VerMateriasComponent } from './componentes/ver-materias/ver-materias.component';
import { AdminGuard } from './guards/admin.guard';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  { path: '',
  component: HomeComponent,
  canActivate: [LoginGuard]
  },
  { path: 'Login',
  component: LoginComponent
  },
  { path: 'altaUsuario',
  component: AltaUsuarioComponent
  },
  { path: 'altaAdmin',
  component: AltaAdminComponent,
  canActivate: [AdminGuard],
  },
  { path: 'Admin',
  component: AdminComponent,
  canActivate: [AdminGuard],
  },
  { path: 'Alumno',
  component: AlumnoComponent,
  canActivate: [LoginGuard],
  },
  { path: 'Profesor',
  component: ProfesorComponent,
  canActivate: [LoginGuard],
  },
  { path: 'altaMateria',
  component: AltaMateriaComponent,
  canActivate: [AdminGuard],
  },
  { path: 'inscripcionMateria',
  component: InscripcionMateriaComponent,
  canActivate: [AdminGuard],
  },
  { path: 'verMaterias',
  component: VerMateriasComponent,
  canActivate: [AdminGuard],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
