
import { Component, OnInit } from '@angular/core';

import { ItemsService } from 'src/app/services/comprobantes.service';
import { Item } from 'src/app/interfaces/IComprobantes';

@Component({
  selector: 'app-tab-comprobante',
  templateUrl: './tab-comprobante.page.html',
  styleUrls: ['./tab-comprobante.page.scss'],
})

export class TabComprobantePage implements OnInit {

  items: Item[] = [];

  habilitado = true;


  constructor(private itemsService: ItemsService) { }

  ngOnInit() {

    this.siguientes();

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
        this.items.push(...resp.items);

        if (event) {
          event.target.complete();

          if (resp.items.length === 0) {
            this.habilitado = false;
          }
        }

      });

  }
}
