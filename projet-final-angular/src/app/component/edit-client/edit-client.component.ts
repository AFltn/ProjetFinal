import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.css'],
})
export class EditClientComponent implements OnInit {
  prenomCtrl: FormControl;
  nomCtrl: FormControl;
  telCtrl: FormControl;
  mailCtrl: FormControl;
  numeroCtrl: FormControl;
  rueCtrl: FormControl;
  codePostalCtrl: FormControl;
  villeCtrl: FormControl;
  adresseGroup: FormGroup;
  loginCtrl: FormControl;
  passwordCtrl: FormControl;
  confirmCtrl: FormControl;
  passwordGroup: FormGroup;
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.prenomCtrl = fb.control('', Validators.required);
    this.nomCtrl = fb.control('', [
      Validators.required,
      Validators.minLength(2),
    ]);
    this.telCtrl = this.numeroCtrl = this.fb.control('', [
      Validators.required,
      Validators.minLength(10),
    ]);
    this.mailCtrl = this.fb.control('', [
      Validators.required,
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
    ]);
    this.numeroCtrl = this.fb.control('', Validators.required);
    this.rueCtrl = this.fb.control('', Validators.required);
    this.codePostalCtrl = this.fb.control('', Validators.required);
    this.villeCtrl = this.fb.control('', Validators.required);
    this.adresseGroup = this.fb.group({
      numero: this.numeroCtrl,
      rue: this.rueCtrl,
      codePostal: this.codePostalCtrl,
      ville: this.villeCtrl,
    });
    this.loginCtrl = this.fb.control('', Validators.minLength(6));
    this.passwordCtrl = this.fb.control('', Validators.minLength(8));
    this.confirmCtrl = this.fb.control('');
    this.passwordGroup = this.fb.group(
      {
        password: this.passwordCtrl,
        confirm: this.confirmCtrl,
      },
      {
        validators: this.checkPassword,
      }
    );
    this.form = fb.group({
      prenom: this.prenomCtrl,
      nom: this.nomCtrl,
      tel: this.telCtrl,
      mail: this.mailCtrl,
      adressGroup: this.adresseGroup,
      passwordGroup: this.passwordGroup,
    });
  }

  submit() {
    console.log(this.form);
    console.log(this.prenomCtrl.value);
  }

  checkPassword(group: FormGroup) {
    const password = group.controls.password;
    const confirm = group.controls.confirm;
    if (password.errors) {
      return null;
    }
    return password.value != confirm.value ? { notMatch: true } : null;
  }

  ngOnInit(): void {}
}
