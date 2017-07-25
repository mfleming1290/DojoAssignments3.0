import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerComponentComponent } from './power-component.component';

describe('PowerComponentComponent', () => {
  let component: PowerComponentComponent;
  let fixture: ComponentFixture<PowerComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PowerComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PowerComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
