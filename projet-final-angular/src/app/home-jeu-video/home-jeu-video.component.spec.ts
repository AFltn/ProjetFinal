import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeJeuVideoComponent } from './home-jeu-video.component';

describe('HomeJeuVideoComponent', () => {
  let component: HomeJeuVideoComponent;
  let fixture: ComponentFixture<HomeJeuVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeJeuVideoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeJeuVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
