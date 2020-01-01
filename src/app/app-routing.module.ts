import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'account',
    loadChildren: () => import('./account/account.module').then( m => m.AccountPageModule)
  },
  {
    path: 'test1',
    loadChildren: () => import('./modal/test1/test1.module').then( m => m.Test1PageModule)
  },
  {
    path: 'test2',
    loadChildren: () => import('./modal/test2/test2.module').then( m => m.Test2PageModule)
  },
  {
    path: 'test3',
    loadChildren: () => import('./modal/test3/test3.module').then( m => m.Test3PageModule)
  },
  {
    path: 'test4',
    loadChildren: () => import('./modal/test4/test4.module').then( m => m.Test4PageModule)
  },
  {
    path: 'test5',
    loadChildren: () => import('./modal/test5/test5.module').then( m => m.Test5PageModule)
  },
  {
    path: 'result',
    loadChildren: () => import('./modal/result/result.module').then( m => m.ResultPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'name',
    loadChildren: () => import('./modal/name/name.module').then( m => m.NamePageModule)
  },
  {
    path: 'addsetting',
    loadChildren: () => import('./modal/addsetting/addsetting.module').then( m => m.AddsettingPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
