// eslint-disable-next-line object-curly-newline
import { Bowerman, Swordsman, Magician, Daemon, Undead, Zombie } from '../characters';

describe.each([Bowerman, Swordsman, Magician, Daemon, Undead, Zombie])('Проверяем %p', (Character) => {
  test('Принимает имя и тип персонажа', () => {
    const character = new Character('Name', Character.name);
    expect(character.name).toBe('Name');
  });

  test('Не принимает имя короче двух символов', () => {
    expect(() => new Character('N', Character.name)).toThrow();
  });

  test('Не принимает имя длиннее десяти символов', () => {
    expect(() => new Character('_1234567890', Character.name)).toThrow();
  });

  test('Не принимает категориию прсонажа которого нет в списке', () => {
    expect(() => new Character('Name', 'Lion King')).toThrow();
  });
});
