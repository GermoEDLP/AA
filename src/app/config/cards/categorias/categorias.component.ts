import { Component, OnDestroy, OnInit } from "@angular/core";
import { ConfirmationService, MessageService } from "primeng/api";
import { Subscription } from "rxjs";
import { catchError, take } from "rxjs/operators";
import { Categoria } from "../../../models/options.model";
import { OptionsService } from "../../../services/options.service";

@Component({
  selector: "config-card-categorias",
  templateUrl: "./categorias.component.html",
  styleUrls: ["./categorias.component.scss"],
  providers: [ConfirmationService, MessageService],
})
export class CategoriasComponent implements OnInit, OnDestroy {
  categorias: Categoria[];
  subs: Subscription = new Subscription();
  titulo: string = "Nueva Categoria";
  display: boolean = false;
  categoria: Categoria;

  constructor(private optSvc: OptionsService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService) {}

  ngOnInit(): void {
    this.getCategorias();
  }

  getCategorias() {
    this.subs = this.optSvc
      .getAll("categorias")
      .pipe(take(1))
      .subscribe((cats: Categoria[]) => {
        this.categorias = cats;
      });
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  showForm(titulo: string, cat: Categoria = new Categoria()) {
    this.titulo = titulo;
    this.categoria = cat;
    this.display = true;
  }

  closeForm() {
    this.getCategorias();
    this.display = false;
    this.categoria = undefined;
  }

  editarCat(cat: Categoria) {
    this.showForm("Editar Categoría", cat);
  }

  borrarCat(cat: Categoria) {
    this.confirmationService.confirm({
      message: `Esta seguro de querer borrar la categoría "${cat.nombre}" definitivamente?`,
      acceptLabel: "Si",
      rejectLabel: "No",
      accept: () => {
        this.optSvc;
        this.optSvc
        .delete("categorias", cat.id)
        .pipe(take(1))
          .subscribe(() => {
            this.showSuccess();
            this.getCategorias();
          });
      },
    });
  }

  showSuccess() {
    this.messageService.add({
      severity: "success",
      summary: "Borrado!",
      detail: "Categoria borrada correctamente",
    });
  }
}
