import {Component, OnInit} from '@angular/core';
import {TokenStorageService} from '../../_services/token-storage.service';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  showSideBarEtudiant = false;
  showSideBarAdministrateur = false;
  showSideBarEnseignant = false;
  private roles: string[] = [];

  constructor(private tokenStorage: TokenStorageService) {
  }

  ngOnInit(): void {
    this.roles.push(this.tokenStorage.getUser().utilisateur.role);

    this.showSideBarAdministrateur = this.roles.includes('ROLE_ADMINISTRATEUR');
    this.showSideBarEnseignant = this.roles.includes('ROLE_ENSEIGNANT');
    this.showSideBarEtudiant = this.roles.includes('ROLE_ETUDIANT');
  }
}

