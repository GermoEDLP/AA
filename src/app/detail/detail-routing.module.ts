import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DetailComponent } from './detail.component';
import { PruebaComponent } from "./prueba/prueba.component";

const routes: Routes = [
  {
    path: 'detail',
    component: DetailComponent
  },
  {
    path: 'prueba',
    component: PruebaComponent
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailRoutingModule {}
