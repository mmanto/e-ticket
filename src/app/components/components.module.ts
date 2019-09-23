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



@NgModule({
  declarations: [
    PostsComponent,
    PostComponent,
    AvatarSelectorComponent,
    MapaComponent,
    CitemComponent,
    ComprobanteComponent,
    ],
  exports: [
    PostsComponent,
    ComprobanteComponent,
    AvatarSelectorComponent,
    CitemComponent,

    ],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule,
    NgxDatatableModule
  ]
})
export class ComponentsModule { }
