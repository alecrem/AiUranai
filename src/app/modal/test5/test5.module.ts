import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Test5PageRoutingModule } from './test5-routing.module';

import { Test5Page } from './test5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Test5PageRoutingModule
  ],
  declarations: [Test5Page]
})
export class Test5PageModule {}
