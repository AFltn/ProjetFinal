import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { JeuxVideo } from 'src/app/model/jeux-video';
import { JeuxVideoService } from 'src/app/services/jeux-video.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  jeuxVideos: Observable<JeuxVideo[]> | any = null;

  constructor(private jeuxVideoService: JeuxVideoService) {}

  ngOnInit(): void {
    this.jeuxVideos = this.jeuxVideoService.getAll();
  }

  noteMoyenne(jeuVideo: JeuxVideo): number {
    let cpt: number = 0;
    let cpt2: number = 0;
    jeuVideo.avis.forEach((a: any) => {
      cpt2 = cpt2 + a.note;
      cpt = cpt + 1;
    });
    jeuVideo.noteMoyenne = cpt2 / cpt;

    if (isNaN(jeuVideo.noteMoyenne)) {
      return 0;
    } else {
      return Math.round(jeuVideo.noteMoyenne);
    }
  }

  note(i: number) {
    if (i > 0) {
      return new Array(Math.round(i));
    }
    return new Array();
  }
}
