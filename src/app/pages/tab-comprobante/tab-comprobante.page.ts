
import { Component, OnInit } from '@angular/core';

import { ItemsService, ComprobanteService } from 'src/app/services/comprobantes.service';
import { Item, Comprobante } from 'src/app/interfaces/IComprobantes';
import { ComprobanteComponent } from 'src/app/components/comprobante/comprobante.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab-comprobante',
  templateUrl: './tab-comprobante.page.html',
  styleUrls: ['./tab-comprobante.page.scss'],
})

export class TabComprobantePage implements OnInit {

  items: Item[] = [];
  comprobante: Comprobante;

  habilitado = true;


  constructor(private itemsService: ItemsService, private comprobanteService: ComprobanteService, private route: Router) { }

  ngOnInit() {

    // Nuevo comprobante
    this.comprobante = {
      numero: '0000 0000 0000 0000',
      nombreApellido: 'Martín Mantovani',
      CUIT: '20230173932',
      direccion: '142 N66'
    };

    this.siguientes();
    this.comprobanteService.nuevoComprobante.subscribe(
      comprobante => {
        this.comprobante = comprobante;
        console.log('Comprobante: ' + this.comprobante.numero);
    });

    this.itemsService.nuevoItem
      .subscribe(item => {

        this.items.unshift(item);

      });
  }

  recargar(event) {

    this.siguientes(event, true);
    this.habilitado = true;
    this.items = [];
  }

  siguientes(event?, pull: boolean = false) {

    this.itemsService.getItems(pull)
      .subscribe(resp => {
        console.log(resp);
        this.items.push( ...resp.items);

        if (event) {
          event.target.complete();

          if (resp.items.length === 0) {
            this.habilitado = false;
          }
        }

      });

  }

  async crearComprobante() {
    console.log(this.comprobante);
    const creado = await this.itemsService.crearItem( this.comprobante );

    this.comprobante = {
      CUIT: '',
      nombreApellido: null,
      direccion: '',
      numero: ''
  };

    this.route.navigateByUrl('/main/tabs/tab-comprobante');

  }



}
