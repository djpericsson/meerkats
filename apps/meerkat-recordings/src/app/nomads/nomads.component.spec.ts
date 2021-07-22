import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NomadsComponent } from './nomads.component';

describe('NomadsComponent', () => {
  let component: NomadsComponent;
  let fixture: ComponentFixture<NomadsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NomadsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NomadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
