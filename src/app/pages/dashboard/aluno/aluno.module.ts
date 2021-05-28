import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlunoRoutingModule } from './aluno-routing.module';
import { AlunoComponent } from './aluno.component';
import {SharedModule} from "../../../shared/shared.module";
import { CadastroComponent } from './_components/cadastro/cadastro.component';
import { ConsultaComponent } from './_components/consulta/consulta.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CalendarModule} from "primeng/calendar";
import {InputTextModule} from "primeng/inputtext";
import {NgxMaskModule} from "ngx-mask";
import { FormularioAlunoComponent } from './_components/formulario-aluno/formulario-aluno.component';
import {DropdownModule} from "primeng/dropdown";
import {MultiSelectModule} from "primeng/multiselect";
import {RippleModule} from "primeng/ripple";
import {AutoCompleteModule} from "primeng/autocomplete";
import {RadioButtonModule} from "primeng/radiobutton";
import {InputNumberModule} from "primeng/inputnumber";
import {DialogModule} from "primeng/dialog";
import {TableModule} from "primeng/table";
import { DetalheComponent } from './_components/detalhe/detalhe.component';


@NgModule({
  declarations: [AlunoComponent, CadastroComponent, ConsultaComponent, FormularioAlunoComponent, DetalheComponent],
  imports: [
    CommonModule,
    AlunoRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    CalendarModule,
    InputTextModule,
    NgxMaskModule,
    DropdownModule,
    MultiSelectModule,
    FormsModule,
    RippleModule,
    AutoCompleteModule,
    RadioButtonModule,
    InputNumberModule,
    DialogModule,
    TableModule
  ]
})
export class AlunoModule { }
