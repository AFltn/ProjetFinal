import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { JeuxVideo } from 'src/app/model/jeux-video';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Avis } from 'src/app/model/avis';
import { JeuxVideoService } from 'src/app/services/jeux-video.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-avis',
  templateUrl: './edit-avis.component.html',
  styleUrls: ['./edit-avis.component.css'],
})
export class EditAvisComponent implements OnInit {
  avis: Observable<Avis> | any = null;
  jeuVideo: Observable<JeuxVideo> | any = null;
  form: FormGroup;
  noteCtrl: FormControl;
  commentaireCtrl: FormControl;

  constructor(
    private jeuxVideoService: JeuxVideoService,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {
    this.commentaireCtrl = fb.control('', Validators.required);
    this.noteCtrl = fb.control('', [
      Validators.required,
      Validators.maxLength(1),
    ]);

    this.form = fb.group({
      note: this.noteCtrl,
      commmentaire: this.commentaireCtrl,
    });
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params.id) {
        this.jeuVideo = this.jeuxVideoService
          .get(params.id)
          .subscribe((data) => {
            this.jeuVideo = data;
          });
      }
    });
  }
}
