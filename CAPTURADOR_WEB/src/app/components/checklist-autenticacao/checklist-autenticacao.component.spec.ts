import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChecklistAutenticacaoComponent } from './checklist-autenticacao.component';

describe('ChecklistAutenticacaoComponent', () => {
  let component: ChecklistAutenticacaoComponent;
  let fixture: ComponentFixture<ChecklistAutenticacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChecklistAutenticacaoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChecklistAutenticacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
