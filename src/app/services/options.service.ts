import { Injectable } from '@angular/core';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { optionConfigType, storeNameType } from '../models/options.model';

@Injectable({
  providedIn: 'root'
})
export class OptionsService {

  constructor(private db: NgxIndexedDBService) { }

  getAll(store: storeNameType){
    return this.db.getAll(store);
  }

  getByKey(store: storeNameType, key: IDBValidKey){
    return this.db.getByKey(store, key);
  }

  create(store: storeNameType, item: optionConfigType){
    return this.db.add(store, item);
  }

  update(store: storeNameType, item: optionConfigType){
    return this.db.update(store, item);
  }

  delete(store: storeNameType, key: IDBValidKey){
    return this.db.delete(store, key);
  }

  clean(store: storeNameType){
    return this.db.clear(store);
  }
}
