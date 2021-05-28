import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IModalidade} from "../_models/IModalidade";
import {environment} from "../../../../../environments/environment";
import {IPage} from "../../../../_model/IPage";
import {stringify} from "query-string";

@Injectable({
  providedIn: 'root'
})
export class ModalidadeService {

  constructor(private http: HttpClient) {
  }

  pesquisar(nome = '', pagina = 0, tamanho = 10): Observable<IPage<IModalidade>> {
    const query = stringify(
      {
        pagina: pagina,
        tamanho: tamanho,
        nome
      },
      {
        skipEmptyString: true,
        skipNull: true,
      }
    );
    return this.http.get(`${environment.BASE_URL_API}/modalidades?${query}`);
  }
}
