import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeJeuSocieteComponent } from './home-jeu-societe.component';

describe('HomeJeuSocieteComponent', () => {
  let component: HomeJeuSocieteComponent;
  let fixture: ComponentFixture<HomeJeuSocieteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeJeuSocieteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeJeuSocieteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
