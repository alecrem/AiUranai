import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Test5Page } from './test5.page';

const routes: Routes = [
  {
    path: '',
    component: Test5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Test5PageRoutingModule {}
