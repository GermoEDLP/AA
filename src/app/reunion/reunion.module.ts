//Modulos de Angular
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

//Modulos propios

//Modulos externos

//Componentes
import { ReunionComponent } from "./reunion.component";
import { CrearComponent } from "./crear/crear.component";
import { ListarComponent } from "./listar/listar.component";

//Rutas
import { ReunionRoutingModule } from "./reunion.routing";

const comp = [ReunionComponent, CrearComponent, ListarComponent];

@NgModule({
  declarations: comp,
  imports: [CommonModule, ReunionRoutingModule],
  exports: comp,
})
export class ReunionModule {}
