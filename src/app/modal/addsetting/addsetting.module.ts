import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddsettingPageRoutingModule } from './addsetting-routing.module';

import { AddsettingPage } from './addsetting.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddsettingPageRoutingModule
  ],
  declarations: [AddsettingPage]
})
export class AddsettingPageModule {}
