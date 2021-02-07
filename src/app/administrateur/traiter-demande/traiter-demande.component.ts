import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TokenStorageService} from '../../_services/token-storage.service';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-traiter-demande',
  templateUrl: './traiter-demande.component.html',
  styleUrls: ['./traiter-demande.component.css']
})
export class TraiterDemandeComponent implements OnInit {
  apiBase = 'http://localhost:8080/adminisateur/demandes?';
  apiDemande = '';
  typeDemande = 'ReleveDesNotes';
  etatDemande = 'accepter';
  listDemande: any;


  constructor(private http: HttpClient, private tokenStorage: TokenStorageService, private sanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
    this.getDemandes();
  }

  public getDemandes(): void {
    this.apiDemande = this.apiBase + 'typeDemande=' + this.typeDemande + '&etatDemande=' + this.etatDemande;
    this.http.get(this.apiDemande).subscribe(data => {
        this.listDemande = data;
      }, error => {
        console.log(error);
      }
    );
  }

  accepter(id: any): void {

  }

  refuser(id: any): void {

  }
}
