/* eslint-disable no-unused-vars */
import Character from './Character';

class Zombie extends Character {
  constructor(health) {
    super(40, 10);
    this.health = health;
  }
}
