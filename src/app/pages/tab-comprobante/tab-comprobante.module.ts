import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TabComprobantePage } from './tab-comprobante.page';
import { ComponentsModule } from '../../components/components.module';
import {AddItemModalComponent} from './add-item-modal/add-item-modal.component';

const routes: Routes = [
  {
    path: '',
    component: TabComprobantePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    ReactiveFormsModule,
    // RouterModule.forChild(routes)
    RouterModule.forChild([{ path: '', component: TabComprobantePage }])
  ],
  declarations: [TabComprobantePage, AddItemModalComponent],
  entryComponents: [
    AddItemModalComponent
  ]
})
export class TabComprobantePageModule {}
