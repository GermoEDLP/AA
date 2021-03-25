//Modulos de Angular
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

//Modulos propios

//Modulos externos

//Componentes
import { PageNotFoundComponent } from "./shared/components";

//Rutas
import { HomeRoutingModule } from "./home/home-routing.module";
import { CreateRoutingModule } from "./create/create.routing";
import { ReunionRoutingModule } from "./reunion/reunion.routing";
import { ConfigRoutingModule } from "./config/config.routing";
import { ListasRoutingModule } from "./listas/listas.routing";

const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full",
  },
  {
    path: "**",
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      relativeLinkResolution: "legacy",
    }),
    CreateRoutingModule,
    HomeRoutingModule,
    ReunionRoutingModule,
    ConfigRoutingModule,
    ListasRoutingModule
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
