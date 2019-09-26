import {Component, Input, OnInit} from '@angular/core';
import {Comprobante, Item, ItemComprobante} from 'src/app/interfaces/IComprobantes';
import {ModalController} from '@ionic/angular';
import {AddItemModalComponent} from './add-item-modal/add-item-modal.component';
import {ComprobanteService} from '../../services/comprobantes.service';


@Component({
    selector: 'app-comprobante',
    templateUrl: './comprobante.component.html',
    styleUrls: ['./comprobante.component.scss']
})
export class ComprobanteComponent implements OnInit {


    @Input() items: Item[] = [];
    @Input() comprobante: Comprobante;
    new_items: ItemComprobante[] = [];

    constructor(public modalController: ModalController, private comprobanteService: ComprobanteService) {
    }

    ngOnInit() {
        console.log(this.items);
    }

    async presentModal() {
        const modal = await this.modalController.create({
            component: AddItemModalComponent
        });
        modal.onDidDismiss().then((result) => {
            this.new_items.push(result.data);
            console.log(this.new_items);
        });
        return await modal.present();
    }

    crearComprobante() {
        this.comprobante.items = this.new_items;
        this.comprobanteService.crearComprobanteNew(this.comprobante).subscribe(res => {
            console.log(res);
        });
        // console.log(this.comprobante);
    }

}
