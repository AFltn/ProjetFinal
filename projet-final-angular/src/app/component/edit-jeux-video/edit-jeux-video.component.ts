import { PlateformeJeuxVideo } from './../../enum/plateforme-jeux-video';
import { TypeJeuxVideo } from './../../enum/type-jeux-video';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-jeux-video',
  templateUrl: './edit-jeux-video.component.html',
  styleUrls: ['./edit-jeux-video.component.css'],
})
export class EditJeuxVideoComponent implements OnInit {
  nomCtrl: FormControl;
  editeurCtrl: FormControl;
  prixCtrl: FormControl;
  dateCtrl: FormControl;
  ageCtrl: FormControl;
  nbJMinCtrl: FormControl;
  nbJMaxCtrl: FormControl;
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
      description: this.descriptionCtrl,

      date: this.dateCtrl,
    });
  }

  submit() {
    console.log(this.form);

    let genre: TypeJeuxVideo[] = [];
    for (let i = 0; i < this.genreCtrl.value.length; i++) {
      genre[i] = (<any>TypeJeuxVideo)[this.genreCtrl.value[i]];
    }
    let support: PlateformeJeuxVideo[] = [];
    for (let i = 0; i < this.supportCtrl.value.length; i++) {
      support[i] = (<any>PlateformeJeuxVideo)[this.supportCtrl.value[i]];
    }

    console.log(genre);
    console.log(support);
  }
  ngOnInit(): void {}
}
