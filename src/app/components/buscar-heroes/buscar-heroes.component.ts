import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../servicios/heroes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-buscar-heroes',
  templateUrl: './buscar-heroes.component.html'
})
export class BuscarHeroesComponent implements OnInit {

  heroes: Heroe[];

  constructor(  private _heroesService: HeroesService,
                private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe( params => {
      const termino = params['termino'];
      this.heroes = this._heroesService.buscarHeroes(termino);
    });
  }

  ngOnInit() {
  }

}
