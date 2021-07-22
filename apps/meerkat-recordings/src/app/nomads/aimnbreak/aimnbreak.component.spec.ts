import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AimnbreakComponent } from './aimnbreak.component';

describe('AimnbreakComponent', () => {
  let component: AimnbreakComponent;
  let fixture: ComponentFixture<AimnbreakComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AimnbreakComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AimnbreakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
