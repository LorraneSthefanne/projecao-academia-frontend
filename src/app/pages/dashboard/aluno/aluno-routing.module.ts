import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AlunoComponent} from "./aluno.component";
import {CadastroComponent} from "./_components/cadastro/cadastro.component";
import {ConsultaComponent} from "./_components/consulta/consulta.component";
import {DetalheComponent} from "./_components/detalhe/detalhe.component";
import {AuthGuard} from "../../../_helpers/auth.guard";


const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    component: AlunoComponent
  },
  {
    path: 'cadastro',
    canActivate: [AuthGuard],
    component: CadastroComponent
  },
  {
    path: 'consulta',
    canActivate: [AuthGuard],
    component: ConsultaComponent
  },
  {
    path: 'consulta/:id',
    canActivate: [AuthGuard],
    component: DetalheComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlunoRoutingModule { }
