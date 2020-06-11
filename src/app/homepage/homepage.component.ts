import { Component, OnInit } from '@angular/core';
import { Services } from '../services/services'

@Component({
  selector: 'app-landing-page',
  templateUrl: './homepage.html',
  styleUrls: ['./homepage.scss']
})
export class LandingPageComponent implements OnInit {
  connect4: boolean;
  hangman: boolean;
  mastermind: boolean;
  result: any;
  fact: any;

  constructor(private Services: Services) { }

  async ngOnInit() {
    this.connect4 = false
    this.hangman = false
    this.mastermind = false
    this.result = await this.Services.getRandomFact()
    this.fact = this.result.text
  }

  async changeData(data) {
    this.connect4 = false
    this.hangman = false
    this.mastermind = false

    data == 'connect4' ? this.connect4 = true : data == 'hangman' ? this.hangman = true : data == 'mastermind' ? this.mastermind = true : '';
  }
  
  async generateFact() {
      this.result = await this.Services.getRandomFact()
      this.fact = this.result.text
  }
}
