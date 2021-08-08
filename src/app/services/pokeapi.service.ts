import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {

  private url = 'https://pokeapi.co/api/v2';
  public seleccion: string = "bulbasaur"

  constructor(
    private http: HttpClient
  ) { }

  getLista(off:number){
    return this.http.get(`${this.url}/pokemon?offset=${off}&limit=100`);
  }

  getPokemon(){
    return this.http.get(`${this.url}/pokemon/${this.seleccion}`);
  }

}
