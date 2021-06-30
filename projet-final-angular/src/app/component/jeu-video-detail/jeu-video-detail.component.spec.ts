import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JeuVideoDetailComponent } from './jeu-video-detail.component';

describe('JeuVideoDetailComponent', () => {
  let component: JeuVideoDetailComponent;
  let fixture: ComponentFixture<JeuVideoDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JeuVideoDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JeuVideoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
