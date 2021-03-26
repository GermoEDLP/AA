import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Registro } from '../models/registro.model';
import { RegistrosService } from '../services/registros.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private registroSvc: RegistrosService) { }


  ngOnInit(): void {
    this.leerItems();
  }

  crearUsuario(){
  }

  leerItems(){
    this.registroSvc.getAll().subscribe((data)=>{
      console.log(data);

    })
  }



}
