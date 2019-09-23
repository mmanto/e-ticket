import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TabComprobantePage } from './tab-comprobante.page';
import { ComponentsModule } from '../../components/components.module';

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
    // RouterModule.forChild(routes)
    RouterModule.forChild([{ path: '', component: TabComprobantePage }])
  ],
  declarations: [TabComprobantePage]
})
export class TabComprobantePageModule {}
