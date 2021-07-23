import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasstrollsComponent } from './basstrolls.component';

describe('BasstrollsComponent', () => {
  let component: BasstrollsComponent;
  let fixture: ComponentFixture<BasstrollsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasstrollsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasstrollsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
