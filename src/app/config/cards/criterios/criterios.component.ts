import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { Criterios } from "../../../models/options.model";
import { OptionsService } from "../../../services/options.service";
import { take } from "rxjs/operators";
import { ConfirmationService, MessageService } from "primeng/api";

@Component({
  selector: "config-card-criterios",
  templateUrl: "./criterios.component.html",
  styleUrls: ["./criterios.component.scss"],
  providers: [ConfirmationService, MessageService],
})
export class CriteriosComponent implements OnInit {
  criterios: Criterios[];
  subs: Subscription = new Subscription();
  titulo: string = "Nueva Criterio";
  display: boolean = false;
  criterio: Criterios;

  constructor(private optSvc: OptionsService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService) {}

  ngOnInit(): void {
    this.getCriterios();
  }

  getCriterios() {
    this.subs = this.optSvc
      .getAll("criterios")
      .pipe(take(1))
      .subscribe((crit: Criterios[]) => {
        this.criterios = crit;
      });
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  showForm(titulo: string, crit: Criterios = new Criterios()) {
    this.titulo = titulo;
    this.criterio = crit;
    this.display = true;
  }

  closeForm() {
    this.getCriterios();
    this.display = false;
    this.criterio = undefined;
  }

  editarCrit(crit: Criterios) {
    this.showForm("Editar Criterio", crit);
  }

  borrarCrit(crit: Criterios) {
    this.confirmationService.confirm({
      message: `Esta seguro de querer borrar el criterio "${crit.nombre}" definitivamente?`,
      acceptLabel: "Si",
      rejectLabel: "No",
      accept: () => {
        this.optSvc;
        this.optSvc
        .delete("criterios", crit.id)
        .pipe(take(1))
          .subscribe(() => {
            this.showSuccess();
            this.getCriterios();
          });
      },
    });
  }

  showSuccess() {
    this.messageService.add({
      severity: "success",
      summary: "Borrado!",
      detail: "Criterio borrado correctamente",
    });
  }
}
