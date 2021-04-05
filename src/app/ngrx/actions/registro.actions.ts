import { Action } from "@ngrx/store";
import { Registro } from '../../models/registro.model';


export const SET_REGISTRO = '[Registro] Agregar registro actual';
export const UNSET_REGISTRO = '[Registro] Limpiar registro actual';

export class SetRegistroAction implements Action{
  readonly type = SET_REGISTRO;

  constructor(public registro: Registro){

  }
}

export class UnsetRegistroAction implements Action{
  readonly type = UNSET_REGISTRO;

  constructor(){

  }
}

export type Acciones = SetRegistroAction | UnsetRegistroAction;
