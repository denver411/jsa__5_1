import sortProperties from '../src/js/app';

const obj = {
  name: 'мечник',
  health: 10,
  level: 2,
  attack: 80,
  defence: 40,
};

test('Свойста отсортированы по алфавиту, если не переданы ключи сортировки', () => {
  const expected = [
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
    { key: 'level', value: 2 },
    { key: 'name', value: 'мечник' },
  ];

  expect(sortProperties(obj)).toEqual(expected);
});

test('Свойста отсортированы по переданным ключам, затем по алфавиту', () => {
  const expected = [
    { key: 'name', value: 'мечник' },
    { key: 'level', value: 2 },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
  ];

  expect(sortProperties(obj, ['name', 'level'])).toEqual(expected);
});

test('Передача несуществующих ключей проигнорирована', () => {
  const expected = [
    { key: 'name', value: 'мечник' },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
    { key: 'level', value: 2 },
  ];

  expect(sortProperties(obj, ['name', 'bonus'])).toEqual(expected);
});
