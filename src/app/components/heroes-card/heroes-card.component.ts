import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Heroe } from 'src/app/models/heroe';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes-card',
  templateUrl: './heroes-card.component.html',
  styleUrls: ['./heroes-card.component.css']
})
export class HeroesCardComponent implements OnInit {

  @Input() heroe!: Heroe;
  @Input() index?: number;

  //@Output() heroeSelected : EventEmitter<number> = new EventEmitter();

  constructor(   private router: Router) { }

  ngOnInit(): void {
    console.log("current heroe: ", this.heroe);
  }

  showHeroe() : void{
    this.router.navigate(['heroe', this.index]);
    //this.heroeSelected.emit( this.index );
  }
}
