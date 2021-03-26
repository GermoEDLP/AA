export class Avion {
  matricula: string;
  n_variable: string;
  c_efectividad: string;
  n_serie: string;
  n_linea: string;
  marca: string;
  modelo: string;
  id?: number;

  constructor(
    marca: string = "",
    modelo: string = "",
    matricula: string = "",
    n_variable: string = "",
    c_efectividad: string = "",
    n_serie: string = "",
    n_linea: string = "",
    id?: number
  ) {
    this.marca = marca;
    this.modelo = modelo;
    this.matricula = matricula;
    this.n_variable = n_variable;
    this.c_efectividad = c_efectividad;
    this.n_serie = n_serie;
    this.n_linea = n_linea;
    if(id){
      this.id = id;
    }
  }
}
