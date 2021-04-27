import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MyTestService {

  constructor(private http: HttpClient) {

  }


  getImage() {
    return this.http.get(
      `https://api.unsplash.com/search/photos?query=nature&client_id=dImHk1zCW_FpUNZstfWT-Awoya37kzX32jTkZz9oxbc`
    );
  }

}
