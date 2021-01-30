import {Component, OnInit} from '@angular/core';
import {RegisterService} from '../../_services/register.service';

@Component({
  selector: 'app-register-etudiant',
  templateUrl: './register-etudiant.component.html',
  styleUrls: ['./register-etudiant.component.css'],
})
export class RegisterEtudiantComponent implements OnInit {
  form: any = {
    nom: null,
    prenom: null,
    dateNaissance: null,
    email: null,
    codeMasar: null,
    niveau: 'premierAnnee',
    password: null,
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private registerService: RegisterService) {}

  ngOnInit(): void {}

  onSubmit(): void {
    const {
      nom,
      prenom,
      dateNaissance,
      email,
      codeMasar,
      niveau,
      password,
    } = this.form;
    const type = 'Etudiant';
    this.registerService.registerEtudiant(type, nom, prenom, dateNaissance, email, codeMasar, niveau, password).subscribe(
      data => {
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }
}
