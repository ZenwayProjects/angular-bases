import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public herosNames: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor']

  public deletedHero?: string;

  public removeLastHero():void {
    this.deletedHero = this.herosNames.pop();
  }

}
