import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WdgwComponent } from './wdgw.component';

describe('WdgwComponent', () => {
  let component: WdgwComponent;
  let fixture: ComponentFixture<WdgwComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WdgwComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WdgwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
