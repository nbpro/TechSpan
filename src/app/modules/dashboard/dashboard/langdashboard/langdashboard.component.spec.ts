import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LangdashboardComponent } from './langdashboard.component';

describe('LangdashboardComponent', () => {
  let component: LangdashboardComponent;
  let fixture: ComponentFixture<LangdashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LangdashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LangdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
