import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { UsuarioGuard } from './guards/usuario.guard';

const routes: Routes = [
  {
    path: 'main',
    loadChildren: './pages/tabs/tabs.module#TabsPageModule',
    // canActivate: [ UsuarioGuard ]
    canLoad: [ UsuarioGuard ]
  },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'main/tabs/tab-comprobante'
  },
  { path: 'tab-comprobante', loadChildren: './pages/tab-comprobante/tab-comprobante.module#TabComprobantePageModule' },
  { path: 'tab-citem', loadChildren: './pages/tab-citem/tab-citem.module#TabCitemPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
