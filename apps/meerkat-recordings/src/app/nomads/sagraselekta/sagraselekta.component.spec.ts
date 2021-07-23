import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SagraselektaComponent } from './sagraselekta.component';

describe('SagraselektaComponent', () => {
  let component: SagraselektaComponent;
  let fixture: ComponentFixture<SagraselektaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SagraselektaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SagraselektaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
