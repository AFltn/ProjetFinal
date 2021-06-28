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
    PanierComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
