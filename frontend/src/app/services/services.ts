import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class Services {
    constructor(private httpClient: HttpClient, private router: Router) {}

    public getRandomFact() {
        return this.httpClient.get(`https://uselessfacts.jsph.pl/random.json?language=en`,).toPromise();
      }
}
