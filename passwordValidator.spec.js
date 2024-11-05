// passwordValidator.spec.js
const validatePassword = require('./passwordValidator');

/*test('at least 8 characters', () => {
    expect(validatePassword('2345678911')).toBe(true);
    expect(validatePassword('pass123')).toBe(false);
});


test('password has at least one digit', () => {
    expect(validatePassword('password1')).toBe(true);
    expect(validatePassword('password')).toBe(false);
})*/


test('should validate that password has at least one letter', () => {
    expect(validatePassword('password1')).toBe(true);
    expect(validatePassword('12345678')).toBe(false);
});
