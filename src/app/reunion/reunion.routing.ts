//Modulos de Angular
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";

//Modulos propios

//Modulos externos

//Componentes
import { ReunionComponent } from './reunion.component';
import { CrearComponent } from './crear/crear.component';
import { ListarComponent } from './listar/listar.component';

//Otros

const routes: Routes = [
  {
    path: 'reunion',
    component: ReunionComponent,
    children: [
      { path: 'crear', component: CrearComponent },
      { path: 'listar', component: ListarComponent },
      { path: '**', redirectTo: 'listar' }
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReunionRoutingModule {}
