//Modulos de Angular
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";

//Modulos propios

//Modulos externos

//Componentes
import { ListasComponent } from './listas.component';


//Otros

const routes: Routes = [
  {
    path: 'listas',
    component: ListasComponent,
    children: [

    ],
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListasRoutingModule {}
