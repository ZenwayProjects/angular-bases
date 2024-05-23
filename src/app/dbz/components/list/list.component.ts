import { Component, Input } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input() //Aca recibe datos del padre y se reemplaza los datos por defecto
  public characterList: Character[] = [
    {
      name: 'Trunks',
      power: 10
    }
  ];

  public onDeleteCharacter(index:number){
      console.log(index)
  }

}
