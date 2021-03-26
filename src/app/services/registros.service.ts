import { Injectable } from '@angular/core';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { Registro } from '../models/registro.model';

@Injectable({
  providedIn: 'root'
})
export class RegistrosService {

  private storeName: string = 'registros';

  constructor(private db: NgxIndexedDBService) { }


  getAll(){
    return this.db.getAll(this.storeName);
  }

  getByKey(key: IDBValidKey){
    this.db.getByKey(this.storeName, key);
  }

  create(item: Registro){
    return this.db.add(this.storeName, item);
  }

  update(item: Registro){
    return this.db.update(this.storeName, item);
  }

  delete(key: IDBValidKey){
    this.db.delete(this.storeName, key);
  }

  clean(){
    this.db.clear(this.storeName);
  }
}
