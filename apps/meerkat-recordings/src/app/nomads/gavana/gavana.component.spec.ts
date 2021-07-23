import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GavanaComponent } from './gavana.component';

describe('GavanaComponent', () => {
  let component: GavanaComponent;
  let fixture: ComponentFixture<GavanaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GavanaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GavanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
