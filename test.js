const assert = require('assert');
const { isGeneratedEmail } = require('./index');

describe('isGeneratedEmail', () => {
    it('should return true for disposable email domains', () => {
        assert.strictEqual(isGeneratedEmail('test@mailinator.com'), true);
        assert.strictEqual(isGeneratedEmail('test@10minutemail.com'), true);
    });

    it('should return false for valid email domains', () => {
        assert.strictEqual(isGeneratedEmail('test@gmail.com'), false);
        assert.strictEqual(isGeneratedEmail('test@yahoo.com'), false);
    });

    it('should return true for emails with excessive length', () => {
        assert.strictEqual(isGeneratedEmail(`${'a'.repeat(31)}@gmail.com`), true);
    });

    it('should return true for emails with random patterns', () => {
        assert.strictEqual(isGeneratedEmail('abcdefgh1234@gmail.com'), true);
        assert.strictEqual(isGeneratedEmail('1abcdefgh1234@gmail.com'), true);
    });

    it('should return true for emails with unusual patterns', () => {
        assert.strictEqual(isGeneratedEmail('test!@gmail.com'), true);
        assert.strictEqual(isGeneratedEmail('test....test@gmail.com'), true);
    });

    it('should return false for valid emails', () => {
        assert.strictEqual(isGeneratedEmail('john.doe@gmail.com'), false);
        assert.strictEqual(isGeneratedEmail('jane_doe123@yahoo.com'), false);
    });
});