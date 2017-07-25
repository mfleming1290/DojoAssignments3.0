import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteListComponentComponent } from './quote-list-component.component';

describe('QuoteListComponentComponent', () => {
  let component: QuoteListComponentComponent;
  let fixture: ComponentFixture<QuoteListComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuoteListComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
