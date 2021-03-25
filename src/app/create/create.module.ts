//Modulos de Angular
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

//Modulos propios

//Modulos externos

//Componentes

import { CreateComponent } from "./create.component";
import { DatosComponent } from "./datos/datos.component";
import { PreliminarComponent } from "./preliminar/preliminar.component";
import { CriteriosComponent } from "./criterios/criterios.component";
import { ImpactoComponent } from "./impacto/impacto.component";
import { AvionesComponent } from "./aviones/aviones.component";
import { FinalComponent } from "./final/final.component";

//Rutas
import { CreateRoutingModule } from "./create.routing";

const comp = [
  CreateComponent,
  DatosComponent,
  PreliminarComponent,
  CriteriosComponent,
  ImpactoComponent,
  AvionesComponent,
  FinalComponent,
];

@NgModule({
  declarations: comp,
  imports: [CommonModule, CreateRoutingModule],
  exports: comp,
})
export class CreateModule {}
