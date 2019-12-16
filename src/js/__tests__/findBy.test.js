import findBy from '../findBy';

const array = [
  { name: 'маг', type: 'character', description: 'Персонаж, обладающий магическими способностями' },
  { name: 'воин', type: 'character', description: 'Персонаж, сильный в ближнем бою' },
  { name: 'заклинание', type: 'attack', description: 'Атака магическим заклинанием' },
  { name: 'урон', type: 'help', description: 'Страница описания элемента интерфейса' },
];

describe('Search by field', () => {
  it('should return array with one object', () => {
    const finder = findBy('name', 'урон');

    const expected = [{
      name: 'урон',
      type: 'help',
      description: 'Страница описания элемента интерфейса',
    }];

    const result = array.filter(finder);

    expect(result).toEqual(expected);
  });

  it('should return array with two objects', () => {
    const finder = findBy('type', 'character');

    const expected = [
      {
        name: 'маг',
        type: 'character',
        description: 'Персонаж, обладающий магическими способностями',
      },
      {
        name: 'воин',
        type: 'character',
        description: 'Персонаж, сильный в ближнем бою',
      },
    ];

    const result = array.filter(finder);

    expect(result).toEqual(expected);
  });

  it('should return empty array', () => {
    const finder = findBy('type', 'damage');
    const expected = [];
    const result = array.filter(finder);

    expect(result).toEqual(expected);
  });
});
