import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddsettingPage } from './addsetting.page';

const routes: Routes = [
  {
    path: '',
    component: AddsettingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddsettingPageRoutingModule {}
