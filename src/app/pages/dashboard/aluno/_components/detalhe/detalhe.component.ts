import {Component, OnDestroy, OnInit} from '@angular/core';
import {AlunoService} from "../../_services/aluno.service";
import {IAluno} from "../../_models/IAluno";
import {ActivatedRoute, Router} from "@angular/router";
import {ToastService} from "../../../../../_services/toast.service";
import {PresencaService} from "../../_services/presenca.service";
import {IFrequencia} from "../../_models/IFrequencia";

@Component({
  selector: 'app-detalhe',
  templateUrl: './detalhe.component.html',
  styleUrls: ['./detalhe.component.scss']
})
export class DetalheComponent implements OnInit, OnDestroy {

  frequencias: IFrequencia[] = [];
  pagina = 0;
  tamanho = 5;

  constructor(private alunoService: AlunoService,
              private presencaService: PresencaService,
              private router: Router,
              private toastService: ToastService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    const idPessoa = this.activatedRoute.snapshot.params.id;
    this.buscarAluno(idPessoa);
    this.buscar(idPessoa);
  }

  buscarAluno(id: string) {
    this.alunoService.buscar(id)
      .subscribe((a: IAluno) => this.alunoService.aluno = a);
  }

  salvar(aluno: IAluno) {
    this.alunoService.atualizar(aluno)
      .subscribe(() => {
        this.toastService.success('Aluno atualizado com sucesso.');
        // void this.router.navigate(['dashboard', 'aluno', 'consulta']);
      });
  }

  buscar(id: string) {
    this.presencaService.buscar(id, 0, 9999)
      .subscribe(f => this.frequencias = f.lista);
  }

  get alunoSelecionado(): IAluno {
    return this.alunoService?.aluno;
  }

  ngOnDestroy(): void {
    this.alunoService.aluno = null;
  }



}
