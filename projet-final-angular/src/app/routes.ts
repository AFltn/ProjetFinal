import { ListClientComponent } from './component/list-client/list-client.component';
import { LoginComponent } from './component/login/login.component';
import { EditClientComponent } from './component/edit-client/edit-client.component';
import { HomeComponent } from './component/home/home.component';
import { Routes } from '@angular/router';
import { UtilisateurConnecteService } from './services/utilisateur-connecte.service';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
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
];
