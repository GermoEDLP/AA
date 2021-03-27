import { Component, OnInit } from "@angular/core";
import { MenuItem } from "primeng/api";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent implements OnInit {
  items: MenuItem[];

  constructor() {}

  ngOnInit(): void {
    this.items = [
      {
        label: "Inicio",
        routerLink: ["/home"],
      },
      {
        label: "Registros",
        items: [
          {
            label: "Nuevo",
            icon: "pi pi-fw pi-plus",
            routerLink: ["/create", "datos"],
          },
          {
            label: "Listar",
            icon: "pi pi-fw pi-search",
            routerLink: ["/listas"],
          },
        ],
      },
      {
        label: "Reuniones",
        routerLink: ["/reunion"],
      },
      {
        label: "Configuración",
        routerLink: ["/config"],
      },
    ];
  }
}
