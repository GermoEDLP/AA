//Modulos de Angular
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

//Modulos propios

//Modulos externos

//Componentes
import { ConfigComponent } from "./config.component";
import { AvionesComponent } from "./cards/aviones/aviones.component";
import { CriteriosComponent } from "./cards/criterios/criterios.component";
import { PreliminaresComponent } from "./cards/preliminares/preliminares.component";
import { CategoriasComponent } from "./cards/categorias/categorias.component";
import { ImpactoComponent } from "./cards/impacto/impacto.component";
import { CategoriasFormComponent } from "./forms/categorias-form/categorias-form.component";
import { PreliminaresFormComponent } from './forms/preliminares-form/preliminares-form.component';
import { CriteriosFormComponent } from './forms/criterios-form/criterios-form.component';
import { AvionesFormComponent } from './forms/aviones-form/aviones-form.component';
import { ImpactoFormComponent } from './forms/impacto-form/impacto-form.component';

//PrimeNg
import { CardModule } from "primeng/card";
import { ButtonModule } from "primeng/button";
import { RippleModule } from "primeng/ripple";
import { TableModule } from "primeng/table";
import { DialogModule } from "primeng/dialog";
import { InputTextModule } from "primeng/inputtext";
import { MenuModule } from "primeng/menu";
import { TieredMenuModule } from "primeng/tieredmenu";
import { TooltipModule } from "primeng/tooltip";
import {InputSwitchModule} from 'primeng/inputswitch';
import {InputNumberModule} from 'primeng/inputnumber';
import {TabViewModule} from 'primeng/tabview';
import {SliderModule} from 'primeng/slider';
import {DividerModule} from 'primeng/divider';
import {AvatarModule} from 'primeng/avatar';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ToastModule} from 'primeng/toast';

const comp = [
  ConfigComponent,
  AvionesComponent,
  CriteriosComponent,
  PreliminaresComponent,
  CategoriasComponent,
  ImpactoComponent,
  CategoriasFormComponent,
  PreliminaresFormComponent,
  CriteriosFormComponent,
  AvionesFormComponent,
  ImpactoFormComponent
];

@NgModule({
  declarations: comp,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    CardModule,
    ButtonModule,
    RippleModule,
    TableModule,
    DialogModule,
    InputTextModule,
    MenuModule,
    TieredMenuModule,
    TooltipModule,
    InputSwitchModule,
    InputNumberModule,
    TabViewModule,
    SliderModule,
    DividerModule,
    AvatarModule,
    ConfirmDialogModule,
    ToastModule
  ],
  exports: comp,
})
export class ConfigModule {}
