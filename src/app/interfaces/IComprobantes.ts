
export interface RespuestaItems {
    ok: boolean;
    pagina: number;
    items: Item[];
  }

  export interface Usuario {
    avatar?: string;
    _id?: string;
    nombre?: string;
    email?: string;
    password?: string;
  }

  export interface Item {
    _id?: string;
    concepto?: string;
    importe?: number;
    usuario?: Usuario;
    created?: string;
  }
