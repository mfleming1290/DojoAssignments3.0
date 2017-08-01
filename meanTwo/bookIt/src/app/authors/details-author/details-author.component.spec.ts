import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsAuthorComponent } from './details-author.component';

describe('DetailsAuthorComponent', () => {
  let component: DetailsAuthorComponent;
  let fixture: ComponentFixture<DetailsAuthorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsAuthorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsAuthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
