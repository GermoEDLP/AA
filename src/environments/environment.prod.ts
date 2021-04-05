export const AppConfig = {
  production: true,
  environment: 'PROD',
  dbConfig: {
    name: "MyDb",
    version: 1,
    objectStoresMeta: [
      {
        store: "registros",
        storeConfig: { keyPath: "id", autoIncrement: true },
        storeSchema: [
          { name: "n_doc", keypath: "n_doc", options: { unique: false } },
          { name: "titulo", keypath: "titulo", options: { unique: false } },
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
          { name: "c_ata", keypath: "c_ata", options: { unique: false } },
          { name: "f_emision", keypath: "f_emision", options: { unique: false } },
          { name: "f_revision", keypath: "f_revision", options: { unique: false } },
          { name: "categ", keypath: "categ", options: { unique: false } },
          { name: "n_revision", keypath: "n_revision", options: { unique: false } },
          { name: "n_ela", keypath: "n_ela", options: { unique: false } },
          { name: "ela", keypath: "ela", options: { unique: false } },
          { name: "preliminares", keypath: "preliminares", options: { unique: false } },
          { name: "aviones", keypath: "aviones", options: { unique: false } },
          { name: "criterios", keypath: "criterios", options: { unique: false } },
          { name: "comentarios", keypath: "comentarios", options: { unique: false } },
          { name: "reunion", keypath: "reunion", options: { unique: false } },
          { name: "pendientes", keypath: "pendientes", options: { unique: false } },
        ],
      },
      {
        store: "preliminares",
        storeConfig: { keyPath: "id", autoIncrement: true },
        storeSchema: [
          { name: "nombre", keypath: "nombre", options: { unique: false } },
          { name: "desc", keypath: "desc", options: { unique: false } },
          {
            name: "craeted_at",
            keypath: "craeted_at",
            options: { unique: false },
          },
          { name: "opc", keypath: "opc", options: { unique: false } },
        ],
      },
      {
        store: "criterios",
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
            name: "pond",
            keypath: "pond",
            options: { unique: false },
          },
          { name: "peso", keypath: "peso", options: { unique: false } },
        ],
      },
      {
        store: "impactos",
        storeConfig: { keyPath: "id", autoIncrement: true },
        storeSchema: [
          { name: "tipo", keypath: "tipo", options: { unique: false } },
          { name: "value", keypath: "value", options: { unique: false } },
          {
            name: "min",
            keypath: "min",
            options: { unique: false },
          },
          {
            name: "max",
            keypath: "max",
            options: { unique: false },
          },
          { name: "tope", keypath: "tope", options: { unique: false } },
          { name: "base", keypath: "base", options: { unique: false } },
        ],
      },
      {
        store: "aviones",
        storeConfig: { keyPath: "id", autoIncrement: true },
        storeSchema: [
          {
            name: "matricula",
            keypath: "matricula",
            options: { unique: false },
          },
          {
            name: "n_variable",
            keypath: "n_variable",
            options: { unique: false },
          },
          {
            name: "c_efectividad",
            keypath: "c_efectividad",
            options: { unique: false },
          },
          { name: "n_serie", keypath: "n_serie", options: { unique: false } },
          { name: "n_linea", keypath: "n_linea", options: { unique: false } },
          { name: "marca", keypath: "marca", options: { unique: false } },
          { name: "modelo", keypath: "modelo", options: { unique: false } },
        ],
      },
      {
        store: "categorias",
        storeConfig: { keyPath: "id", autoIncrement: true },
        storeSchema: [
          { name: "name", keypath: "name", options: { unique: false } },
          { name: "desc", keypath: "desc", options: { unique: false } },
        ],
      },
    ],
  },
};
