import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyTestService {

Images=[];
getGallery(){
  return this.Images=IMAGES.slice(0);
}
  constructor() { }
}
const IMAGES =[
  {"url":"https://unsplash.com/photos/Nx2djwRZxWU"},
  {"url":"https://unsplash.com/photos/2AgdG6LMsPg"},
  {"url":"https://unsplash.com/photos/f6wzKtGiBb0"},
  {"url":"https://unsplash.com/photos/VDHn0YmjIw4"},
  {"url":"https://unsplash.com/photos/cGMFif58sUc"},
  {"url":"https://unsplash.com/photos/GyDktTa0Nmw"}
];
