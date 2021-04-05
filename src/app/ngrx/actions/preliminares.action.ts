import { Action } from "@ngrx/store";
import { Preliminar } from '../../models/options.model';


export const SET_PRELIMINARES = '[Preliminares] Agregar prelimnares';
export const UNSET_PRELIMINARES = '[Preliminares] Limpiar prelimnares';

export class SetPreliminaresAction implements Action{
  readonly type = SET_PRELIMINARES;

  constructor(public preliminares: Preliminar[]){

  }
}

export class UnsetPreliminaresAction implements Action{
  readonly type = UNSET_PRELIMINARES;

  constructor(){

  }
}

export type Acciones = SetPreliminaresAction | UnsetPreliminaresAction;
