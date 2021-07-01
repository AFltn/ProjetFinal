import { JeuxSocieteService } from './../../services/jeux-societe.service';
import { JeuxVideo } from 'src/app/model/jeux-video';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-jeux',
  templateUrl: './list-jeux.component.html',
  styleUrls: ['./list-jeux.component.css'],
})
export class ListJeuxComponent implements OnInit {
  jeuVideo: Observable<JeuxVideo> | any = null;

  constructor(private jeuxVideoService: JeuxSocieteService) {}

  ngOnInit(): void {}

  initJeuVideo() {
    this.jeuVideo = this.jeuxVideoService.getAll();
  }

  delete(id: number) {
    this.jeuxVideoService.delete(id).subscribe((result) => {
      this.initJeuVideo();
    });
  }
}
