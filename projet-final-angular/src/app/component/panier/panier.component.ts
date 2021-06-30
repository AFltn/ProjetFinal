import {
  FormGroup,
  Validators,
  FormControl,
  FormBuilder,
} from '@angular/forms';
import { CommandeService } from './../../services/commande.service';
import { ElementCommande } from './../../model/element-commande';
import { Observable } from 'rxjs';
import { PlateformeJeuxVideo } from './../../enum/plateforme-jeux-video';
import { TypeJeuxVideo } from './../../enum/type-jeux-video';
import { JeuxVideo } from './../../model/jeux-video';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EditAvisComponent } from '../edit-avis/edit-avis.component';
import { Paiement } from 'src/app/enum/paiement';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css'],
})
export class PanierComponent implements OnInit {
  jeuVideo: Observable<JeuxVideo> | any = null;
  elemCommande: Observable<ElementCommande> | any = null;

  visa: Paiement = Paiement.Visa;
  masterCard: Paiement = Paiement.MasterCard;
  paypal: Paiement = Paiement.Paypal;

  paiementCtrl: FormControl;
  livraisonCtrl: FormControl;
  form: FormGroup;

  constructor(
    private commandeService: CommandeService,
    private fb: FormBuilder
  ) {
    this.paiementCtrl = fb.control(null, Validators.required);
    this.livraisonCtrl = fb.control(null, Validators.required);

    this.form = fb.group({
      paiement: this.paiementCtrl,
      livraison: this.livraisonCtrl,
    });
  }

  ngOnInit(): void {
    this.initPanier();
  }

  initPanier() {
    this.elemCommande = this.commandeService.getAll();
  }

  myFunc() {
    window.alert('Commande valider');
  }

  delete(id: number) {
    this.commandeService.delete(id).subscribe((result) => {
      this.initPanier();
    });
  }
}
