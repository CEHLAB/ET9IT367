// passwordValidator.spec.js
const validatePassword = require('./passwordValidator');

test('at least 8 characters', () => {
    expect(validatePassword('password')).toBe(true);
    expect(validatePassword('pass')).toBe(false);
});
