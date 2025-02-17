import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { BotaoPrimarioComponent } from "../shared/botao-primario/botao-primario.component";

@Component({
  selector: 'app-checklist-autenticacao',
  standalone: true,
  imports: [CommonModule, MatButtonModule, BotaoPrimarioComponent],
  templateUrl: './checklist-autenticacao.component.html',
  styleUrl: './checklist-autenticacao.component.scss'
})
export class ChecklistAutenticacaoComponent {

}
