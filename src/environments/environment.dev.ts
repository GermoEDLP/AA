export const AppConfig = {
  production: false,
  environment: "DEV",
  dbConfig: {
    name: "MyDb",
    version: 1,
    objectStoresMeta: [
      {
        store: "registros",
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
          { name: "opc1", keypath: "opc1", options: { unique: false } },
        ],
      },
      {
        store: "aviones",
        storeConfig: { keyPath: "id", autoIncrement: true },
        storeSchema: [
          { name: "matricula", keypath: "matricula", options: { unique: false } },
          { name: "n_variable", keypath: "n_variable", options: { unique: false } },
          { name: "c_efectividad", keypath: "c_efectividad", options: { unique: false } },
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
          { name: "desc", keypath: "desc", options: { unique: false } }
        ],
      }
    ],
  },
};
