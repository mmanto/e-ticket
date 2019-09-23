import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TabCitemPage } from './tab-citem.page';

const routes: Routes = [
  {
    path: '',
    component: TabCitemPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([{ path: '', component: TabCitemPage }])
  ],
  declarations: [TabCitemPage]
})
export class TabCitemPageModule {}
