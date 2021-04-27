import { Component, OnInit } from '@angular/core';
import { MyTestService } from '../my-test.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
title='Recent Photos';

Items;
  constructor( private _MyTestService:MyTestService)  {
  
   }

  ngOnInit() {
    this._MyTestService.getImage().subscribe((resp: any) => {
      this.Items = resp.results;
    
      console.log(resp);
    });
  }
 
}
