import {Component, OnInit} from '@angular/core';
import {UploadFileService} from 'src/app/_services/upload-file.service';
import {Observable} from 'rxjs';
import {HttpClient, HttpEventType, HttpResponse} from '@angular/common/http';
import {TokenStorageService} from '../../_services/token-storage.service';

@Component({
  selector: 'app-upload-files',
  templateUrl: './upload-files.component.html',
  styleUrls: ['./upload-files.component.css']
})
export class UploadFilesComponent implements OnInit {

  // @ts-ignore
  selectedFiles: FileList;
  // @ts-ignore
  currentFile: File;
  progress = 0;
  message = '';
  motCle = '';

  // @ts-ignore
  fileInfos: Observable<any>;
  srcView = '';

  apiMoules = 'http://localhost:8080/etudiants/modules?';
  api = '';
  semestre = 's1';
  niveau = 'premierAnnee';
  filiere = 'CP';
  public listModule: any;
  displayUpload = 'none';
  private idCours = '';

  constructor(private tokenStorage: TokenStorageService, private uploadService: UploadFileService, private http: HttpClient) {
  }

  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
  }

  ajouterCours(id: string): void {
    this.idCours = id;
    this.displayUpload = 'block';
    console.log(this.idCours);
  }

  upload(): void {
    this.progress = 0;

    // @ts-ignore
    this.currentFile = this.selectedFiles.item(0);
    console.log(this.motCle);
    this.uploadService.upload(this.currentFile, this.motCle, this.idCours).subscribe(
      event => {
        if (event.type === HttpEventType.UploadProgress) {
          // @ts-ignore
          this.progress = Math.round(100 * event.loaded / event.total);
        } else if (event instanceof HttpResponse) {
          this.message = event.body.message;
          this.fileInfos = this.uploadService.getFiles();
        }
      },
      err => {
        this.progress = 0;
        this.message = 'Could not upload the file!';
        // @ts-ignore
        this.currentFile = undefined;
      });

    // @ts-ignore
    this.selectedFiles = undefined;
  }

  ngOnInit(): void {
    this.fileInfos = this.uploadService.getFiles();
    this.getModules();
  }

  viewCours(url: string): void {
    this.srcView = url;
  }

  public getModules(): void {
    this.listModule = [];

    this.api = this.apiMoules + 'nom=' + this.semestre + '&niveau=' + this.niveau + '&filiere=' + this.filiere;
    console.log(this.api);
    this.http.get(this.api).subscribe(data => {
        // @ts-ignore
        this.listModule = data.modules;
      }, error => {
        console.log(error);
      }
    );
  }
}
