//Modulos de Angular
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

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

// PrimeNg
import { StepsModule } from "primeng/steps";
import { CardModule } from "primeng/card";
import { InputTextModule } from "primeng/inputtext";
import { InputTextareaModule } from "primeng/inputtextarea";
import { InputNumberModule } from "primeng/inputnumber";
import { CheckboxModule } from "primeng/checkbox";
import { DropdownModule } from "primeng/dropdown";
import { CalendarModule } from "primeng/calendar";
import { ButtonModule } from "primeng/button";
import { ConfirmDialogModule } from "primeng/confirmdialog";
import { ToastModule } from "primeng/toast";
import { TooltipModule } from "primeng/tooltip";
import { MessagesModule } from "primeng/messages";
import { PickListModule } from "primeng/picklist";
import { DialogModule } from "primeng/dialog";
import {SplitButtonModule} from 'primeng/splitbutton';
import {MenuModule} from 'primeng/menu';


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
  imports: [
    CommonModule,
    CreateRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    StepsModule,
    CardModule,
    InputTextModule,
    InputTextareaModule,
    InputNumberModule,
    CheckboxModule,
    DropdownModule,
    CalendarModule,
    ButtonModule,
    ConfirmDialogModule,
    ToastModule,
    TooltipModule,
    MessagesModule,
    PickListModule,
    DialogModule,
    SplitButtonModule,
    MenuModule
  ],
  exports: comp,
})
export class CreateModule {}
