import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-top3',
  templateUrl: './hero-top3.component.html',
  styleUrls: [ './hero-top3.component.css' ]
})
export class HeroTop3Component implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes.splice(heroes.length-3,3));   // get last 3 Heroes
  }
}
