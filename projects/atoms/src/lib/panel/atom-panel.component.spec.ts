import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtomPanelComponent } from './atom-panel.component';

describe('AtomPanelComponent', () => {
  let component: AtomPanelComponent;
  let fixture: ComponentFixture<AtomPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtomPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtomPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
