import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {TokenStorageService} from '../../_services/token-storage.service';

@Component({
  selector: 'app-faire-demande-etudiant',
  templateUrl: './faire-demande-etudiant.component.html',
  styleUrls: ['./faire-demande-etudiant.component.css']
})
export class FaireDemandeEtudiantComponent implements OnInit {
  API = 'http://localhost:8080/etudiants/modules';
  form: any = {
    typeDemande: 'ReleveDesNotes',
    description: null
  };
  codeMasarr = '';
  isSuccessful = false;
  isFailed = false;
  errorMessage = '';

  constructor(private http: HttpClient, private tokenStorage: TokenStorageService) {
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.codeMasarr = this.tokenStorage.getUser().utilisateur.codeMasar;
    const {
      typeDemande,
      description,
    } = this.form;
    this.ajouterDemande(typeDemande, description, this.codeMasarr).subscribe(
      data => {
        this.isSuccessful = true;
        this.isFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isFailed = true;
      }
    );
  }

  public ajouterDemande(typeDemande: string, description: string, codeMasar: string): Observable<any> {
    console.log(typeDemande);
    console.log(description);
    console.log(codeMasar);
    console.log(this.API);
    return this.http.post(this.API, {typeDemande, description, codeMasar});
  }
}
