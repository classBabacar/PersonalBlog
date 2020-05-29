import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Observable } from 'rxjs';
import { Services } from './../services/services'


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  result: any;
  fact: string;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private Services: Services,
    ) {}

  async ngOnInit() {
    this.result = await this.Services.getRandomFact()
    this.fact = this.result.text
  }
}
