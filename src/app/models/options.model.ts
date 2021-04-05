import { Avion } from "./avion.model";
export class Opciones {
  id?: number;
  preliminar: Preliminar[];
  criterios: Criterios[];
  impactos: Impacto[];
  categorias: Categoria[];
}

export class Preliminar {
  id?: number;
  nombre: string;
  desc: string;
  opc?: boolean;
  para_aprobacion: boolean;
  created_at: Date;

  constructor(
    nombre: string = "",
    desc: string = "",
    para_aprobacion: boolean = false,
    id?: number
  ) {
    this.nombre = nombre;
    this.desc = desc;
    this.para_aprobacion = para_aprobacion;
    this.opc = false;
    this.created_at = new Date();
    if (id) {
      this.id = id;
    }
  }
}

export class Criterios {
  id?: number;
  nombre: string;
  desc: string;
  created_at: Date;
  pond?: number;
  peso: number;
  constructor(
    nombre: string = "",
    desc: string = "",
    peso: number = null,
    id?: number
  ) {
    this.nombre = nombre;
    this.desc = desc;
    this.created_at = new Date();
    this.peso = peso;
    if (id) {
      this.id = id;
    }
  }
}

export class Impacto {
  id?: number;
  tipo: "prog" | "costos";
  value: number;
  base: number;
  min: number;
  max: number;
  tope: number;
  created_at: Date;
  constructor(
    tipo: "prog" | "costos",
    base: number,
    min: number,
    max: number,
    tope: number,
    id?: number,
    value?: number,
  ) {
    this.tipo = tipo;
    this.base = base;
    this.min = min;
    this.max = max;
    this.tope = tope;
    this.created_at = new Date();
    if (value) {
      this.value = value;
    }
    if (id) {
      this.id = id;
    }
  }
}

export class Categoria {
  id?: number;
  nombre: string;
  desc: string;
  constructor(nombre: string = "", desc: string = "") {
    this.nombre = nombre;
    this.desc = desc;
  }
  update(nombre: string, desc: string, id: number) {
    this.nombre = nombre;
    this.desc = desc;
    this.id = id;
  }
  log() {
    console.log(this.id, this.nombre, this.desc);
  }
}

export type impactType = "BP" | "BC" | "MP" | "MC" | "AP" | "AC";

export type storeNameType =
  | "criterios"
  | "preliminares"
  | "categorias"
  | "impactos"
  | "aviones";

export type optionConfigType =
  | Preliminar
  | Criterios
  | Impacto
  | Categoria
  | Avion;
