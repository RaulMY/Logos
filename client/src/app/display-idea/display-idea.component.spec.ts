import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayIdeaComponent } from './display-idea.component';

describe('DisplayIdeaComponent', () => {
  let component: DisplayIdeaComponent;
  let fixture: ComponentFixture<DisplayIdeaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayIdeaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayIdeaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
