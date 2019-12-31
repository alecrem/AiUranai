import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NavParams } from '@ionic/angular';
import { ResultPage } from '../result/result.page';

@Component({
  selector: 'app-test5',
  templateUrl: './test5.page.html',
  styleUrls: ['./test5.page.scss'],
})
export class Test5Page implements OnInit {
  answer1: string;
  answer2: string;
  answer3: string;
  answer4: string;

  constructor(
    public modalController: ModalController,
    navParams: NavParams
    ) {
    this.answer1 = navParams.get('answer1');
    this.answer2 = navParams.get('answer2');
    this.answer3 = navParams.get('answer3');
    this.answer4 = navParams.get('answer4');
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
      component: ResultPage,
      componentProps: {
        'answer1': this.answer1,
        'answer2': this.answer2,
        'answer3': this.answer3,
        'answer4': this.answer4,
        'answer5': answer,
      }
    });
    return await modal.present();
  }

}
