import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemsService } from 'src/app/services/comprobantes.service';

@Component({
  selector: 'app-tab-citem',
  templateUrl: './tab-citem.page.html',
  styleUrls: ['./tab-citem.page.scss'],
})
export class TabCitemPage implements OnInit {

  item = {
    concepto: '',
    importe: null,
  };

  constructor( private itemsService: ItemsService,
               private route: Router) { }


  ngOnInit() {
  }

  async crearItem() {

    console.log(this.item);
    const creado = await this.itemsService.crearItem( this.item );

    this.item = {
      concepto: '',
      importe: null,
  };

    this.route.navigateByUrl('/main/tabs/tab-comprobante');

  }

}
