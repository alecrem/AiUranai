import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { Plugins } from '@capacitor/core';

const { Storage } = Plugins;

class Setting {
  name: string;
  initial: string;
  good: boolean;
}

class ResultCard {
  initial: string;
  hearts: number;
}

@Component({
  selector: 'app-result',
  templateUrl: './result.page.html',
  styleUrls: ['./result.page.scss'],
})
export class ResultPage implements OnInit {
  initialPool: string[] = ['A', 'D', 'E', 'F', 'H', 'I', 'K', 'M', 'N', 'R', 'S', 'T', 'Y'];
  heartsPool: number[] = [0, 2, 5];
  name: string = '';
  settings: Setting[] = [];
  counterpart: Setting;
  resultCards: ResultCard[] = [];

  constructor(
    navParams: NavParams,
    public modalController: ModalController,
  ) {
    this.name = navParams.get('name').trim();
    console.log("name for template", this.name);
  }


  ngOnInit() {
    this.loadSettings().then(()=> {
      let match = false;
      this.settings.forEach((setting) => {
        if (match) {
          return;
        }
        if(this.name == setting.name) {
          match = true;
          this.counterpart = setting;
          const settingHearts = (setting.good)? 5: 0;
          const resultCard = this.generateCard(setting.initial.toUpperCase(), settingHearts);
          this.resultCards.push(resultCard);
        }
      });
      while (this.resultCards.length < 3) {
        const initial = this.initialPool[Math.floor(Math.random() * this.initialPool.length)];
        const hearts = this.heartsPool[Math.floor(Math.random() * this.heartsPool.length)];
        const resultCard = this.generateCard(initial, hearts);
        this.resultCards.push(resultCard);
      }
      if (match) {
        this.shuffleCards();
      }
    });
  }

  generateCard(initial: string, hearts: number): ResultCard {
    let resultCard: ResultCard = {
      initial: 'X',
      hearts: 0,
    };
    this.initialPool = this.initialPool.filter((elem) => {
      return elem != initial.toUpperCase();
    });
    this.heartsPool = this.heartsPool.filter((elem) => {
      return elem != hearts;
    });
    resultCard.initial = initial.toUpperCase();
    resultCard.hearts = hearts;
    return resultCard;
  }

  shuffleCards() {
    const newPos = Math.floor(Math.random() * this.resultCards.length);
    if (newPos == 0) {
      return;
    }
    let resultCards: ResultCard[] = [];
    if (newPos == 1) {
      resultCards[0] = this.resultCards[1];
      resultCards[1] = this.resultCards[0];
      resultCards[2] = this.resultCards[2];
      this.resultCards = resultCards;
      return;
    }
    if (newPos == 2) {
      resultCards[0] = this.resultCards[2];
      resultCards[1] = this.resultCards[1];
      resultCards[2] = this.resultCards[0];
      this.resultCards = resultCards;
      return;
    }
  }

  dismiss() {
    this.modalController.dismiss({
      'dismissed': true,
    });
  }

  async loadSettings() {
    const ret = (await Storage.get({ key: 'settings' })).value;
    this.settings = [];
    const setts = JSON.parse(ret);
    if(setts.length > 0) {
      setts.forEach((ret) => {
        this.settings.push(<Setting>ret);
      });
    }
  }

}
