import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab3',
        children: [
          {
            path: '',
            loadChildren: '../tab3/tab3.module#Tab3PageModule'
          }
        ]
      },
      {
        path: 'tab-comprobante',
        children: [
          {
            path: '',
            loadChildren: '../tab-comprobante/tab-comprobante.module#TabComprobantePageModule'
          }
        ]
      },
      {
        path: 'tab-citem',
        children: [
          {
            path: '',
            loadChildren: '../tab-citem/tab-citem.module#TabCitemPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tab-comprobante',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tab-comprobante',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
