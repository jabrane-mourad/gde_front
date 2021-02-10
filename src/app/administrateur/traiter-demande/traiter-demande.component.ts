import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {TokenStorageService} from '../../_services/token-storage.service';
import {DomSanitizer} from '@angular/platform-browser';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Component({
  selector: 'app-traiter-demande',
  templateUrl: './traiter-demande.component.html',
  styleUrls: ['./traiter-demande.component.css']
})
export class TraiterDemandeComponent implements OnInit {

  apiBase = 'http://localhost:8080/adminisateur/demandes';
  apiDemande = '';
  typeDemande = 'ReleveDesNotes';
  listDemande: any;
  displayJustificationInput = 'none';
  justification = '';
  id = '';
  displayMsg = false;
  message = '';


  constructor(private http: HttpClient, private tokenStorage: TokenStorageService, private sanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
    this.getDemandes();
  }

  public getDemandes(): void {
    this.apiDemande = this.apiBase + '?typeDemande=' + this.typeDemande;
    this.http.get(this.apiDemande).subscribe(data => {
        this.listDemande = data;
      }, error => {
        console.log(error);
      }
    );
  }


  public accepter(id: string): any {

    this.http.post(`http://localhost:8080/adminisateur/demandes/accepter/${id}`, {}).subscribe(data => {
        this.getDemandes();
        this.message = 'la demande a été acceptée';
        this.displayMsg = true;
      }, error => {
        console.log(error);
      }
    );
  }

  refuser(id: any): void {
    this.id = id;
    this.displayJustificationInput = 'block';

  }

  valider(): any {
    console.log(this.id);
    console.log(this.justification);
    this.displayJustificationInput = 'none';
    const id = this.id;
    const justification = this.justification;
    this.http.post(`http://localhost:8080/adminisateur/demandes/refuser?id=${id}&justification=${justification}`, {}).subscribe(data => {
      this.getDemandes();
      this.message = 'la demande a été refusée';
      this.displayMsg = true;
    }, error => {
      console.log(error);
    });

  }
}
