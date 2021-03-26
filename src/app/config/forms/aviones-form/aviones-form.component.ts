import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { OptionsService } from "../../../services/options.service";
import { Avion } from "../../../models/avion.model";
import { take } from "rxjs/operators";

@Component({
  selector: "aviones-form",
  templateUrl: "./aviones-form.component.html",
  styleUrls: ["./aviones-form.component.scss"],
})
export class AvionesFormComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder, private optSvc: OptionsService) {}

  @Output("close") close: EventEmitter<void> = new EventEmitter();
  @Input() avion: Avion;
  botonFinal: string;

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.botonFinal = this.avion.id ? "Actualizar" : "Crear";
    this.form = this.fb.group({
      matricula: [this.avion.matricula, Validators.required],
      n_variable: [this.avion.n_variable, Validators.required],
      c_efectividad: [this.avion.c_efectividad, Validators.required],
      n_serie: [this.avion.n_serie, Validators.required],
      n_linea: [this.avion.n_linea, Validators.required],
      marca: [this.avion.marca, Validators.required],
      modelo: [this.avion.modelo, Validators.required],
    });
  }

  createAvion() {
    if (this.form.valid) {
      const {
        matricula,
        n_variable,
        c_efectividad,
        n_serie,
        n_linea,
        marca,
        modelo,
      } = this.form.value;
      if (this.avion.id) {
        const id = this.avion.id;
        this.optSvc
          .update(
            "aviones",
            new Avion(
              marca,
              modelo,
              matricula,
              n_variable,
              c_efectividad,
              n_serie,
              n_linea,
              id
            )
          )
          .pipe(take(1))
          .subscribe(() => {
            console.log("Actualizado");
            this.close.emit();
          });
      } else {
        this.optSvc
          .create(
            "aviones",
            new Avion(
              marca,
              modelo,
              matricula,
              n_variable,
              c_efectividad,
              n_serie,
              n_linea
            )
          )
          .pipe(take(1))
          .subscribe(() => {
            console.log("Creado");
            this.close.emit();
          });
      }
    }
    return;
  }
}
