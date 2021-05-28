import {Component, OnInit} from '@angular/core';
import {AlunoService} from "../../_services/aluno.service";
import {IAluno} from "../../_models/IAluno";
import {IAlunoFiltro} from "../../_models/IAlunoFiltro";
import {Router} from "@angular/router";
import {ToastService} from "../../../../../_services/toast.service";

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.scss']
})
export class ConsultaComponent implements OnInit {

  alunos: IAluno[];
  pagina = 0;
  tamanho = 5;
  totalRegistro = 0;

  constructor(private alunoService: AlunoService, private router: Router, private toastService: ToastService) {
  }

  ngOnInit(): void {
    this.pesquisar();
  }


  pesquisar(filtro?: IAlunoFiltro, pagina = 0, tamanho = 99999) {
    this.alunoService.pesquisar({}, pagina, tamanho)
      .subscribe(p => {
        this.alunos = p.lista;
        this.totalRegistro = p.quantidade
      });
  }

  detalhe(id: string) {
    console.log(id)
    void this.router.navigate(['dashboard', 'aluno', 'consulta', id]);
  }

  remover(id: string) {
    this.alunoService.remover(id)
      .subscribe(() => {
        this.alunoService.aluno = null;
        this.toastService.success('Aluno removido com sucesso.');
        this.pesquisar();
      });
  }


}
