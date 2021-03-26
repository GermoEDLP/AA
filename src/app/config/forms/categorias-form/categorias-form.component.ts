import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { OptionsService } from "../../../services/options.service";
import { Categoria } from "../../../models/options.model";
import { catchError, take } from "rxjs/operators";

@Component({
  selector: "categorias-form",
  templateUrl: "./categorias-form.component.html",
  styleUrls: ["./categorias-form.component.scss"],
})
export class CategoriasFormComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder, private optSvc: OptionsService) {}

  @Output("close") close: EventEmitter<void> = new EventEmitter();
  @Input() categoria: Categoria;
  botonFinal: string;
  categoriaUpdate: Categoria = new Categoria();

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.botonFinal = this.categoria.id ? "Actualizar" : "Crear";
    this.form = this.fb.group({
      nombre: [this.categoria.nombre, Validators.required],
      desc: [this.categoria.desc, Validators.required],
    });
  }

  createCat() {
    if (this.form.valid) {
      if (this.categoria.id) {
        this.categoriaUpdate.update(this.form.value.nombre, this.form.value.desc, this.categoria.id);
        this.optSvc
          .update("categorias", this.categoriaUpdate)
          .pipe(take(1))
          .subscribe(() => {
            console.log("Actualizado");
            this.close.emit();
          });
      } else {
        this.optSvc
          .create(
            "categorias",
            new Categoria(this.form.value.nombre, this.form.value.desc)
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
