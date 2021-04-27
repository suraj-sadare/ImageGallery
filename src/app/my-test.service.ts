import { Injectable, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MyTestService implements OnInit{
  li:any;
  lis=[];

  constructor(private http : HttpClient) {
   
   }
  ngOnInit(){
    this.http.get('https://api.unsplash.com/search/photos?query=nature&client_id=dImHk1zCW_FpUNZstfWT-Awoya37kzX32jTkZz9oxbc')
    .subscribe(Response => {
      this.li=Response;
      this.lis=this.li.list;
    });
  }
}

 