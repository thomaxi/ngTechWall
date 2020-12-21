import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {

  monObservable: Observable<string>;
  mesImages = [
    'tim_logo.png',
    'tim_logo2.png',
    'cv.png',
    '404.jpg'
  ];

  currentImage: string;

  constructor() { }

  ngOnInit(): void {
    this.monObservable = new Observable(
      (observer)=>{
        let i = this.mesImages.length - 1;
        setInterval(
          ()=>{
            observer.next(this.mesImages[i]);
            if (i>0) {
              i--;  
            }
            else
            {
              i = this.mesImages.length - 1;
            }
          }
        ,1500);
      }
    );
    this.monObservable.subscribe(
      (result)=>{
        this.currentImage = result;
      }
    );
  }

}
