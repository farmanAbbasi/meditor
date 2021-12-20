import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GlobalsService {
  BASE_BACKEND_URL="https://react-movie-db-123.herokuapp.com";

  constructor(private http :HttpClient) { }

  postReq(url,data){
    return this.http.post(url,data).toPromise();  
  }

  getReq(url){
    return this.http.get(url).toPromise();
  }
}
