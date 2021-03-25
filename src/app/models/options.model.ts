export class Opciones{
  preliminar: Preliminar[];
  criterios: Criterios[];
  impactos: Impacto[];
  categorias: Categoria[];
}


export class Preliminar{
  nombre: string;
  desc: string;
  opc?: boolean;
  created_at: string;
}

export class Criterios{
  nombre: string;
  desc: string;
  created_at: string;
  pond: number;
  peso?: number;
  pp?: number;
}

export class Impacto{
  tipo: 'prog' | 'costos';
  value: number;
  params: Parametros;
}

export class Parametros{
  min: number;
  max: number;
}

export class Categoria{
  nombre: string;
}

export type impactType = 'BP' | 'BC' | 'MP' | 'MC' |'AP' | 'AC';
