import { validateEmail } from '..';

describe('validateEmail', () => {
    it('accepts a standard email address', () => {
        expect(validateEmail('ulla.ulriksen@example.com')).toBe(true);
    });

    it("accepts Luigi Carluccio's two-letter country domain", () => {
        expect(validateEmail('luigi@carluccio.it')).toBe(true);
    });

    it("accepts John Silva's multi-part country domain", () => {
        expect(validateEmail('john@silva.com.br')).toBe(true);
    });

    it('rejects an address without an @ symbol', () => {
        expect(validateEmail('invalid-email')).toBe(false);
    });
});
