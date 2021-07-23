import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonnamayaComponent } from './donnamaya.component';

describe('DonnamayaComponent', () => {
  let component: DonnamayaComponent;
  let fixture: ComponentFixture<DonnamayaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonnamayaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonnamayaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
