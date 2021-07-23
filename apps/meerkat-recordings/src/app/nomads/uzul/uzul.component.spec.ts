import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UzulComponent } from './uzul.component';

describe('UzulComponent', () => {
  let component: UzulComponent;
  let fixture: ComponentFixture<UzulComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UzulComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UzulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
