import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CvService } from '../cv.service';

@Component({
  selector: 'app-add-cv',
  templateUrl: './add-cv.component.html',
  styleUrls: ['./add-cv.component.css']
})
export class AddCvComponent implements OnInit {

  errorMessage = '';

  constructor(
    private cvService: CvService,
    private route: Router ) { }

  ngOnInit(): void {
  }

  addPersonne(formulaire: NgForm){
    this.cvService.addPersonne(formulaire.value).subscribe(
      (reponse)=> {
        const link = ['cv']
        this.route.navigate(link)    
      },
      (error)=> {
        this.errorMessage = `Problème de d'accès.
        Faire le nécessaire`;
        console.log(error);
      }
    );
/*    const link = ['cv']
    this.cvService.addPersonne(formulaire.value);
    this.route.navigate(link)
*/
  }
}
