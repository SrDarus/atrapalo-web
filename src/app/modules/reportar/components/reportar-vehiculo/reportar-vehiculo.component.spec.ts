import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportarVehiculoComponent } from './reportar-vehiculo.component';

describe('ReportarVehiculoComponent', () => {
  let component: ReportarVehiculoComponent;
  let fixture: ComponentFixture<ReportarVehiculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportarVehiculoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportarVehiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
