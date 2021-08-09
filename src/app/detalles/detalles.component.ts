import { PokeapiService } from './../services/pokeapi.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {
  
  nombre = '';
  habilidades: any;
  juegos: any;
  sprite = '';
  tipos: any;
  estadisticas: any;

  constructor(private pokedex: PokeapiService, private router: Router) { }

  ngOnInit(): void {
    this.pokedex.getPokemon().subscribe((data:any) => {
      this.nombre = data.name;
      this.habilidades = data.abilities;
      this.juegos = data.game_indices;
      this.sprite = data.sprites.front_default;
      this.tipos = data.types;
      this.estadisticas = data.stats;
    })
  }

  navInicio(){
    this.router.navigate(['/listado']);
  }

}
