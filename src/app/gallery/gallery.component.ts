import { Component, OnInit } from '@angular/core';
import { MyTestService } from '../my-test.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
title='Recent Photos';
visibleGallery:any[]=[];

  constructor( private _MyTestService:MyTestService)  {
  
   }

  ngOnInit() {
    this.visibleGallery=this._MyTestService.lis
    console.log(this.visibleGallery);
  }
 
}
