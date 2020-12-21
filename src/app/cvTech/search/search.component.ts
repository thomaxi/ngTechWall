import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Personne } from 'src/app/Model/Personne';
import { CvService } from '../cv.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  chaine: string = '';
  searchResult: Personne[];
  constructor(
    private cvService: CvService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.searchResult = [];
  }
  
  search() {
    const name = this.chaine.trim();

    if (name.length) {
      this.cvService.findByName(name).subscribe(
        (personnes)=>{
          this.searchResult = personnes;
        },
        (error)=> {
          console.log(error);
        }
      );  
    }
    else {
      this.searchResult = [];
    }
  }

  selectPersonne(personne: Personne){
    const link = ['cv', personne.id];
    this.router.navigate(link);
    this.searchResult = [];
    this.chaine = '';
  }
}
