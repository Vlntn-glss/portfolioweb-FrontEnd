import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia/edit-experiencia.component';
import { NewEducacionComponent } from './components/educacion/new-educacion/new-educacion.component';
import { EditEducacionComponent } from './components/educacion/edit-educacion/edit-educacion.component';
import { NewSkillComponent } from './components/habilidades/new-skill/new-skill.component';
import { EditSkillComponent } from './components/habilidades/edit-skill/edit-skill.component';
import { EditAcercaDeComponent } from './components/acerca-de/edit-acerca-de/edit-acerca-de.component';

const routes: Routes = [
{path:'',component:HomeComponent},
{path:'login',component:LoginComponent},
{path:'nuevaexp',component:NewExperienciaComponent},
{path:'editexp/:id',component:EditExperienciaComponent},
{path:'nuevaeduc',component:NewEducacionComponent},
{path:'editeduc/:id',component:EditEducacionComponent},
{path:'newskill/:id',component:NewSkillComponent},
{path:'edithys/:id',component:EditSkillComponent},
{path:'editacercade/:id',component:EditAcercaDeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
