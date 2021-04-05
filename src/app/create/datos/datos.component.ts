import { Component, OnInit } from "@angular/core";
import { OptionsService } from "../../services/options.service";
import { Categoria } from "../../models/options.model";
import { take } from "rxjs/operators";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ConfirmationService, MessageService } from "primeng/api";
import { Registro } from "../../models/registro.model";
import { RegistrosService } from "../../services/registros.service";
import { Store } from "@ngrx/store";
import { AppState } from "../../app.reducers";
import { SetRegistroAction } from "../../ngrx/actions/registro.actions";

@Component({
  selector: "app-datos",
  templateUrl: "./datos.component.html",
  styleUrls: ["./datos.component.scss"],
  providers: [ConfirmationService, MessageService],
})
export class DatosComponent implements OnInit {
  categorias: Categoria[];
  form: FormGroup;
  ela: boolean = false;

  constructor(
    private optSvc: OptionsService,
    private fb: FormBuilder,
    private router: Router,
    private confSvc: ConfirmationService,
    private msgSvc: MessageService,
    private regSvc: RegistrosService,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.optSvc
      .getAll("categorias")
      .pipe(take(1))
      .subscribe((cats: Categoria[]) => {
        this.categorias = cats;
      });
    this.crearForm();
  }

  get n_docValid() {
    return this.form.get("n_doc").touched && this.form.get("n_doc").invalid;
  }

  get tituloValid() {
    return this.form.get("titulo").touched && this.form.get("titulo").invalid;
  }

  crearForm() {
    this.form = this.fb.group({
      n_doc: ["", Validators.required],
      titulo: ["", Validators.required],
      c_ata: [""],
      f_emision: [""],
      f_revision: [""],
      categ: [""],
      n_revision: [""],
      n_ela: [""],
      ela: [false],
      completado: [false],
    });
  }

  next() {
    if (this.form.valid) {
      // Difeenciar entre nuevo y update
      const {
        n_doc,
        titulo,
        c_ata,
        f_emision,
        f_revision,
        categ,
        n_revision,
        n_ela,
        ela,
      } = this.form.value;
      this.confSvc.confirm({
        message: "Esta seguro de guardar los cambios realizados hasta aquí?",
        acceptLabel: "Si",
        icon: "pi pi-check",
        accept: () => {
          let registro: Registro = new Registro({...this.form.value, completado: true}, {estado: false, paso: 'datos'});
          this.regSvc.create(registro).subscribe(() => {
            this.store.dispatch(new SetRegistroAction(registro));
            this.router.navigateByUrl("/create/preliminar");
          });
        },
      });
    } else {
      this.form.markAllAsTouched();
      this.msgSvc.add({
        severity: "error",
        summary: "Error",
        detail: "Complete los campos obligatorios para continuar.",
      });
    }
  }

  disabled() {
    if (this.form.controls["n_ela"].status == "DISABLED") {
      this.form.controls["n_ela"].enable();
    } else {
      this.form.controls["n_ela"].reset();
      this.form.controls["n_ela"].disable();
    }
  }

  inicio() {
    this.confSvc.confirm({
      message:
        "Esta seguro de descartar todos los cambios realizados hasta aquí?",
      acceptLabel: "Si",
      accept: () => {
        this.router.navigate([`/create`, "preliminar", 2]);
      },
    });
  }
}
