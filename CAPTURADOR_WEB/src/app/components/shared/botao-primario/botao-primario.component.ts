import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-botao-primario',
  imports: [],
  templateUrl: './botao-primario.component.html',
  styleUrl: './botao-primario.component.scss'
})
export class BotaoPrimarioComponent {

  @Input() texto: string = "";
  @Input() navegarPara: string = "";

  constructor(private router: Router) { }



  navegar() {
    this.router.navigate([this.navegarPara]);
  }
}
