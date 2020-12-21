import { Component,Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Personne } from 'src/app/Model/Personne';
import { threadId } from 'worker_threads';
import { EmbaucheService } from '../embauche.service';

@Component({
  selector: 'app-detail-cv',
  templateUrl: './detail-cv.component.html',
  styleUrls: ['./detail-cv.component.css']
})
export class DetailCvComponent implements OnInit {
  @Input() personne: Personne;

  constructor(private embaucheService: EmbaucheService,
              private router: Router) { }

  ngOnInit(): void {
  }
  embaucher(){
    this.embaucheService.embaucher(this.personne);
  }
  moreInfo(){
    const link = ['cv',this.personne.id];
    this.router.navigate(link);
  }
}
