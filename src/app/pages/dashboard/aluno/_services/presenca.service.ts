import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../../../environments/environment";
import {IFrequencia} from "../_models/IFrequencia";
import {BlockUI, NgBlockUI} from "ng-block-ui";
import {finalize, tap} from "rxjs/operators";
import {IPage} from "../../../../_model/IPage";

@Injectable({
  providedIn: 'root'
})
export class PresencaService {

  @BlockUI() blockUI: NgBlockUI;

  constructor(private htpp: HttpClient) {
  }

  confirmar(id: string, data: string): Observable<IFrequencia> {
    this.blockUI.start()
    return this.htpp.post(`${environment.BASE_URL_API}/frequencias`, {id, data})
      .pipe(
        finalize(() => this.blockUI.stop())
      );
  }

  buscar(id: string, pagina = 0, tamanho = 10): Observable<IPage<IFrequencia>> {
    this.blockUI.start()
    return this.htpp.get(`${environment.BASE_URL_API}/frequencias?idPessoa=${id}&pagina=${pagina}&tamanho=${tamanho}`)
      .pipe(
        finalize(() => this.blockUI.stop())
      );
  }
}
