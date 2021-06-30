import { HomeJeuSocieteComponent } from './home-jeu-societe/home-jeu-societe.component';
import { HomeJeuVideoComponent } from './home-jeu-video/home-jeu-video.component';
import { PanierComponent } from './component/panier/panier.component';
import { ListClientComponent } from './component/list-client/list-client.component';
import { LoginComponent } from './component/login/login.component';
import { EditClientComponent } from './component/edit-client/edit-client.component';
import { HomeComponent } from './component/home/home.component';
import { JeuxSocieteComponent } from './component/jeux-societe/jeux-societe.component';
import { EditJeuxSocieteComponent } from './component/edit-jeux-societe/edit-jeux-societe.component';
import { Routes } from '@angular/router';
import { UtilisateurConnecteService } from './services/utilisateur-connecte.service';
import { ProfilClientComponent } from './component/profil-client/profil-client.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'jeux-societe', component: JeuxSocieteComponent },
  { path: 'edit-jeux-societe', component: EditJeuxSocieteComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'edit-client', component: EditClientComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'client',
    component: ListClientComponent,
    canActivate: [UtilisateurConnecteService],
  },
  {
    path: 'client/edit',
    component: EditClientComponent,
    canActivate: [UtilisateurConnecteService],
  },
  {
    path: 'client/edit/:id',
    component: EditClientComponent,
    canActivate: [UtilisateurConnecteService],
  },
  {
    path: 'client/profil',
    component: ProfilClientComponent,
    canActivate: [UtilisateurConnecteService],
  },
  {
    path: 'panier',
    component: PanierComponent,
  },
  {
    path: 'jeuxvideo',
    component: HomeJeuVideoComponent,
  },
  {
    path: 'jeuxsociete',
    component: HomeJeuSocieteComponent,
  },
];
