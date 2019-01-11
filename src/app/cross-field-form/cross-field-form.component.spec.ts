import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrossFieldFormComponent } from './cross-field-form.component';

describe('CrossFieldFormComponent', () => {
  let component: CrossFieldFormComponent;
  let fixture: ComponentFixture<CrossFieldFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrossFieldFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrossFieldFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
