import {Component, OnInit} from '@angular/core';

import {ComprobanteService, ItemsService} from 'src/app/services/comprobantes.service';
import {Comprobante, Item, ItemComprobante} from 'src/app/interfaces/IComprobantes';
import {Router} from '@angular/router';
import {ModalController} from '@ionic/angular';
import {AddItemModalComponent} from './add-item-modal/add-item-modal.component';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Usuario} from 'src/app/interfaces/interfaces';
import {UsuarioService} from 'src/app/services/usuario.service';
import {Printer, PrintOptions} from '@ionic-native/printer/ngx';

@Component({
    selector: 'app-tab-comprobante',
    templateUrl: './tab-comprobante.page.html',
    styleUrls: ['./tab-comprobante.page.scss'],
})

export class TabComprobantePage implements OnInit {
    items: Item[] = [];
    comprobante: Comprobante;
    usuario: Usuario;
    new_items: ItemComprobante[] = [];
    habilitado = true;
    newItemForm: FormGroup;
    showItemForm = false;
    elementType: 'url' | 'canvas' | 'img' = 'url';
    value = 'Url: http://localhost:4200/main/tabs/tab-comprobante \n Nro Usuario: 89500 \n Nro comprobante: 78998874';
    printMessage = '';

    constructor(private itemsService: ItemsService, private comprobanteService: ComprobanteService, private route: Router,
                public modalController: ModalController, private usuarioService: UsuarioService, private printer: Printer) {
    }

    imprimirComprobante() {
        const print_template = document.getElementById('print-template');
        const options: PrintOptions = {
            name: 'MyDocument',
            printerId: 'printer007',
            duplex: true,
            landscape: false,
            grayscale: true
        };
        this.printer.print(print_template, options).then(() => this.onSuccess(),
            () => this.onError());
    }

    onSuccess() {
        this.printMessage = 'Hay impresoras disponibles';
    }

    onError() {
        this.printMessage = 'Hay impresoras disponibles';
    }

    ngOnInit() {

        // Nuevo comprobante
        this.comprobante = {
            numero: '0000 0000 0000 0000',
            nombre: 'Martín Mantovani',
            cuit: '20230173932',
            tipo: null,
            importeTotal: 3000,
            items: [{
                created: null,
                concepto: '',
                importe: 0
            }]

        };

        this.usuario = this.usuarioService.getUsuario();
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

        this.newItemForm = new FormGroup({
            'concepto': new FormControl('', [Validators.required]),
            'importe': new FormControl('')
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

    /*async crearComprobante() {
      console.log(this.comprobante);
      const creado = await this.itemsService.crearItem( this.comprobante );

      this.comprobante = {
        numero: '0000 0000 0000 0000',
        nombre: 'Martín Mantovani',
        cuit: '20230173932',
        tipo: null,
        importeTotal: 3000,
        items: [{
          created: null,
          concepto: '',
          importe: 0,
        }]

      };

      this.route.navigateByUrl('/main/tabs/tab-comprobante');

    }*/

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
            this.new_items = [];
        });
        // console.log(this.comprobante);
    }

    adcionarItem() {
        this.newItemForm.value.created = new Date();
        this.new_items.push(this.newItemForm.value);
        this.showItemForm = false;
        this.newItemForm.reset();
    }

    get concepto() {
        return this.newItemForm.get('concepto');
    }

    get importe() {
        return this.newItemForm.get('importe');
    }


}
