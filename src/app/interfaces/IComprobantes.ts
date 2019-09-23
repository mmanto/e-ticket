
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
    comprobante?: string;
    concepto?: string;
    importe?: number;
    usuario?: Usuario;
    created?: string;
  }

  export interface Comprobante {
    _id?: string;
    numero: string;
    nombreApellido: string;
    CUIT: string;
    direccion: string;
  }
