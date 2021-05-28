import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AlunoService} from "../aluno/_services/aluno.service";
import {IAluno} from "../aluno/_models/IAluno";
import {PresencaService} from "../aluno/_services/presenca.service";

import * as moment from "moment";
import {ToastService} from "../../../_services/toast.service";

@Component({
  selector: 'app-presenca',
  templateUrl: './presenca.component.html',
  styleUrls: ['./presenca.component.scss']
})
export class PresencaComponent implements OnInit {

  form?: FormGroup;
  alunos?: IAluno[] = []
  submitted?: boolean;

  constructor(private fb: FormBuilder,
              private router: Router,
              private alunoService: AlunoService,
              private presencaService: PresencaService,
              private toastService: ToastService) {
  }

  ngOnInit(): void {
    const {required} = Validators;
    this.form = this.fb.group({
      aluno: [null, [required]],
      data: [new Date(), [required]],
    });
    this.pesquisarAluno();
  }

  get formulario() {
    return this.form.controls;
  }

  pesquisarAluno(event?: any) {
    const query = event?.query as string;
    this.alunoService.pesquisarWithoutLoader({nome: query})
      .subscribe(p => this.alunos = p.lista);
  }

  confirmar() {
    this.submitted = true;
    if (this.form.invalid) return;
    const presenca = this.form.value;
    const data = moment(presenca.data).format('DD/MM/YYYY');
    const aluno = presenca.aluno as IAluno;
    this.presencaService.confirmar(aluno.id, data)
      .subscribe(() => {
        this.toastService.success('Presença confirmada com sucesso.');
        this.submitted = false;
        this.form.reset({aluno: null, data: new Date()});
      }, ({error}) => {
        const {errorMessage} = error;
        this.toastService.error('Presença já confirmada.');
      })
  }


}
