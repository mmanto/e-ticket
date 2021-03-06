import { Component, OnInit, Input } from '@angular/core';
import { Item, Comprobante } from 'src/app/interfaces/IComprobantes';

@Component({
  selector: 'app-citem',
  templateUrl: './citem.component.html',
  styleUrls: ['./citem.component.scss']
})
export class CitemComponent implements OnInit {

  @Input() item: Item = {};
  @Input() comprobante: Comprobante;
  
  constructor() { }

  ngOnInit() {
  }

}
