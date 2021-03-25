import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Registro } from '../models/registro.model';
import { ItemsService } from '../services/items.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private itemsSvc: ItemsService) { }


  ngOnInit(): void {
    this.leerItems();
  }

  crearUsuario(){
  }

  leerItems(){
    this.itemsSvc.getAll().subscribe((data)=>{
      console.log(data);

    })
  }



}
