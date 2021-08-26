export default class ErrorRepository {
  constructor() {
    this.errors = new Map();
  }

  addError(code, message) {
    if (this.errors.has(code)) {
      throw new Error('Ошибка с таким кодом уже есть в репозитории');
    } else {
      this.errors.set(code, message);
    }
  }

  translate(code) {
    if (this.errors.has(code)) {
      return this.errors.get(code);
    }
    throw new Error('Unknown error');
  }
}
