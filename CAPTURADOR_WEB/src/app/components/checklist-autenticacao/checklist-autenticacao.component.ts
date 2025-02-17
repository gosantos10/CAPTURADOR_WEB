import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { BotaoContinuarComponent } from "../shared/botao-continuar/botao-continuar.component";

@Component({
  selector: 'app-checklist-autenticacao',
  standalone: true,
  imports: [CommonModule, MatButtonModule, BotaoContinuarComponent],
  templateUrl: './checklist-autenticacao.component.html',
  styleUrl: './checklist-autenticacao.component.scss'
})
export class ChecklistAutenticacaoComponent {

}
