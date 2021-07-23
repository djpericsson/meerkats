import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuphloComponent } from './nuphlo.component';

describe('NuphloComponent', () => {
  let component: NuphloComponent;
  let fixture: ComponentFixture<NuphloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuphloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuphloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
