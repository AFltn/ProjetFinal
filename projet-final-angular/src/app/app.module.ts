import { MatSelectModule } from '@angular/material/select';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { EditAvisComponent } from './component/edit-avis/edit-avis.component';
import { EditClientComponent } from './component/edit-client/edit-client.component';
import { JeuxVideoComponent } from './component/jeux-video/jeux-video.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { EditCommandeComponent } from './component/edit-commande/edit-commande.component';
import { JeuxSocieteComponent } from './component/jeux-societe/jeux-societe.component';
import { PanierComponent } from './component/panier/panier.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { routes } from './routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditJeuxSocieteComponent } from './component/edit-jeux-societe/edit-jeux-societe.component';
import { EditJeuxVideoComponent } from './component/edit-jeux-video/edit-jeux-video.component';
import { LoginComponent } from './component/login/login.component';
import { ProfilClientComponent } from './component/profil-client/profil-client.component';
import { ListClientComponent } from './component/list-client/list-client.component';
import { HomeJeuVideoComponent } from './home-jeu-video/home-jeu-video.component';
import { HomeJeuSocieteComponent } from './home-jeu-societe/home-jeu-societe.component';
import { JeuVideoDetailComponent } from './component/jeu-video-detail/jeu-video-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EditAvisComponent,
    EditClientComponent,
    JeuxVideoComponent,
    HeaderComponent,
    FooterComponent,
    EditCommandeComponent,
    JeuxSocieteComponent,
    PanierComponent,
    EditJeuxSocieteComponent,
    EditJeuxVideoComponent,
    LoginComponent,
    ProfilClientComponent,
    ListClientComponent,
    HomeJeuVideoComponent,
    HomeJeuSocieteComponent,
    JeuVideoDetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
