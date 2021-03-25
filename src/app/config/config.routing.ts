//Modulos de Angular
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";

//Modulos propios

//Modulos externos

//Componentes
import { ConfigComponent } from './config.component';

//Otros

const routes: Routes = [
  {
    path: 'config',
    component: ConfigComponent,
    children: [

    ],
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfigRoutingModule {}
