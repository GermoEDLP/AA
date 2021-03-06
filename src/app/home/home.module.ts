import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HomeRoutingModule } from "./home-routing.module";

import { HomeComponent } from "./home.component";
import { SharedModule } from "../shared/shared.module";

// PrimeNg
import { InputTextModule } from "primeng/inputtext";
import { InputTextareaModule } from "primeng/inputtextarea";
import { DropdownModule } from "primeng/dropdown";
import {CardModule} from 'primeng/card';
import { ItemsComponent } from './components/items/items.component';


@NgModule({
  declarations: [HomeComponent, ItemsComponent],
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule,
    InputTextModule,
    InputTextareaModule,
    DropdownModule,
    CardModule
  ],
})
export class HomeModule {}
