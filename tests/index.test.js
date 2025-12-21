import {helloWorld} from "../public/scripts/index.js";

describe('Hello World Function', () => {
    it('should return "Hello World!"', () => {
        const expected = 'Hello World!';
        const actual = helloWorld();
        expect(actual).toBe(expected);
    });
});