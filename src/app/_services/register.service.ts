import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

const AUTH_API = 'http://localhost:8080/auth/';
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) {
  }

  registerEtudiant(type: string, nom: string, prenom: string, dateNaissance: string, email: string,
                   codeMasar: string, niveau: string, password: string, role: string,filiere:string): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      type,
      nom,
      prenom,
      dateNaissance,
      email,
      codeMasar,
      niveau,
      password,
      role,
      filiere
    }, httpOptions);
  }

  registerEnseignant(type: string, nom: string, prenom: string, dateNaissance: string, email: string,
                     numeroSom: string, password: string, role: string): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      type,
      nom,
      prenom,
      dateNaissance,
      email,
      numeroSom,
      password,
      role
    }, httpOptions);
  }
}
