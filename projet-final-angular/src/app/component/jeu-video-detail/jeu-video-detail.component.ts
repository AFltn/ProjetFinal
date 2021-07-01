import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { JeuxVideo } from 'src/app/model/jeux-video';
import { JeuxVideoService } from 'src/app/services/jeux-video.service';

@Component({
  selector: 'app-jeu-video-detail',
  templateUrl: './jeu-video-detail.component.html',
  styleUrls: ['./jeu-video-detail.component.css'],
})
export class JeuVideoDetailComponent implements OnInit {
  jeuVideo: Observable<JeuxVideo> | any = null;

  constructor(
    private jeuxVideoService: JeuxVideoService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

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

  nombreAvis(): number {
    let cpt: number = 0;
    this.jeuVideo.avis.forEach((a: any) => {
      console.log(a);
      cpt = cpt + 1;
    });
    return cpt;
  }

  noteMoyenne(): number {
    let cpt: number = 0;
    let cpt2: number = 0;
    this.jeuVideo.avis.forEach((a: any) => {
      cpt2 = cpt2 + a.note;
      cpt = cpt + 1;
    });
    this.jeuVideo.noteMoyenne = cpt2 / cpt;

    if (isNaN(this.jeuVideo.noteMoyenne)) {
      return 0;
    } else {
      return Math.round(this.jeuVideo.noteMoyenne);
    }
  }

  note(i: number) {
    if (i > 0) {
      return new Array(Math.round(i));
    }
    return new Array();
  }
}
