import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NavParams } from '@ionic/angular';
import { Test3Page } from '../test3/test3.page';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.page.html',
  styleUrls: ['./test2.page.scss'],
})
export class Test2Page implements OnInit {
  answer1: string;

  constructor(
    public modalController: ModalController,
    navParams: NavParams
    ) {
    this.answer1 = navParams.get('answer1');
  }

  ngOnInit() {
  }

  dismiss() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  async nextQuestion(answer: string) {
    const modal = await this.modalController.create({
      component: Test3Page,
      componentProps: {
        'answer1': this.answer1,
        'answer2': answer,
      }
    });
    return await modal.present();
  }

}
