const sortProperties = (data, sortOrder = []) => {
  const arrayUnsortKeys = [];
  const arraySortKeys = [];
  const keys = Object.create(data);

  // сначала добавляем свойства по переданным ключам
  if (sortOrder && sortOrder.length) {
    sortOrder.forEach((item) => {
      if (item in keys) {
        arraySortKeys.push({
          key: item,
          value: keys[item],
        });
      }
    });
  }

  // формируем массив непереданных ключей
  for (const item in keys) {
    if (!sortOrder.includes(item)) {
      arrayUnsortKeys.push({
        key: item,
        value: keys[item],
      });
    }
  }

  // сортируем по алфавиту
  arrayUnsortKeys.sort((a, b) => (a.key > b.key ? 1 : -1));

  // объединяем массивы
  return arraySortKeys.concat(arrayUnsortKeys);
};

export default sortProperties;
