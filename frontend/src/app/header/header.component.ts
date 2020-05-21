import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Observable } from 'rxjs';
import { startWith, map, filter, mergeMap} from 'rxjs/operators';

import { environment } from '../../environments/environment';
// import { NavBarService } from '../services/nav-bar.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    env = {
      appTitle: 'Bob'
  };
  page$: Observable<string>;
  subtitle = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    ) {}

  ngOnInit() {
  }
}
