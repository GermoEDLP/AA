import { Component, OnInit } from '@angular/core';
import { MenuItem } from "primeng/api";
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

items: MenuItem[];

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.items = [
      { label: "Datos", routerLink: 'datos' },
      { label: "Preliminares", routerLink: 'preliminar', routerLinkActiveOptions: {exact: false}},
      { label: "Aviones", routerLink: 'aviones' },
      { label: "Criterios", routerLink: 'criterios' },
      { label: "Impacto", routerLink: 'impacto' },
      { label: "Final", routerLink: 'final' },
    ];
  }

}
