import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailRoutingModule } from './detail-routing.module';

import { DetailComponent } from './detail.component';
import { SharedModule } from '../shared/shared.module';
import { PruebaComponent } from './prueba/prueba.component';

// PrimeNg
import {AccordionModule} from 'primeng/accordion';


@NgModule({
  declarations: [DetailComponent, PruebaComponent],
  imports: [CommonModule, SharedModule, DetailRoutingModule, AccordionModule]
})
export class DetailModule {}
