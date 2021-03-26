import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Avion } from '../../../models/avion.model';
import { OptionsService } from '../../../services/options.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'config-card-aviones',
  templateUrl: './aviones.component.html',
  styleUrls: ['./aviones.component.scss']
})
export class AvionesComponent implements OnInit {
  aviones: Avion[];
  subs: Subscription = new Subscription();
  titulo: string = "Nuevo Avion";
  display: boolean = false;
  avion: Avion;

  constructor(private optSvc: OptionsService) {}

  ngOnInit(): void {
    this.getAviones();
  }

  getAviones() {
    this.subs = this.optSvc
      .getAll('aviones')
      .pipe(take(1))
      .subscribe((aviones: Avion[]) => {
        this.aviones = aviones;
      });
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  showForm(titulo: string, avion: Avion = new Avion) {
    this.titulo = titulo;
    this.avion = avion;
    this.display = true;
  }

  closeForm() {
    this.getAviones();
    this.display = false;
    this.avion = undefined;
  }

  editarAvion(avion: Avion){
    this.showForm("Editar Avion", avion);
  }

  borrarAvion(avion: Avion){

    this.optSvc.delete('aviones', avion.id).pipe(take(1)).subscribe(()=>{
      this.getAviones();
    });
  }
}
