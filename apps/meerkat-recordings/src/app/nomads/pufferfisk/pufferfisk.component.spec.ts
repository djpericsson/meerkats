import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PufferfiskComponent } from './pufferfisk.component';

describe('PufferfiskComponent', () => {
  let component: PufferfiskComponent;
  let fixture: ComponentFixture<PufferfiskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PufferfiskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PufferfiskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
