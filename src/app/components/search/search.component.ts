import { Component, OnInit } from '@angular/core';
import { Heroe } from 'src/app/models/heroe';
import { ActivatedRoute } from '@angular/router'
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  heroes!: Heroe[];
  termino!: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private heroeService: HeroesService
  ) {

  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.termino = params['termino'];
      this.heroes = this.heroeService.getHeroesByTerm(this.termino.toLowerCase());
    });
  }

}
