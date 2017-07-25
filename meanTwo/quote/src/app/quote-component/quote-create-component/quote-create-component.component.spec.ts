import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteCreateComponentComponent } from './quote-create-component.component';

describe('QuoteCreateComponentComponent', () => {
  let component: QuoteCreateComponentComponent;
  let fixture: ComponentFixture<QuoteCreateComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuoteCreateComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteCreateComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
