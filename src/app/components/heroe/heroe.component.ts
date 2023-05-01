import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroe } from 'src/app/models/heroe';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {
  public heroe!:Heroe;
  constructor(
    private activatedRoute: ActivatedRoute,
    private heroeService: HeroesService,
    ) {
      this.activatedRoute.params.subscribe( params => {
      this.heroe = this.heroeService.getHeroeByIndex( params.id);
      });
    }

  ngOnInit(): void {

  }
  getImage() : string {
    return this.heroe.casa === 'DC' ? 'assets/img/dc.png' : 'assets/img/marvel.png'
  }
}
