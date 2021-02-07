import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {ProfileComponent} from './profile/profile.component';

import {authInterceptorProviders} from './_helpers/auth.interceptor';
import {NavbarComponent} from './components/navbar/navbar.component';
import {FooterComponent} from './components/footer/footer.component';
import {SidebarComponent} from './components/sidebar/sidebar.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {en_US, NZ_I18N} from 'ng-zorro-antd/i18n';
import {registerLocaleData} from '@angular/common';
import en from '@angular/common/locales/en';
import {IconsProviderModule} from './icons-provider.module';
import {NzLayoutModule} from 'ng-zorro-antd/layout';
import {NzMenuModule} from 'ng-zorro-antd/menu';
import {NzIconModule} from 'ng-zorro-antd/icon';
import {IconDefinition} from '@ant-design/icons-angular';
import {AccountBookFill, AlertFill, AlertOutline} from '@ant-design/icons-angular/icons';
import {RegisterEtudiantComponent} from './register/register-etudiant/register-etudiant.component';
import {NzSelectModule} from 'ng-zorro-antd/select';
import {RegisterEnseignantComponent} from './register/register-enseignant/register-enseignant.component';
import {CoursEtudiantComponent} from './etudiant/cours-etudiant/cours-etudiant.component';
import {NotesEtudiantComponent} from './etudiant/notes-etudiant/notes-etudiant.component';
import {AbsencesEtudiantComponent} from './etudiant/absences-etudiant/absences-etudiant.component';
import {ListDemandeEtudiantComponent} from './etudiant/list-demande-etudiant/list-demande-etudiant.component';
import {FaireDemandeEtudiantComponent} from './etudiant/faire-demande-etudiant/faire-demande-etudiant.component';
import {EmploisEtudiantComponent} from './etudiant/emplois-etudiant/emplois-etudiant.component';
import {UploadFilesComponent} from './administrateur/upload-files/upload-files.component';
import {TraiterDemandeComponent} from './administrateur/traiter-demande/traiter-demande.component';
import {NgxExtendedPdfViewerModule} from 'ngx-extended-pdf-viewer';
// @ts-ignore
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {DemoNgZorroAntdModule} from './ng-zorro-antd.module';

registerLocaleData(en);

const icons: IconDefinition[] = [AccountBookFill, AlertOutline, AlertFill];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ProfileComponent,
    NavbarComponent,
    FooterComponent,
    SidebarComponent,
    RegisterEtudiantComponent,
    RegisterEnseignantComponent,
    CoursEtudiantComponent,
    NotesEtudiantComponent,
    AbsencesEtudiantComponent,
    ListDemandeEtudiantComponent,
    FaireDemandeEtudiantComponent,
    EmploisEtudiantComponent,
    UploadFilesComponent,
    TraiterDemandeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    NzIconModule.forRoot(icons),
    NzSelectModule,
    NgxExtendedPdfViewerModule,
    DemoNgZorroAntdModule
  ],
  exports: [BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    NzSelectModule,
    NgxExtendedPdfViewerModule,
    DemoNgZorroAntdModule],
  providers: [authInterceptorProviders, {provide: NZ_I18N, useValue: en_US}],
  bootstrap: [AppComponent],
})
export class AppModule {}
