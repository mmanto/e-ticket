import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts/posts.component';
import { PostComponent } from './post/post.component';
import { IonicModule } from '@ionic/angular';
import { PipesModule } from '../pipes/pipes.module';
import { AvatarSelectorComponent } from './avatar-selector/avatar-selector.component';
import { MapaComponent } from './mapa/mapa.component';
import { CitemComponent } from './citem/citem.component';
import { ComprobanteComponent } from './comprobante/comprobante.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import {AddItemModalComponent} from './comprobante/add-item-modal/add-item-modal.component';
import {ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    PostsComponent,
    PostComponent,
    AvatarSelectorComponent,
    MapaComponent,
    CitemComponent,
    ComprobanteComponent,
    AddItemModalComponent
    ],
  exports: [
    PostsComponent,
    ComprobanteComponent,
    AvatarSelectorComponent,
    CitemComponent,
    AddItemModalComponent
    ],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule,
    NgxDatatableModule,
    ReactiveFormsModule
  ],
    entryComponents: [
        AddItemModalComponent
    ]
})
export class ComponentsModule { }
