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
}
