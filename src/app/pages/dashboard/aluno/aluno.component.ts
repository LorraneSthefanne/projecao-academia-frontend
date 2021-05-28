import { Component, OnInit } from '@angular/core';
import {IOpcao} from "../../../_model/IOpcao";

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.scss']
})
export class AlunoComponent implements OnInit {

  opcoes: IOpcao[] = [];

  constructor() {
  }

  ngOnInit(): void {
    this.opcoes = [
      {
        nome: 'Cadastrar',
        ativo: true,
        descricao: 'Realizar o cadastro de um novo aluno.',
        link: 'cadastro'
      },
      {
        nome: 'Consultar',
        ativo: true,
        descricao: 'Consultar um aluno já existente.',
        link: 'consulta'
      }
    ]
  }

}
