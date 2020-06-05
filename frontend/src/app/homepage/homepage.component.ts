import { Component, OnInit } from '@angular/core';
import { Services } from './../services/services'

@Component({
  selector: 'app-landing-page',
  templateUrl: './homepage.html',
  styleUrls: ['./homepage.scss']
})
export class LandingPageComponent implements OnInit {
  result: any;
  fact: string;
  flipped: boolean
  constructor(private Services: Services) { }

  async ngOnInit() {
    this.result = await this.Services.getRandomFact()
    this.fact = this.result.text
    this.flipped = false
  }

  async generateNewFact() {
    if (this.flipped == false) {
      this.result = await this.Services.getRandomFact()
      this.fact = this.result.text
    }
    this.flipped = !this.flipped
  }
  
}
