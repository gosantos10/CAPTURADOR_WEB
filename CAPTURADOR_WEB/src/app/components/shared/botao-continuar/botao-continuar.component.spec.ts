import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoContinuarComponent } from './botao-continuar.component';

describe('BotaoContinuarComponent', () => {
  let component: BotaoContinuarComponent;
  let fixture: ComponentFixture<BotaoContinuarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotaoContinuarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotaoContinuarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
