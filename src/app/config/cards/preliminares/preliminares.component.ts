import { Component, OnInit } from "@angular/core";
import { ConfirmationService, MessageService } from "primeng/api";
import { Subscription } from "rxjs";
import { take } from "rxjs/operators";
import { Preliminar } from "../../../models/options.model";
import { OptionsService } from "../../../services/options.service";

@Component({
  selector: "config-card-preliminares",
  templateUrl: "./preliminares.component.html",
  styleUrls: ["./preliminares.component.scss"],
  providers: [ConfirmationService, MessageService],
})
export class PreliminaresComponent implements OnInit {
  preliminares: Preliminar[];
  subs: Subscription = new Subscription();
  titulo: string = "Nuevo criterio Preliminar";
  display: boolean = false;
  preliminar: Preliminar;

  constructor(
    private optSvc: OptionsService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.getPreliminares();
  }

  getPreliminares() {
    this.subs = this.optSvc
      .getAll("preliminares")
      .pipe(take(1))
      .subscribe((pres: Preliminar[]) => {
        this.preliminares = pres;
      });
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  showForm(titulo: string, pre: Preliminar = new Preliminar()) {
    this.titulo = titulo;
    this.preliminar = pre;
    this.display = true;
  }

  closeForm() {
    this.getPreliminares();
    this.display = false;
    this.preliminar = undefined;
  }

  editarPrelim(pre: Preliminar) {
    this.showForm("Editar criterio Preliminar", pre);
  }

  borrarPrelim(pre: Preliminar) {
    this.confirmationService.confirm({
      message: `Esta seguro de querer borrar el parametro ${pre.nombre} definitivamente?`,
      acceptLabel: "Si",
      rejectLabel: "No",
      accept: () => {
        this.optSvc;
        this.optSvc
          .delete("preliminares", pre.id)
          .pipe(take(1))
          .subscribe(() => {
            this.showSuccess();
            this.getPreliminares();
          });
      },
    });
  }
  showSuccess() {
    this.messageService.add({
      severity: "success",
      summary: "Borrado!",
      detail: "Preliminar borrado correctamente",
    });
  }
}
