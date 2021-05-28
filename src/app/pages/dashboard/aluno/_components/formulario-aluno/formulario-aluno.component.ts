import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AlunoService} from "../../_services/aluno.service";
import {IAluno} from "../../_models/IAluno";
import {ModalidadeService} from "../../_services/modalidade.service";
import {Router} from "@angular/router";

interface IModalidade {
  id?: string;
  nome?: string;
  descricao?: string;
}

@Component({
  selector: 'app-formulario-aluno',
  templateUrl: './formulario-aluno.component.html',
  styleUrls: ['./formulario-aluno.component.scss']
})
export class FormularioAlunoComponent implements OnInit, OnDestroy {

  form?: FormGroup;
  submitted?: boolean;
  @Input() isDetalhe = false;
  @Output() salvarEvent = new EventEmitter<IAluno>();

  modalidades?: IModalidade[] = [];

  constructor(private fb: FormBuilder,
              private router: Router,
              private alunoService: AlunoService,
              private modalidadeService: ModalidadeService) {
  }

  ngOnInit(): void {
    const {required, maxLength, email} = Validators;
    const aluno = this.alunoService?.aluno ?? null;
    this.form = this.fb.group({
      id: [aluno?.id, []],
      nome: [aluno?.nome, [required, maxLength(100)]],
      dataNascimento: [aluno?.dataNascimento, [required]],
      documento: [aluno?.documento, [required, maxLength(14)]],
      telefone: [aluno?.telefone, [required, maxLength(15)]],
      email: [aluno?.email, [required, email, maxLength(50)]],
      tipo: ["ALUNO", [required, maxLength(20)]],
      modalidades: [aluno?.modalidades, [required, maxLength(20)]],
    });
    this.pesquisarModalidade();
  }

  get alunoControl() {
    return this.form.controls;
  }

  cadastrar() {
    this.submitted = true;
    if (this.form.invalid) return;
    const aluno = this.form.value as IAluno;
    this.salvarEvent.emit(aluno);
  }

  pesquisarModalidade(event?: any) {
    this.modalidadeService.pesquisar(event?.filter)
      .subscribe(m => this.modalidades = m.lista);
  }

  ngOnDestroy(): void {
    this.form.reset({});
  }

}
