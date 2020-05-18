/* eslint-disable no-unused-vars */
import Character from './Character';

class Daemon extends Character {
  constructor(health) {
    super(10, 40);
    this.health = health;
  }
}
