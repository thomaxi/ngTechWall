import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from '../authentification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private authentificationService: AuthentificationService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  login(credentials) {
   console.log(credentials);
   this.authentificationService.login(credentials).subscribe(
      (reponse)=>{
        const token = reponse.id;
        const link = ['cv']
        localStorage.setItem('token',token);
        this.router.navigate(link);
      }
    );
    
  }
/*  login(loginFormulaire){

  }
*/
}
