import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelBlockComponent } from './label-block.component';

describe('LabelBlockComponent', () => {
  let component: LabelBlockComponent;
  let fixture: ComponentFixture<LabelBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabelBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabelBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
