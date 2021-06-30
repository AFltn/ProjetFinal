import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAvisUtilisateurComponent } from './list-avis-utilisateur.component';

describe('ListAvisUtilisateurComponent', () => {
  let component: ListAvisUtilisateurComponent;
  let fixture: ComponentFixture<ListAvisUtilisateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAvisUtilisateurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAvisUtilisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
