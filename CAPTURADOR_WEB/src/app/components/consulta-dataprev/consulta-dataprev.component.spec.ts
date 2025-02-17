import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaDataprevComponent } from './consulta-dataprev.component';

describe('ConsultaDataprevComponent', () => {
  let component: ConsultaDataprevComponent;
  let fixture: ComponentFixture<ConsultaDataprevComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultaDataprevComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultaDataprevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
