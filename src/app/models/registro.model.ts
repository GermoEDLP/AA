import { Avion } from "./avion.model";
import { Comentario } from "./comentario.model";
import { Categoria, Criterios, Preliminar } from "./options.model";
import { Reunion } from "./reunion.model";

export class Registro {
  public n_doc: string;
  public titulo: string;
  public c_ata?: string;
  public f_emision?: Date;
  public f_revision?: Date;
  public categ?: Categoria[];
  public n_revision?: string;
  public n_ela?: string;
  public ela?: boolean;
  public craeted_at?: Date;
  public updated_at?: Date;
  public id?: string;
  public pendientes?: Pendientes;
  public preliminares?: Preliminar[];
  public aviones?: Avion[];
  public criterios?: Criterios[];
  public comentarios?: Comentario[];
  public reunion?: Reunion;

  constructor(registro: Registro, paso?: { estado: boolean; paso: string }) {
    const now = new Date();
    this.craeted_at = now;
    this.updated_at = now;
    this.n_doc = registro.n_doc;
    this.titulo = registro.titulo;
    this.c_ata = registro.c_ata ? registro.c_ata : "";
    this.f_emision = registro.f_emision ? registro.f_emision : undefined;
    this.f_revision = registro.f_revision ? registro.f_revision : undefined;
    this.categ = registro.categ ? registro.categ : undefined;
    this.n_revision = registro.n_revision ? registro.n_revision : "";
    this.n_ela = registro.n_ela ? registro.n_ela : "";
    this.ela = registro.ela ? registro.ela : false;
    this.preliminares = registro.preliminares ? registro.preliminares : [];
    this.aviones = registro.aviones ? registro.aviones : [];
    this.criterios = registro.criterios ? registro.criterios : [];
    this.comentarios = registro.comentarios ? registro.comentarios : [];

    if(registro.id){
      this.id = registro.id;
    }

    this.pendientes = registro.pendientes
      ? registro.pendientes
      : {
          preliminares: true,
          criterios: true,
          aviones: true,
          impacto: true,
          final: true,
          datos: true,
        };

    if (paso) {
      this.pendientes[paso.paso] = paso.estado;
    }
  }
}

export interface Form {
  n_doc: string;
  titulo: string;
  c_ata: string;
  f_emision: Date;
  f_revision: Date;
  categ: Categoria[];
  n_revision: string;
  n_ela: string;
  ela: boolean;
}

export interface Pendientes {
  preliminares: boolean;
  criterios: boolean;
  aviones: boolean;
  impacto: boolean;
  final: boolean;
  datos: boolean;
}
