import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-botao-secundario',
  imports: [],
  templateUrl: './botao-secundario.component.html',
  styleUrl: './botao-secundario.component.scss'
})
export class BotaoSecundarioComponent {

    @Input() texto: string = "";
    @Input() navegarPara: string = "";


    constructor(public router: Router) { }


    navegar() {
        this.router.navigate([this.navegarPara]);
    }
}
