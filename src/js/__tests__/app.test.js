/* eslint-disable guard-for-in */
/* eslint-disable comma-dangle */
import Team from '../app';
// eslint-disable-next-line object-curly-newline
import * as Characters from '../characters';

const charactersArray = [];
for (const key in Characters) {
  const Character = new Characters[key]('Name', key);
  charactersArray.push(Character);
}

console.log(charactersArray);

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
