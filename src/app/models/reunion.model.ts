import { Comentario } from "./comentario.model";

export class Reunion {
  comentarios: Comentario[];
  f_limite: Date;
  responsable: string;
  e_aceptacion: aceptacion;
  e_cumplimiento: cumplimiento;
  f_reunion: Date;
  d_cumplimiento: string;
}

export type aceptacion = "Aceptado" | "Rechazado" | "Pendiente";
export type cumplimiento = "Emitido" | "No emitido" | "En preparación";
