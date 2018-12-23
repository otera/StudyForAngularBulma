import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrolltestComponent } from './scrolltest.component';

describe('ScrolltestComponent', () => {
  let component: ScrolltestComponent;
  let fixture: ComponentFixture<ScrolltestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ScrolltestComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrolltestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
