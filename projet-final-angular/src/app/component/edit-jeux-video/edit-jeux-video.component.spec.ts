import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditJeuxVideoComponent } from './edit-jeux-video.component';

describe('EditJeuxVideoComponent', () => {
  let component: EditJeuxVideoComponent;
  let fixture: ComponentFixture<EditJeuxVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditJeuxVideoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditJeuxVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
