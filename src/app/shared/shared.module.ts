import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { TranslateModule } from "@ngx-translate/core";

import { PageNotFoundComponent } from "./components/";
import { WebviewDirective } from "./directives/";
import { FormsModule } from "@angular/forms";
import { NavbarComponent } from "./components/navbar/navbar.component";

// PrimeNg
import { MenubarModule } from "primeng/menubar";

@NgModule({
  declarations: [PageNotFoundComponent, WebviewDirective, NavbarComponent],
  imports: [CommonModule, TranslateModule, FormsModule, MenubarModule],
  exports: [TranslateModule, WebviewDirective, FormsModule, NavbarComponent],
})
export class SharedModule {}
