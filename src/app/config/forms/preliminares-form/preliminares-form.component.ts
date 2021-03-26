import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { OptionsService } from "../../../services/options.service";
import { Preliminar } from "../../../models/options.model";
import { take } from "rxjs/operators";

@Component({
  selector: "preliminares-form",
  templateUrl: "./preliminares-form.component.html",
  styleUrls: ["./preliminares-form.component.scss"],
})
export class PreliminaresFormComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder, private optSvc: OptionsService) {}

  @Output("close") close: EventEmitter<void> = new EventEmitter();
  @Input() preliminar: Preliminar;
  botonFinal: string;

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.botonFinal = this.preliminar.id ? "Actualizar" : "Crear";
    this.form = this.fb.group({
      nombre: [this.preliminar.nombre, Validators.required],
      desc: [this.preliminar.desc, Validators.required],
      para_aprobacion: [this.preliminar.para_aprobacion, Validators.required],
    });
  }

  createPre() {
    if (this.form.valid) {
      if (this.preliminar.id) {
        const { nombre, desc, para_aprobacion } = this.form.value;
        this.optSvc
          .update(
            "preliminares",
            new Preliminar(nombre, desc, para_aprobacion, this.preliminar.id)
          )
          .pipe(take(1))
          .subscribe(() => {
            console.log("Actualizado");
            this.close.emit();
          });
      } else {
        const { nombre, desc, para_aprobacion } = this.form.value;
        this.optSvc
          .create("preliminares", new Preliminar(nombre, desc, para_aprobacion))
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
