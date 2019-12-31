import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NavParams } from '@ionic/angular';
import { Test4Page } from '../test4/test4.page';

@Component({
  selector: 'app-test3',
  templateUrl: './test3.page.html',
  styleUrls: ['./test3.page.scss'],
})
export class Test3Page implements OnInit {
  answer1: string;
  answer2: string;

  constructor(
    public modalController: ModalController,
    navParams: NavParams
    ) {
    this.answer1 = navParams.get('answer1');
    this.answer2 = navParams.get('answer2');
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
      component: Test4Page,
      componentProps: {
        'answer1': this.answer1,
        'answer2': this.answer2,
        'answer3': answer,
      }
    });
    return await modal.present();
  }

}
