/* eslint-disable no-unused-vars */
import Character from './Character';

class Undead extends Character {
  constructor(health) {
    super(25, 25);
    this.health = health;
  }
}
