import { Avion } from "./avion.model";
import { Comentario } from "./comentario.model";
import { Categoria, Criterios, Preliminar } from "./options.model";
import { Reunion } from "./reunion.model";

export class Registro {

  public n_doc: string;
  public titulo: string;
  public c_ata: string;
  public f_emision: Date;
  public f_revision: Date;
  public categ: Categoria[];
  public n_revision: string;
  public n_ela: string;
  public ela: boolean;
  public craeted_at: Date;
  public updated_at: Date;
  public id?: string;
  public preliminares: Preliminar[];
  public aviones: Avion[];
  public criterios: Criterios[];
  public comentarios: Comentario[];
  public reunion?: Reunion;

  constructor() {
    const now = new Date();
    this.craeted_at = now;
    this.updated_at = now;
  }
}
