import ErrorRepository from '../app';

test('should get error`s message', () => {
  const map = new ErrorRepository ();
  map.set(123, 'Что-то пошло не так');
  const result = map.translate(123);

  expect(result).toBe('Что-то пошло не так');
});
