import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditJeuxSocieteComponent } from './edit-jeux-societe.component';

describe('EditJeuxSocieteComponent', () => {
  let component: EditJeuxSocieteComponent;
  let fixture: ComponentFixture<EditJeuxSocieteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditJeuxSocieteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditJeuxSocieteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
