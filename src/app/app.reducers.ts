import { ActionReducerMap } from "@ngrx/store";
import * as fromRegistro from "./ngrx/reducers/registro.reducer";
import * as fromPreliminares from "./ngrx/reducers/preliminares.reducer";
import { Preliminar } from './models/options.model';

export interface AppState{
  registro: fromRegistro.RegistroState,
  preliminares: Preliminar[]
}

export const appReducers: ActionReducerMap<AppState> = {
  registro: fromRegistro.registroReducer,
  preliminares: fromPreliminares.preliminaresReducer
}
