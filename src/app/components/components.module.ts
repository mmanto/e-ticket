import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { PipesModule } from '../pipes/pipes.module';
import { AvatarSelectorComponent } from './avatar-selector/avatar-selector.component';
import { CitemComponent } from './citem/citem.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import {ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    AvatarSelectorComponent,
    CitemComponent,
    ],
  exports: [
    AvatarSelectorComponent,
    CitemComponent,
    ],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule,
    NgxDatatableModule,
    ReactiveFormsModule
  ]
})
export class ComponentsModule { }
