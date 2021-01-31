import {Component, OnInit} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {HttpClient} from '@angular/common/http';
import {TokenStorageService} from '../../_services/token-storage.service';

@Component({
  selector: 'app-list-demande-etudiant',
  templateUrl: './list-demande-etudiant.component.html',
  styleUrls: ['./list-demande-etudiant.component.css']
})
export class ListDemandeEtudiantComponent implements OnInit {
  apiDemande = 'http://localhost:8080/etudiants/';
  api = '';
  codeMasar = '';
  public listDemande: any;
  private baseUrl = 'http://localhost:8080/api/demandes';

  constructor(private http: HttpClient, private tokenStorage: TokenStorageService, private sanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.codeMasar = this.tokenStorage.getUser().utilisateur.codeMasar;
    }
    this.getDemandes();
  }

  public getDemandes(): void {
    this.api = this.apiDemande + this.codeMasar;
    this.http.get(this.api).subscribe(data => {
        // @ts-ignore
        this.listDemande = data.demandes;
        console.log(this.listDemande);
      }, error => {
        console.log(error);
      }
    );
  }

  public deleteDemande(id: any): void {
    this.http.delete(`${this.baseUrl}/${id}`).subscribe(data => {
        this.getDemandes();
      }, error => {
        console.log(error);
      }
    );
  }
}
