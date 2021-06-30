import { HomeComponent } from './component/home/home.component';
import { JeuxSocieteComponent } from './component/jeux-societe/jeux-societe.component';
import { EditJeuxSocieteComponent } from './component/edit-jeux-societe/edit-jeux-societe.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'jeux-societe', component: JeuxSocieteComponent },
  { path: 'edit-jeux-societe', component: EditJeuxSocieteComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];
