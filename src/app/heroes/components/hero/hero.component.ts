import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name:string = 'ironman';
  public age:number = 18

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  public getHeroDescription(): string{
    return `${this.name} - ${this.age}`
  }


  public changeHeroeName():void {
    this.name = 'Spiderman'
  }

  public changeHeroeAge():void {
    this.age = 22;
  }

  public resetForm():void {
    this.name = 'ironman'
    this.age= 18
  }

}
