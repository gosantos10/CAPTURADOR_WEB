import { Component } from '@angular/core';
import { BotaoPrimarioComponent } from "../shared/botao-primario/botao-primario.component";
import { BotaoSecundarioComponent } from '../shared/botao-secundario/botao-secundario.component';

@Component({
  selector: 'app-consulta-dataprev',
  imports: [BotaoPrimarioComponent, BotaoSecundarioComponent],
  standalone: true,
  templateUrl: './consulta-dataprev.component.html',
  styleUrl: './consulta-dataprev.component.scss'
})
export class ConsultaDataprevComponent {

}
