import ErrorRepository from '../app';

test('should get error`s message', () => {
  const map = new ErrorRepository();
  map.addError(123, 'Что-то пошло не так');
  const result = map.translate(123);

  expect(result).toBe('Что-то пошло не так');
});

test('throw error when try to get error`s message', () => {
  function createErrors() {
    const map = new ErrorRepository();
    map.addError(123, 'Что-то пошло не так');
    map.translate(1234);
  }

  expect(createErrors).toThrowError('Unknown error');
});

test('throw error when try to add new error', () => {
  function addErrors() {
    const map = new ErrorRepository();
    map.addError(123, 'Что-то пошло не так');
    map.addError(123, 'Что-то пошло не так');
  }

  expect(addErrors).toThrowError('Ошибка с таким кодом уже есть в репозитории');
});
