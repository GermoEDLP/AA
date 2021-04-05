import * as fromRegistro from "../actions/registro.actions";
import { Registro } from "../../models/registro.model";

export interface RegistroState {
  registro: Registro;
}

const estadoInicial: RegistroState = {
  registro: null,
};

export function registroReducer(
  state = estadoInicial,
  action: fromRegistro.Acciones
): RegistroState {
  switch (action.type) {
    case fromRegistro.SET_REGISTRO:
      return {
        registro: { ...action.registro },
      };
    case fromRegistro.UNSET_REGISTRO:
      return {
        registro: null,
      };
    default:
      return state;
  }
}
