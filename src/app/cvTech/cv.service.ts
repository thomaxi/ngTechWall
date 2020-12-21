import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Personne } from 'src/app/Model/Personne';

@Injectable({
  providedIn: 'root'
})
export class CvService {

  private personnes: Personne[];
  link ='http://localhost:3000/api/personnes';

  constructor(private http: HttpClient) {
    this.personnes = [
      new Personne(1, 'thouvenot', 'maxime', 49, 'tim_logo.png', 1123, 'pole'),
      new Personne(2, 'gabin', 'jean', 42, 'tim_logo2.png', 112342, 'pole2'),
      new Personne(3, 'test', 'test', 45, '', 112312, 'Testateur'),
    ];  
   }

    getPersonnes() : Observable<Personne[]> {
      return this.http.get<Personne[]>(this.link);
    }

    getFakePersonnes() : Personne[] {
        return this.personnes;
    }

    getPersonneById(id: number): Observable<Personne> {
      return this.http.get<Personne>(this.link+`/${id}`);
    }

    /*
    getPersonneById(id: number):Personne {
      const personne = this.personnes.find(personne =>{
        return personne.id===Number(id);
      });
      return personne;
    }
*/
    addPersonne(personne: Personne): Observable<any> {
      /*
      const token = localStorage.getItem('token');
      if (token) {
        const params = new HttpParams().set('access_token',token);
        return this.http.post(this.link,personne,{params});
      }
      */
      return this.http.post(this.link,personne);
    }

    /*    addPersonne(personne: Personne): void {
      personne.id = this.personnes[this.personnes.length-1].id + 1;
      this.personnes.push(personne);
    }
    */

   deletePersonne(id: number): Observable<any> {
     return this.http.delete(this.link+`/${id}`);
   }
  
   updatePersonne(personne: Personne): Observable<any> {
     return this.http.put(this.link,personne);
   }

   findByName(name: string): Observable<Personne[]> {
    const filter = `{"where":{"name":{"like":"%${name}%"}}}`;
    const params = new HttpParams().set('filter',filter);
    return this.http.get<Personne[]>(this.link,{params});
   }
}
