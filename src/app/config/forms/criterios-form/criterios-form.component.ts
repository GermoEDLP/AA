import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OptionsService } from '../../../services/options.service';
import { Criterios } from '../../../models/options.model';
import { take } from 'rxjs/operators';

@Component({
  selector: 'criterios-form',
  templateUrl: './criterios-form.component.html',
  styleUrls: ['./criterios-form.component.scss']
})
export class CriteriosFormComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder, private optSvc: OptionsService) {}

  @Output("close") close: EventEmitter<void> = new EventEmitter();
  @Input() criterio: Criterios;
  botonFinal: string;

  ngOnInit(): void {
    this.createForm();
    console.log(this.criterio);
  }

  createForm() {
    this.botonFinal = this.criterio.id ? "Actualizar" : "Crear";
    this.form = this.fb.group({
      nombre: [this.criterio.nombre, Validators.required],
      desc: [this.criterio.desc, Validators.required],
      peso: [this.criterio.peso, Validators.required],
    });
  }

  createCrit() {
    if (this.form.valid) {
      const {nombre, desc, peso} = this.form.value;
      if (this.criterio.id) {
        this.optSvc
          .update('criterios', new Criterios(nombre, desc, peso, this.criterio.id))
          .pipe(take(1))
          .subscribe(() => {
            console.log("Actualizado");
            this.close.emit();
          });
      } else {
        this.optSvc
          .create(
            'criterios',
            new Criterios(nombre, desc, peso)
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
