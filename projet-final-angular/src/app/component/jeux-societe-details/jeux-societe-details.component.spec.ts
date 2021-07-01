import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JeuxSocieteDetailsComponent } from './jeux-societe-details.component';

describe('JeuxSocieteDetailsComponent', () => {
  let component: JeuxSocieteDetailsComponent;
  let fixture: ComponentFixture<JeuxSocieteDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JeuxSocieteDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JeuxSocieteDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
