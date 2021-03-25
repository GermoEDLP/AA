//Modulos de Angular
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule, HttpClient } from "@angular/common/http";

//Modulos propios
import { CoreModule } from "./core/core.module";
import { SharedModule } from "./shared/shared.module";
import { HomeModule } from "./home/home.module";
import { CreateModule } from "./create/create.module";
import { ReunionModule } from "./reunion/reunion.module";
import { ConfigModule } from "./config/config.module";
import { ListasModule } from "./listas/listas.module";

//Modulos externos
import { NgxIndexedDBModule, DBConfig } from "ngx-indexed-db";

//Componentes
import { AppComponent } from "./app.component";

// NG Translate
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";

//Otros
import { AppRoutingModule } from "./app-routing.module";

const dbConfig: DBConfig = {
  name: "MyDb",
  version: 1,
  objectStoresMeta: [
    {
      store: "items",
      storeConfig: { keyPath: "id", autoIncrement: true },
      storeSchema: [
        { name: "name", keypath: "name", options: { unique: false } },
        { name: "desc", keypath: "desc", options: { unique: false } },
        {
          name: "craeted_at",
          keypath: "craeted_at",
          options: { unique: false },
        },
        {
          name: "updated_at",
          keypath: "updated_at",
          options: { unique: false },
        },
        { name: "opc1", keypath: "opc1", options: { unique: false } },
      ],
    },
  ],
};

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    CoreModule,
    SharedModule,
    HomeModule,
    AppRoutingModule,
    CreateModule,
    ReunionModule,
    ConfigModule,
    ListasModule,
    NgxIndexedDBModule.forRoot(dbConfig),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
