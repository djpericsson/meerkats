import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoniandfloreComponent } from './phoniandflore.component';

describe('PhoniandfloreComponent', () => {
  let component: PhoniandfloreComponent;
  let fixture: ComponentFixture<PhoniandfloreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhoniandfloreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoniandfloreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
