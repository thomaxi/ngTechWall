import { Component, OnInit } from '@angular/core';
import { Personne } from 'src/app/Model/Personne';
/*import { PremierService } from 'src/app/premier.service';*/
import { CvService } from '../cv.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {

  personnes: Personne[];
  selectedPersonne: Personne;

  constructor(private cvService: CvService) { }

  ngOnInit(): void {
    
    this.cvService.getPersonnes().subscribe(
      (personnes)=>{
        this.personnes =personnes;
      },
      (error)=> {
        alert('Problème d\'accès API. Données fake');
        console.log(error);
        this.personnes = this.cvService.getFakePersonnes();
      }
    );
    
    /*this.premierService.addData('from cv component');
    this.premierService.logger(this.personnes);*/
  }

  selectPersonne(personne) {
    this.selectedPersonne = personne;
  }
}
