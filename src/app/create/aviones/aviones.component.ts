import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppState } from "../../app.reducers";
import { OptionsService } from "../../services/options.service";
import { Avion } from "../../models/avion.model";
import { take, pluck } from "rxjs/operators";
import { SetRegistroAction } from "../../ngrx/actions/registro.actions";
import { Registro, Pendientes } from "../../models/registro.model";
import { ConfirmationService, MenuItem, MessageService } from "primeng/api";
import { Router } from "@angular/router";
import { RegistrosService } from "../../services/registros.service";

@Component({
  selector: "app-aviones",
  templateUrl: "./aviones.component.html",
  styleUrls: ["./aviones.component.scss"],
  providers: [ConfirmationService, MessageService],
})
export class AvionesComponent implements OnInit {
  aviones: Avion[];
  avionesSeleccionados: Avion[] = [];
  registro: Registro;
  display: boolean = false;
  avion: Avion;
  items: MenuItem[];
  itemsPrev: MenuItem[];

  constructor(
    private store: Store<AppState>,
    private optSvc: OptionsService,
    private confSvc: ConfirmationService,
    private router: Router,
    private regSvc: RegistrosService
  ) {}

  ngOnInit(): void {
    this.store.dispatch(
      new SetRegistroAction(
        new Registro({
          n_doc: "AAEEE123",
          titulo: "Primer registro",
          aviones: [
            {
              marca: "Airbus",
              modelo: "789",
              matricula: "WW12LP-96A3",
              n_variable: "123456",
              c_efectividad: "sasasas",
              n_serie: "AAAB2345",
              n_linea: "21212123",
              id: 3,
            },
          ],
          pendientes: {
            datos: false,
            preliminares: false,
            aviones: true,
            criterios: true,
            impacto: true,
            final: true,
          },
        })
      )
    );
    this.store
      .select("registro")
      .pipe(pluck("registro"))
      .subscribe((data) => {
        if (data == null) {
          this.router.navigateByUrl("/home");
        } else {
          this.registro = { ...data };
          console.log(this.registro);
          this.getAviones();
          this.setItems();
        }
      });
  }

  getAviones() {
    this.optSvc
      .getAll("aviones")
      .pipe(take(1))
      .subscribe((aviones) => {
        this.aviones = aviones.filter((avion) => {
          let res = this.registro.aviones.find((avionRegistro) => {
            return avionRegistro.id == avion.id;
          });
          return res == undefined;
        });
        console.log(this.aviones);
      });
    if (this.registro.aviones.length != 0) {
      this.avionesSeleccionados = this.registro.aviones.map((avion) => {
        return { ...avion };
      });
    }
  }

  setItems() {
    this.items = [
      {
        label: "Guardar y salir",
        icon: "pi pi-save",
        command: () => {
          this.confirmDialog(
            'Esta seguro de guardar los datos del paso como "completado" y luego salir del modo creación?',
            "Guardar y salir",
            this.save,
            "complete",
            this.out
          );
        },
      },
      {
        label: "Guardar (pendiente) y salir",
        icon: "pi pi-save",
        command: () => {
          this.confirmDialog(
            'Esta seguro de guardar los datos del paso como "pendiente" y luego salir del modo creación?',
            "Guardar (pendiente) y salir",
            this.save,
            "pendiente",
            this.out
          );
        },
      },
      { separator: true },
      {
        label: "Salir sin guardar",
        icon: "pi pi-times",
        command: () => {
          this.confirmDialog(
            "Esta seguro de salir del modo creación sin guardar ningún dato de este paso?",
            "Salir sin guardar",
            this.clear,
            "pendiente",
            this.out
          );
        },
      },
      { separator: true },
      {
        label: "Siguiente (pendiente)",
        icon: "pi pi-caret-right",
        command: () => {
          this.confirmDialog(
            'Esta seguro de guardar los datos del paso como "pendiente" y luego continuar al siguiente paso del modo creación?',
            "Guardar (pendiente) y salir",
            this.save,
            "pendiente",
            this.nextPage
          );
        },
      },
    ];
    this.itemsPrev = [
      {
        label: "Guardar y atras",
        icon: "pi pi-save",
        command: () => {
          this.confirmDialog(
            'Esta seguro de guardar los datos del paso como "completado" y luego volver al paso anterior?',
            "Guardar y salir",
            this.save,
            "complete",
            this.prevPage
          );
        },
      },
      {
        label: "Guardar (pendiente) y atras",
        icon: "pi pi-save",
        command: () => {
          this.confirmDialog(
            'Esta seguro de guardar los datos del paso como "pendiente" y luego volver al paso anterior?',
            "Guardar y salir",
            this.save,
            "pendiente",
            this.prevPage
          );
        },
      },
    ];
  }

  nextCompletado() {
    this.confirmDialog(
      'Esta seguro de guardar los datos del paso como "completado" y luego avanzar al siguinete paso del modo creación?',
      "Guardar y siguiente",
      this.save,
      "complete",
      this.nextPage
    );
  }

  showInfo(avion: Avion) {
    this.avion = avion;
    this.display = true;
  }

  prevPage(router: Router) {
    router.navigateByUrl("/create/preliminar");
  }
  nextPage(router: Router) {
    router.navigateByUrl("/create/criterios");
  }
  out(router: Router) {
    router.navigateByUrl("/home");
  }

  clear(
    registro: Registro,
    regSvc: RegistrosService,
    store: Store,
    avionesSeleccionados: Avion[],
    tipo?: "pendiente" | "complete"
  ): Promise<string> {
    return new Promise((res, rej) => {
      // this.avionesSeleccionados = [];
      res("ok");
    });
  }

  save(
    registro: Registro,
    regSvc: RegistrosService,
    store: Store,
    avionesSeleccionados: Avion[],
    tipo?: "pendiente" | "complete"
  ): Promise<string> {
    return new Promise((res, rej) => {
      registro.aviones = avionesSeleccionados;
      if (tipo == "complete") {
        let pendientes: Pendientes = { ...registro.pendientes };
        pendientes.aviones = false;
        registro.pendientes = pendientes;
      }
      let registroActualizado = new Registro({ ...registro });
      regSvc
        .update(registroActualizado)
        .pipe(take(1))
        .subscribe(() => {
          store.dispatch(new SetRegistroAction(registroActualizado));
          res(tipo);
        });
    });
  }

  confirmDialog(
    message: string,
    header: string,
    func1: Function,
    param1?: string,
    func2?: Function
  ) {
    this.confSvc.confirm({
      message,
      header,
      acceptLabel: "Si",
      accept: () => {
        if (param1)
          func1(
            this.registro,
            this.regSvc,
            this.store,
            this.avionesSeleccionados,
            param1
          ).then(() => func2(this.router));
      },
    });
  }
}
