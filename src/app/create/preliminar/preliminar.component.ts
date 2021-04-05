import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { ConfirmationService, MessageService } from "primeng/api";
import { OptionsService } from "../../services/options.service";
import { RegistrosService } from "../../services/registros.service";
import { Registro, Pendientes } from '../../models/registro.model';
import { Preliminar } from "../../models/options.model";
import { pluck, take } from "rxjs/operators";
import { Store } from "@ngrx/store";
import { AppState } from "../../app.reducers";
import { SetPreliminaresAction } from "../../ngrx/actions/preliminares.action";
import { SetRegistroAction } from "../../ngrx/actions/registro.actions";

@Component({
  selector: "app-preliminar",
  templateUrl: "./preliminar.component.html",
  styleUrls: ["./preliminar.component.scss"],
  providers: [ConfirmationService, MessageService],
})
export class PreliminarComponent implements OnInit {
  form: FormGroup;
  registro: Registro;
  pasa: boolean;
  preliminaresDelRegitro: Preliminar[];
  preliminares: Preliminar[];
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
    this.getInfoByDB();
  }

  getInfoByDB() {
    this.store
      .select("registro")
      .pipe(pluck("registro"))
      .subscribe((data: Registro) => {
        this.registro = { ...data };
        console.log(this.registro);
      });
    this.optSvc
      .getAll("preliminares")
      .pipe(take(1))
      .subscribe((pres: Preliminar[]) => {
        this.preliminares = pres;
        if (this.registro.preliminares) {
          {
            // Evaluar si coicide con los preliminares que existían
          }
        }
      });
  }

  check() {
    let pasa = true;
    setTimeout(() => {
      this.preliminares.forEach((pre) => {
        if (pre.opc != pre.para_aprobacion) {
          pasa = false;
        }
      });
      this.pasa = pasa;
    }, 50);
  }

  nextPage(tipo: "finish" | "next") {
    let mensaje;
    let completado;
    if (tipo == "finish") {
      mensaje =
        "Esta seguro de guardar los cambios realizados hasta aquí, marcar esta paso como 'Pendiente' y salir del creador?";
      completado = false;
    } else {
      mensaje =
        "Esta seguro de guardar los cambios realizados hasta aquí y proseguir con el siguiente paso?";
      completado = true;
    }
    this.confSvc.confirm({
      message: mensaje,
      acceptLabel: "Si",
      icon: "pi pi-check",
      accept: () => {
        // Object.assign(this.registro, {preliminares: this.preliminares});
        this.registro.preliminares = this.preliminares;
        let pendientes: Pendientes = {...this.registro.pendientes};
        pendientes.preliminares = false;
        this.registro.pendientes = pendientes;
        let registroActualizado = new Registro({...this.registro});
        this.regSvc.update(registroActualizado).subscribe(() => {
          this.store.dispatch(new SetRegistroAction(registroActualizado));
          if (tipo == "finish") {
            this.router.navigateByUrl("/home");
          } else {
            this.router.navigateByUrl("/create/aviones");
          }
        });
      },
    });
  }

  saveAtLocalStorage(registro: Registro) {
    if (localStorage.getItem("registro")) {
      localStorage.removeItem("registro");
    }
    localStorage.setItem("registro", JSON.stringify(registro));
  }

  prevPage() {
    this.confSvc.confirm({
      message:
        "Esta seguro de volver al paso anterior? Perderá todos los datos de este paso que no haya guardado.",
      acceptLabel: "Si",
      icon: "pi pi-check",
      accept: () => {
        this.saveAtLocalStorage(this.registro);
        this.router.navigateByUrl("/create/datos");
      },
    });
  }
}
