/**
 * Created by David Chang on 2017/1/2.
 */
import { Injectable } from '@angular/core';
import { Hero } from "./hero";
import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService{
  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }
}
