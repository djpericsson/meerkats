import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DhangshaComponent } from './dhangsha.component';

describe('DhangshaComponent', () => {
  let component: DhangshaComponent;
  let fixture: ComponentFixture<DhangshaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DhangshaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DhangshaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
