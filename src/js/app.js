export default class Team {
  constructor() {
    this.members = new Set();
  }

  // eslint-disable-next-line class-methods-use-this
  add(character) {
    if (this.members.has(character)) {
      throw new Error('Такой игрок уже существует в команде');
    }

    this.members.add(character);
  }
}
