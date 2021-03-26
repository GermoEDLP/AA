import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { take } from 'rxjs/operators';
import { Preliminar } from '../../../models/options.model';
import { OptionsService } from '../../../services/options.service';

@Component({
  selector: 'config-card-preliminares',
  templateUrl: './preliminares.component.html',
  styleUrls: ['./preliminares.component.scss']
})
export class PreliminaresComponent implements OnInit {
  preliminares: Preliminar[];
  subs: Subscription = new Subscription();
  titulo: string = "Nuevo criterio Preliminar";
  display: boolean = false;
  preliminar: Preliminar;

  constructor(private optSvc: OptionsService) {}

  ngOnInit(): void {
    this.getPreliminares();
  }

  getPreliminares() {
    this.subs = this.optSvc
      .getAll('preliminares')
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

  editarPrelim(pre: Preliminar){
    this.showForm("Editar criterio Preliminar", pre);
  }

  borrarPrelim(pre: Preliminar){

    this.optSvc.delete('preliminares', pre.id).pipe(take(1)).subscribe(()=>{
      this.getPreliminares();
    });
  }
}
