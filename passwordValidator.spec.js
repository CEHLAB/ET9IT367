// passwordValidator.spec.js
const validatePassword = require('./passwordValidator');

test('at least 8 characters', () => {
    expect(validatePassword('2345678911')).toBe(true);
    expect(validatePassword('pass123')).toBe(false);
});

// passwordValidator.spec.js
test('password has at least one digit', () => {
    expect(validatePassword('password1')).toBe(true);
    expect(validatePassword('password')).toBe(false);
});
