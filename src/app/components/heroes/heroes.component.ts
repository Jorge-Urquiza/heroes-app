import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from 'src/app/models/heroe';
import { Router } from '@angular/router';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[]= [];
  constructor(
    private heroeService: HeroesService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.heroes = this.heroeService.getHeroes();
  }
  redirectToHeroe(index:number) : void{
    this.router.navigate(['heroe', index]);
  }
}
