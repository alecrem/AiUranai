import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Test1Page } from '../modal/test1/test1.page';
import { Test2Page } from '../modal/test2/test2.page';
import { Test3Page } from '../modal/test3/test3.page';
import { Test4Page } from '../modal/test4/test4.page';
import { Test5Page } from '../modal/test5/test5.page';
import { ResultPage } from '../modal/result/result.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public modalController: ModalController) {}

  async test1Page() {
    const modal = await this.modalController.create({
      component: Test1Page,
    });
    modal.onDidDismiss().then((data) => {
      this.test2Page();
    });
    return await modal.present();
  }

  async test2Page() {
    const modal = await this.modalController.create({
      component: Test2Page,
    });
    modal.onDidDismiss().then((data) => {
      this.test3Page();
    });
    return await modal.present();
  }

  async test3Page() {
    const modal = await this.modalController.create({
      component: Test3Page,
    });
    modal.onDidDismiss().then((data) => {
      this.test4Page();
    });
    return await modal.present();
  }

  async test4Page() {
    const modal = await this.modalController.create({
      component: Test4Page,
    });
    modal.onDidDismiss().then((data) => {
      this.test5Page();
    });
    return await modal.present();
  }

  async test5Page() {
    const modal = await this.modalController.create({
      component: Test5Page,
    });
    modal.onDidDismiss().then((data) => {
      this.resultPage();
    });
    return await modal.present();
  }

  async resultPage() {
    const modal = await this.modalController.create({
      component: ResultPage,
    });
    return await modal.present();
  }
}
