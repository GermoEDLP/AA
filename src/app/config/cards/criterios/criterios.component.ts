import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { Criterios } from "../../../models/options.model";
import { OptionsService } from "../../../services/options.service";
import { take } from "rxjs/operators";

@Component({
  selector: "config-card-criterios",
  templateUrl: "./criterios.component.html",
  styleUrls: ["./criterios.component.scss"],
})
export class CriteriosComponent implements OnInit {
  criterios: Criterios[];
  subs: Subscription = new Subscription();
  titulo: string = "Nueva Criterio";
  display: boolean = false;
  criterio: Criterios;

  constructor(private optSvc: OptionsService) {}

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
    this.optSvc
      .delete("criterios", crit.id)
      .pipe(take(1))
      .subscribe(() => {
        this.getCriterios();
      });
  }
}
