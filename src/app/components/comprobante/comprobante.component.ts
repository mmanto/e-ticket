import { Component, OnInit, Input } from '@angular/core';
import { Item, Comprobante } from 'src/app/interfaces/IComprobantes';


@Component({
  selector: 'app-comprobante',
  templateUrl: './comprobante.component.html',
  styleUrls: ['./comprobante.component.scss']
})
export class ComprobanteComponent implements OnInit {


  @Input() items: Item[] = [];
  @Input() comprobante: Comprobante;

  constructor() {}

  ngOnInit() {
    console.log(this.items);
  }

}
