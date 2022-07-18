/* eslint-disable guard-for-in */
/* eslint-disable comma-dangle */
import Team from '../app';
// eslint-disable-next-line object-curly-newline
import * as Characters from '../characters';

const charactersArray = [];
for (const key in Characters) {
  const Character = new Characters[key]('name', key);
  charactersArray.push(Character);
}

test('Принимает игроков в команду', () => {
  const team = new Team();
  const teamSet = new Set(charactersArray);
  charactersArray.forEach((elem) => team.add(elem));

  expect(team.members).toEqual(teamSet);
});

test('Не принимает существующих игроков в команду', () => {
  const team = new Team();
  charactersArray.forEach((elem) => team.add(elem));

  expect(() => team.add(charactersArray[1])).toThrowError('Такой игрок уже существует в команде');
});

test('Принимает произвольное количество игроков в команду', () => {
  const team = new Team();
  const teamSet = new Set(charactersArray);
  team.addAll(...charactersArray);

  expect(team.members).toEqual(teamSet);
});

test('Принимает произвольное количество игроков в команду, не допускает задвоения', () => {
  const team = new Team();
  const teamSet = new Set(charactersArray);
  team.addAll(...charactersArray);
  team.addAll(...charactersArray);

  expect(team.members).toEqual(teamSet);
});

test('Преобразует Set с командой в массив', () => {
  const team = new Team();
  const teamSet = Array.from(new Set(charactersArray));
  team.addAll(...charactersArray);
  team.toArray();

  expect(team.members).toEqual(teamSet);
});
