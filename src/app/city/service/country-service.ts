import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
const API_URL = 'http://localhost:8080/api/countries'
@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private httpClient: HttpClient) {}
  getAll(): Observable<any> {
    return this.httpClient.get(API_URL)
  }
}
