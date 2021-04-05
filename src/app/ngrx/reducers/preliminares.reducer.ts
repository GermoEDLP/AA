import * as fromPreliminares from "../actions/preliminares.action";
import { Preliminar } from '../../models/options.model';


const estadoInicial: Preliminar[] = [];

export function preliminaresReducer(
  state = estadoInicial,
  action: fromPreliminares.Acciones
): Preliminar[] {
  switch (action.type) {
    case fromPreliminares.SET_PRELIMINARES:
      return [...action.preliminares.map((pre)=>{
        return {...pre};
      })]
    case fromPreliminares.UNSET_PRELIMINARES:
      return [];
    default:
      return state;
  }
}
