import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';

import {v4 as uuid} from 'uuid'

@Injectable({ providedIn: 'root' })
export class DbzService {
  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Krilin',
      power: 1000,
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 9500,
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 7500,
    },
  ];

  public onNewCharacter(character: Character) {

    // const newCharacter = {...character, id:uuid()}

    this.characters.push(character);
  }

  public DeleteCharacterById(id: string) {
    this.characters = this.characters.filter(character => character.id !== id);
  }
}
