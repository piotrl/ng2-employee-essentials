import {Injectable} from "@angular/core";
import {Headers, Http} from "@angular/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/Rx';
import "rxjs/add/operator/toPromise";

import {City} from "../shared/City";


@Injectable()
export class DashboardService {
  private URL = 'app/cities';

  constructor(private http: Http) {
  }

  getCities(): Observable<City[]> {
    return this.http.get(this.URL)
      .map((res) => res.json().data);
  }
}