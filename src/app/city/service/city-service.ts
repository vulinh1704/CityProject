import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

const API_URL = 'http://localhost:8080/api/cities'
@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(private httpClient: HttpClient) {
  }

  findAll(): Observable<any>{
    return this.httpClient.get(API_URL);
  }
  save(city: any): Observable<any>{
    return this.httpClient.post(API_URL , city);
  }
  findById(id: any):Observable<any>{
    return this.httpClient.get(API_URL + `/${id}`);
  }
  delete(id: any):Observable<any>{
    return this.httpClient.delete(API_URL + `/${id}`);
  }
  update(id: any, city: any){
    return this.httpClient.put(API_URL + `/${id}` , city);
  }
}
