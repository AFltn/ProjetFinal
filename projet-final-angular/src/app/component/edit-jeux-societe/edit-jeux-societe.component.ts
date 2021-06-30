import { SupportJeuxSociete } from './../../enum/support-jeux-societe';
import { TypeJeuxSociete } from './../../enum/type-jeux-societe';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-edit-jeux-societe',
  templateUrl: './edit-jeux-societe.component.html',
  styleUrls: ['./edit-jeux-societe.component.css'],
})
export class EditJeuxSocieteComponent implements OnInit {
  nomCtrl: FormControl;
  editeurCtrl: FormControl;
  prixCtrl: FormControl;
  dateCtrl: FormControl;
  ageCtrl: FormControl;
  nbJMinCtrl: FormControl;
  nbJMaxCtrl: FormControl;
  dureeCtrl: FormControl;
  genreCtrl: FormControl;
  supportCtrl: FormControl;
  descriptionCtrl: FormControl;
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.nomCtrl = fb.control('', [
      Validators.required,
      Validators.minLength(2),
    ]);
    this.editeurCtrl = fb.control('', [
      Validators.required,
      Validators.minLength(2),
    ]);
    this.prixCtrl = fb.control(0, [Validators.required]);
    this.dateCtrl = fb.control(null, [Validators.required]);
    this.ageCtrl = fb.control(0, [Validators.required, Validators.min(0)]);
    this.nbJMinCtrl = fb.control(0, [Validators.required, Validators.min(1)]);
    this.nbJMaxCtrl = fb.control(0, [Validators.required, Validators.min(1)]);
    this.dureeCtrl = fb.control(0, [Validators.required, Validators.min(1)]);
    this.descriptionCtrl = fb.control('', [
      Validators.required,
      Validators.minLength(10),
    ]);
    this.genreCtrl = fb.control(null, [Validators.required]);
    this.supportCtrl = fb.control(null, [Validators.required]);
    this.form = fb.group({
      nom: this.nomCtrl,
      editeur: this.editeurCtrl,
      prix: this.prixCtrl,
      age: this.ageCtrl,
      nbJoueursMin: this.nbJMinCtrl,
      nbJoueursMax: this.nbJMaxCtrl,
      duree: this.dureeCtrl,
      description: this.descriptionCtrl,

      date: this.dateCtrl,
    });
  }

  submit() {
    console.log(this.form);

    let genre: TypeJeuxSociete[] = [];
    for (let i = 0; i < this.genreCtrl.value.length; i++) {
      genre[i] = (<any>TypeJeuxSociete)[this.genreCtrl.value[i]];
    }
    let support: SupportJeuxSociete[] = [];
    for (let i = 0; i < this.supportCtrl.value.length; i++) {
      support[i] = (<any>SupportJeuxSociete)[this.supportCtrl.value[i]];
    }

    console.log(genre);
    console.log(support);
  }
  ngOnInit(): void {}
}
