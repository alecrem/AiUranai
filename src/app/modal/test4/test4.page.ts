import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NavParams } from '@ionic/angular';
import { Test5Page } from '../test5/test5.page';

@Component({
  selector: 'app-test4',
  templateUrl: './test4.page.html',
  styleUrls: ['./test4.page.scss'],
})
export class Test4Page implements OnInit {
  answer1: string;
  answer2: string;
  answer3: string;

  constructor(
    public modalController: ModalController,
    navParams: NavParams
    ) {
    this.answer1 = navParams.get('answer1');
    this.answer2 = navParams.get('answer2');
    this.answer3 = navParams.get('answer3');
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
      component: Test5Page,
      componentProps: {
        'answer1': this.answer1,
        'answer2': this.answer2,
        'answer3': this.answer3,
        'answer4': answer,
      }
    });
    return await modal.present();
  }

}
