import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../../environments/environment";
import {IAluno} from "../_models/IAluno";
import {IPage} from "../../../../_model/IPage";
import {stringify} from "query-string";
import {IAlunoFiltro} from "../_models/IAlunoFiltro";
import {finalize} from "rxjs/operators";
import {BlockUI, NgBlockUI} from "ng-block-ui";

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  aluno?: IAluno;

  @BlockUI() blockUI: NgBlockUI;

  constructor(private htpp: HttpClient) {
  }

  cadastrar(aluno: IAluno): Observable<IAluno> {
    this.blockUI.start()
    return this.htpp.post(`${environment.BASE_URL_API}/pessoas`, aluno)
      .pipe(
        finalize(() => this.blockUI.stop())
      );
  }

  atualizar(aluno: IAluno): Observable<IAluno> {
    this.blockUI.start()
    return this.htpp.put(`${environment.BASE_URL_API}/pessoas/${aluno.id}`, aluno)
      .pipe(
        finalize(() => this.blockUI.stop())
      );
  }

  remover(id: string): Observable<any> {
    this.blockUI.start()
    return this.htpp.delete(`${environment.BASE_URL_API}/pessoas/${id}`)
      .pipe(
        finalize(() => this.blockUI.stop())
      );
  }

  pesquisar(filtro?: IAlunoFiltro, pagina = 0, tamanho = 10): Observable<IPage<IAluno>> {
    const query = stringify(
      {
        pagina: pagina,
        tamanho: tamanho,
        nome: filtro.nome,
        documento: filtro.documento,
        email: filtro.email
      },
      {
        skipEmptyString: true,
        skipNull: true,
      }
    );
    this.blockUI.start();
    return this.htpp.get(`${environment.BASE_URL_API}/pessoas?${query}`)
      .pipe(
        finalize(() => this.blockUI.stop())
      );
  }

  pesquisarWithoutLoader(filtro?: IAlunoFiltro, pagina = 0, tamanho = 10): Observable<IPage<IAluno>> {
    const query = stringify(
      {
        pagina: pagina,
        tamanho: tamanho,
        nome: filtro.nome,
        documento: filtro.documento,
        email: filtro.email
      },
      {
        skipEmptyString: true,
        skipNull: true,
      }
    );
    return this.htpp.get(`${environment.BASE_URL_API}/pessoas?${query}`);
  }

  buscar(id: string): Observable<IAluno> {
    this.blockUI.start()
    return this.htpp.get(`${environment.BASE_URL_API}/pessoas/${id}`)
      .pipe(
        finalize(() => this.blockUI.stop())
      );
  }
}
