import {Component, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ItemComprobante} from '../../../interfaces/IComprobantes';

@Component({
    selector: 'app-add-item-modal',
    templateUrl: './add-item-modal.component.html',
    styleUrls: ['./add-item-modal.component.scss']
})
export class AddItemModalComponent implements OnInit {
    newItemForm: FormGroup;
    item: ItemComprobante;

    constructor(private modalController: ModalController) {
    }

    ngOnInit() {
        this.newItemForm = new FormGroup({
            'concepto': new FormControl('', [Validators.required]),
            'importe': new FormControl('')
        });
    }

    async onDismiss() {
        this.newItemForm.value.created = new Date();
        await this.modalController.dismiss(this.newItemForm.value);
    }

    get concepto() {
        return this.newItemForm.get('concepto');
    }

    get importe() {
        return this.newItemForm.get('importe');
    }
}
