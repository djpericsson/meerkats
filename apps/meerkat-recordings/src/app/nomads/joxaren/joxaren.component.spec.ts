import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoxarenComponent } from './joxaren.component';

describe('JoxarenComponent', () => {
  let component: JoxarenComponent;
  let fixture: ComponentFixture<JoxarenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JoxarenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JoxarenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
