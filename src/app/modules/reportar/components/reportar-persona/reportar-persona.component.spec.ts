import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportarPersonaComponent } from './reportar-persona.component';

describe('ReportarPersonaComponent', () => {
  let component: ReportarPersonaComponent;
  let fixture: ComponentFixture<ReportarPersonaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportarPersonaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportarPersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
