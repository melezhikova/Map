export default class ErrorRepository {
    constructor () {
        this.errors = new Map();
    }

    translate(code) {
        if (this.errors.has(code)) {
            return map.get(code);
        } else {
            throw new Error('Unknown error');
        }
    }

}
