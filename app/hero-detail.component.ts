/**
 * Created by David Chang on 2017/1/2.
 */
import { Component, Input} from '@angular/core';
import {Hero} from "./hero";

@Component({
  selector: 'my-hero-detail',
  template: `
    <h1>{{title}}</h1>
    <h2>My Heroes</h2>
    <ul class="heroes">
      <li *ngFor="let hero of heroes"
        [class.selected]="hero === selectedHero"
        (click)="onSelect(hero)">
        <span class="badge">{{hero.id}}</span> {{hero.name}}
      </li>
    </ul>
  `
})

export class HeroDetailComponent{
  @Input()
  hero: Hero;
}
