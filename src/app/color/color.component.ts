import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PremierService } from '../premier.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css'],
  providers: [PremierService]
})
export class ColorComponent implements OnInit {

  color ='red';

  constructor(
    private premierService: PremierService,
    private router: Router,
    private activetedRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.activetedRoute.params.subscribe(
      (params) => {
        console.log(params);
        this.color = params.default;
      }
    );
  }

  processReq(message : any) {
    alert(message);
  }

  loggerMesData() {
    this.premierService.logger('Data Test');
  }
  
  GoToCv(){
    const link=['cv'];
    this.router.navigate(link);
  }
  /*
  changeColor(input) {
    console.log(input.value);
    this.color = input.value;
    input.value = '';

  }
  */
 
}
