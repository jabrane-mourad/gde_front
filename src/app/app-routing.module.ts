import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {ProfileComponent} from './profile/profile.component';
import {RegisterEtudiantComponent} from './register/register-etudiant/register-etudiant.component';
import {RegisterEnseignantComponent} from './register/register-enseignant/register-enseignant.component';
import {AbsencesEtudiantComponent} from './etudiant/absences-etudiant/absences-etudiant.component';
import {CoursEtudiantComponent} from './etudiant/cours-etudiant/cours-etudiant.component';
import {EmploisEtudiantComponent} from './etudiant/emplois-etudiant/emplois-etudiant.component';
import {FaireDemandeEtudiantComponent} from './etudiant/faire-demande-etudiant/faire-demande-etudiant.component';
import {ListDemandeEtudiantComponent} from './etudiant/list-demande-etudiant/list-demande-etudiant.component';
import {NotesEtudiantComponent} from './etudiant/notes-etudiant/notes-etudiant.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registerEtudiant', component: RegisterEtudiantComponent},
  {path: 'registerEnseignant', component: RegisterEnseignantComponent},
  {path: 'profile', component: ProfileComponent},

  {path: 'AbsencesEtudiant', component: AbsencesEtudiantComponent},
  {path: 'CoursEtudiant', component: CoursEtudiantComponent},
  {path: 'EmploisEtudiant', component: EmploisEtudiantComponent},
  {path: 'FaireDemandeEtudiant', component: FaireDemandeEtudiantComponent},
  {path: 'ListDemandeEtudiant', component: ListDemandeEtudiantComponent},
  {path: 'NotesEtudiant', component: NotesEtudiantComponent},


  {path: '', redirectTo: 'home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
