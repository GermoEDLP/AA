//Modulos de Angular
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";

//Modulos propios

//Modulos externos

//Componentes
import { CreateComponent } from "./create.component";
import { DatosComponent } from "./datos/datos.component";
import { PreliminarComponent } from "./preliminar/preliminar.component";
import { AvionesComponent } from "./aviones/aviones.component";
import { CriteriosComponent } from "./criterios/criterios.component";
import { ImpactoComponent } from "./impacto/impacto.component";
import { FinalComponent } from "./final/final.component";

//Otros

const routes: Routes = [
  {
    path: 'create',
    component: CreateComponent,
    children: [
      { path: 'datos', component: DatosComponent },
      { path: 'preliminar', component: PreliminarComponent },
      { path: 'aviones', component: AvionesComponent },
      { path: 'criterios', component: CriteriosComponent },
      { path: 'impacto', component: ImpactoComponent },
      { path: 'final', component: FinalComponent },
      { path: '**', redirectTo: 'datos' }
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateRoutingModule {}
