import { Routes } from '@angular/router';
import { ChecklistAutenticacaoComponent } from './components/checklist-autenticacao/checklist-autenticacao.component';

export const routes: Routes = [
    {
        path: "",
        redirectTo: "checklist-autenticacao",
        pathMatch: "full"
    },
    {
        path: "checklist-autenticacao",
        component: ChecklistAutenticacaoComponent
    }
];
