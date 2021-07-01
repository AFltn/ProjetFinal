import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Adresse } from 'src/app/model/adresse';
import { Client } from 'src/app/model/client';
import { Utilisateur } from 'src/app/model/utilisateur';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.css'],
})
export class EditClientComponent implements OnInit {
  client: Client = new Client();
  idCtrl: FormControl;
  prenomCtrl: FormControl;
  nomCtrl: FormControl;
  telCtrl: FormControl;
  mailCtrl: FormControl;
  numeroCtrl: FormControl;
  rueCtrl: FormControl;
  codePostalCtrl: FormControl;
  villeCtrl: FormControl;
  paysCtrl: FormControl;
  adresseGroup: FormGroup;
  loginCtrl: FormControl;
  dateCtrl: FormControl;
  passwordCtrl: FormControl;
  confirmCtrl: FormControl;
  passwordGroup: FormGroup;
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private clientService: ClientService,
    private aR: ActivatedRoute,
    private router: Router
  ) {
    this.idCtrl = fb.control('', Validators.required);
    this.prenomCtrl = fb.control('', Validators.required);
    this.dateCtrl = fb.control('', Validators.required);
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
    this.paysCtrl = this.fb.control('', Validators.required);
    this.adresseGroup = this.fb.group({
      numero: this.numeroCtrl,
      rue: this.rueCtrl,
      codePostal: this.codePostalCtrl,
      ville: this.villeCtrl,
      pays: this.paysCtrl,
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
      date: this.dateCtrl,
      tel: this.telCtrl,
      mail: this.mailCtrl,
      adressGroup: this.adresseGroup,
      passwordGroup: this.passwordGroup,
    });
  }

  submit() {
    this.client = new Client(
      this.idCtrl.value,
      this.nomCtrl.value,
      this.prenomCtrl.value,
      new Adresse(
        this.numeroCtrl.value,
        this.rueCtrl.value,
        this.codePostalCtrl.value,
        this.villeCtrl.value,
        this.paysCtrl.value
      ),
      this.dateCtrl.value,
      this.mailCtrl.value,
      this.telCtrl.value,
      new Utilisateur(this.loginCtrl.value, this.confirmCtrl.value)
    );

    console.log(this.client);
    if (this.client.id) {
      this.clientService.update(this.client).subscribe((resut) => {
        this.router.navigate(['/home']);
      });
    } else {
      this.clientService.create(this.client).subscribe((result) => {
        this.router.navigate(['/home']);
      });
    }
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
