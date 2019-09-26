import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { RespuestaItems, Item, Comprobante } from '../interfaces/IComprobantes';
import { UsuarioService } from './usuario.service';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import {Observable} from 'rxjs';

const URL = environment.url;


@Injectable({
  providedIn: 'root'
})
export class ComprobanteService {

  nuevoComprobante = new EventEmitter<Comprobante>();

  constructor( private http: HttpClient,
    private usuarioService: UsuarioService ) { }

  crearComprobante( comprobante ) {
    const headers = new HttpHeaders({
      'x-token': this.usuarioService.token
    });

    return new Promise( resolve => {

      this.http.post(`${ URL }/comprobante`, comprobante, { headers })
        .subscribe( resp => {
          this.nuevoComprobante.emit( resp['comprobante'] );
          resolve(true);
        });
    });

  }

    crearComprobanteNew(comprobante): Observable<any> {
        const headers = new HttpHeaders({
            'x-token': this.usuarioService.token
        });
        return this.http.post<Comprobante>(`${URL}/comprobante`, comprobante, {headers});
    }
}

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  paginaComprobantes = 0;

  nuevoItem = new EventEmitter<Item>();


  constructor( private http: HttpClient,
               private usuarioService: UsuarioService ) { }

  getItems( pull: boolean = false ) {

    if ( pull ) {
      this.paginaComprobantes = 0;
    }

    this.paginaComprobantes ++;

    return this.http.get<RespuestaItems>(`${ URL }/items/?pagina=${ this.paginaComprobantes }`);

  }

  crearItem( item ) {

    const headers = new HttpHeaders({
      'x-token': this.usuarioService.token
    });

    return new Promise( resolve => {

      this.http.post(`${ URL }/items`, item, { headers })
        .subscribe( resp => {
          this.nuevoItem.emit( resp['item'] );
          resolve(true);
        });
    });



  }
}

/*
  subirImagen( img: string ) {

    const options: FileUploadOptions = {
      fileKey: 'image',
      headers: {
        'x-token': this.usuarioService.token
      }
    };

    const fileTransfer: FileTransferObject = this.fileTransfer.create();

    fileTransfer.upload( img, `${ URL }/posts/upload`, options )
      .then( data => {
        console.log(data);
      }).catch( err => {
        console.log('error en carga', err);
      });

  }


}
*/
