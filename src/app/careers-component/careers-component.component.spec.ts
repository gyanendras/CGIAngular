import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareersComponentComponent } from './careers-component.component';

describe('CareersComponentComponent', () => {
  let component: CareersComponentComponent;
  let fixture: ComponentFixture<CareersComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CareersComponentComponent]
    });
    fixture = TestBed.createComponent(CareersComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
