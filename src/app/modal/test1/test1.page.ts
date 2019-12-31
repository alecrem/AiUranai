import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Test2Page } from '../test2/test2.page';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.page.html',
  styleUrls: ['./test1.page.scss'],
})
export class Test1Page implements OnInit {

  constructor(public modalController: ModalController) {}

  ngOnInit() {
  }

  dismiss() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  async nextQuestion(answer: string) {
    const modal = await this.modalController.create({
      component: Test2Page,
      componentProps: {
        'answer1': answer,
      }
    });
    return await modal.present();
  }

}
