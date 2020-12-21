import { Component, OnInit } from '@angular/core';
import { Personne } from 'src/app/Model/Personne';
import { EmbaucheService } from '../embauche.service';

@Component({
  selector: 'app-embauche',
  templateUrl: './embauche.component.html',
  styleUrls: ['./embauche.component.css']
})
export class EmbaucheComponent implements OnInit {

  personnes: Personne[];

  constructor(private embaucheservice: EmbaucheService) { }

  ngOnInit(): void {
    this.personnes = this.embaucheservice.getEmbauchees();
  }

}
