import {IModalidade} from "./IModalidade";

export interface IAluno {
  id?: string;
  nome?: string;
  dataNascimento?: string;
  documento?: string;
  telefone?: string;
  email?: string;
  tipo?: string;
  modalidades?: IModalidade[];
}
