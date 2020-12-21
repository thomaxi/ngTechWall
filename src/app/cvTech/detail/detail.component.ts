import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Personne } from 'src/app/Model/Personne';
import { CvService } from '../cv.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  personne: Personne;

  constructor(
    private cvService: CvService,
    private activatedRoute: ActivatedRoute,
    private route: Router
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params)=>{
        this.cvService.getPersonneById(params.id).subscribe(
          (personne)=> {
            this.personne = personne;
          }
        );
        /*this.personne = this.cvService.getPersonneById(params.id);*/
      }
    );
  }

  deletePersonne() {
    this.cvService.deletePersonne(this.personne.id).subscribe(
      (reponse)=> {
        const link=['cv'];
        this.route.navigate(link);
      },
      (error)=> {
        console.log(error);
      }
    );
  }
  updatePersonne(id: number) {
    const link = ['cv/updateCv', id];
    this.route.navigate(link);
  }
}
