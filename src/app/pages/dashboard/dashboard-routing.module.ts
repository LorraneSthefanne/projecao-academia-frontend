import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {PresencaComponent} from "./presenca/presenca.component";
import {AuthGuard} from "../../_helpers/auth.guard";


const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    component: HomeComponent
  },
  {
    path: 'presenca',
    canActivate: [AuthGuard],
    component: PresencaComponent
  },
  {
    path: 'aluno',
    canActivate: [AuthGuard],
    loadChildren: () => import('./aluno/aluno.module').then(m => m.AlunoModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {
}
