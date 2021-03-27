import { Component, Input, OnInit } from '@angular/core';
import { Impacto } from '../../../models/options.model';

@Component({
  selector: 'impacto-form',
  templateUrl: './impacto-form.component.html',
  styleUrls: ['./impacto-form.component.scss']
})
export class ImpactoFormComponent implements OnInit {

  @Input() impacto: Impacto;
  @Input() titulo: string;
  @Input() valores: {unidad: string, letra: string};

  constructor() { }

  ngOnInit(): void {
  }

}
