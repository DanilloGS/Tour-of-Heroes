import { Component, OnInit } from '@angular/core';

import { Hero } from '../models/hero';

import { HeroService } from '../services/hero.service';
import { MessageService } from '../services/message.service';
 
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;

  constructor( 
    private heroService: HeroService,
    private messageService: MessageService
  ) {
    // Reserve the constructor for simple initialization
    // It certainly shouldn't call a function that makes HTTP requests to a remote server as a real data service would.
  }

  ngOnInit(){ 
    this.getHeroes();
  }

  onSelect(hero: Hero){
    this.selectedHero = hero;
    this.messageService.add('HeroService: Selected hero Id: ' + hero.id);
  }

  getHeroes() {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
    // Async form of get the List of Heroes
  }
}
