import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KinglmanComponent } from './kinglman.component';

describe('KinglmanComponent', () => {
  let component: KinglmanComponent;
  let fixture: ComponentFixture<KinglmanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KinglmanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KinglmanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
