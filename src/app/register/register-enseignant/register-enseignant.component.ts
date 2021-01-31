import {Component, OnInit} from '@angular/core';
import {RegisterService} from '../../_services/register.service';

@Component({
  selector: 'app-register-enseignant',
  templateUrl: './register-enseignant.component.html',
  styleUrls: ['./register-enseignant.component.css']
})
export class RegisterEnseignantComponent implements OnInit {
  form: any = {
    nom: null,
    prenom: null,
    dateNaissance: null,
    email: null,
    numeroSom: null,
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
      numeroSom,
      password,
    } = this.form;
    const type = 'Enseignant';
    const role = 'ROLE_ENSEIGNANT';
    this.registerService.registerEnseignant(type, nom, prenom, dateNaissance, email, numeroSom, password, role).subscribe(
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
