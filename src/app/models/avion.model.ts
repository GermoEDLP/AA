
export class Avion{
  matricula: string;
  n_variable: string;
  c_efectividad: string;
  n_serie: string;
  n_linea: string;
  marca: string;
  modelo: string;

  constructor(marca: string, modelo: string, matricula: string){
    this.marca = marca;
    this.modelo = modelo;
    this.matricula = matricula;
  }
}
