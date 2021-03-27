import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { OptionsService } from "../../../services/options.service";
import { Impacto } from "../../../models/options.model";
import { ConfirmationService, MessageService } from "primeng/api";
import { take } from "rxjs/operators";

@Component({
  selector: "config-card-impactos",
  templateUrl: "./impacto.component.html",
  styleUrls: ["./impacto.component.scss"],
  providers: [ConfirmationService, MessageService],
})
export class ImpactoComponent implements OnInit {
  formCostos: FormGroup;
  formProg: FormGroup;
  impactoCosto: Impacto;
  impactoProg: Impacto;

  constructor(
    private optSvc: OptionsService,
    private fb: FormBuilder,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.getImpactos();
    // this.crear();
  }

  crear() {
    this.optSvc
      .create("impactos", new Impacto("costos", 0, 1000, 5000, 10000))
      .subscribe();
    this.optSvc
      .create("impactos", new Impacto("prog", 0, 5, 50, 100))
      .subscribe();
  }

  getImpactos() {
    this.optSvc.getAll("impactos").subscribe((impactos: Impacto[]) => {
      impactos.forEach((impacto) => {
        if (impacto.tipo == "costos") {
          this.impactoCosto = impacto;
        } else {
          this.impactoProg = impacto;
        }
      });
    });
  }

  actualizar(tipo: "prog" | "costos") {
    let impacto = tipo == 'prog' ? this.impactoProg : this.impactoCosto;
    const { base, min, max, tope, id } = impacto;
    this.confirmationService.confirm({
      message: "Esta seguro de cambiar los parametros de este impacto?",
      acceptLabel: 'Si',
      rejectLabel: 'No',
      accept: () => {
        this.optSvc
          .update("impactos", new Impacto(tipo, base, min, max, tope, id))
          .pipe(take(1))
          .subscribe(() => {
            this.showSuccess();
          });
      },
    });
  }

  showSuccess() {
    this.messageService.add({
      severity: "success",
      summary: "Actualizado!",
      detail: "Impacto actualizado correctamente",
    });
  }
}
