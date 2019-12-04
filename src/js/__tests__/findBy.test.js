import findBy from '../findBy';

describe('Search by field', () => {
  it('should return array with one object', () => {
    const finder = findBy('name', 'урон');

    const array = [
      { name: 'маг', type: 'character', description: 'Персонаж, обладающий магическими способностями' },
      { name: 'заклинание', type: 'attack', description: 'Атака магическим заклинанием' },
      { name: 'урон', type: 'help', description: 'Страница описания элемента интерфейса' },
    ];

    const expected = [{
      name: 'урон',
      type: 'help',
      description: 'Страница описания элемента интерфейса',
    }];

    const result = array.filter(finder);

    expect(result).toEqual(expected);
  });
});
