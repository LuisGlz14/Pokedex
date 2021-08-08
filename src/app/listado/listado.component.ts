import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { PokeapiService } from '../services/pokeapi.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  offset: number = 0;
  pokemon: any;
  nextbtn: boolean = true;
  prevbtn: boolean = false;

  constructor(private pokedex: PokeapiService, private router: Router) {}

  ngOnInit(): void {
    this.pokedex.getLista(this.offset)
    .subscribe((data:any) => {
      this.pokemon = data.results;
    })
  }

  detalles(nombre: string){
    this.pokedex.seleccion = nombre;
    this.router.navigate(['/detalles']);
  }

  sigBloque(){
    this.offset +=100;
    this.pokedex.getLista(this.offset)
    .subscribe((data:any) => {
      if(data.next == null) this.nextbtn = false;
      this.prevbtn = true;
      this.pokemon = data.results;
    })
  }

  prevBloque(){
    this.offset -=100;
    this.pokedex.getLista(this.offset)
    .subscribe((data:any) => {
      if(data.previous == null) this.prevbtn = false;
      this.nextbtn = true;
      this.pokemon = data.results;
    })
  }
}
