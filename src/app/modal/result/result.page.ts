import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';

@Component({
  selector: 'app-result',
  templateUrl: './result.page.html',
  styleUrls: ['./result.page.scss'],
})
export class ResultPage implements OnInit {
  answer1: string;
  answer2: string;
  answer3: string;
  answer4: string;
  answer5: string;

  constructor(
    navParams: NavParams
    ) {
    this.answer1 = navParams.get('answer1');
    this.answer2 = navParams.get('answer2');
    this.answer3 = navParams.get('answer3');
    this.answer4 = navParams.get('answer4');
    this.answer5 = navParams.get('answer5');
  }


  ngOnInit() {
  }

}
