import {Component, OnInit} from '@angular/core';
import {IAluno} from "../../_models/IAluno";
import {AlunoService} from "../../_services/aluno.service";
import {Router} from "@angular/router";
import {ToastService} from "../../../../../_services/toast.service";

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  constructor(private alunoService: AlunoService, private router: Router, private toastService: ToastService) {
  }

  ngOnInit(): void {
  }

  cadastrar(aluno: IAluno) {
    this.alunoService.cadastrar(aluno)
      .subscribe(() => {
        this.router.navigate(['dashboard', 'aluno', 'consulta']);
        this.toastService.success('Aluno cadastrado com sucesso.');
      });
  }

}
