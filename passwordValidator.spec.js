// passwordValidator.spec.js
const validatePassword = require('./passwordValidator');

/*test('at least 8 characters', () => {
    expect(validatePassword('2345678911')).toBe(true);
    expect(validatePassword('pass123')).toBe(false);
});


test('password has at least one digit', () => {
    expect(validatePassword('password1')).toBe(true);
    expect(validatePassword('password')).toBe(false);
})


test('should validate that password has at least one letter', () => {
    expect(validatePassword('password1')).toBe(true);
    expect(validatePassword('12345678')).toBe(false);
});
test('should validate password with customizable minimum length', () => {
    expect(validatePassword('pass1234', 6)).toBe(true);
    expect(validatePassword('pass1', 6)).toBe(false);
});
test('should validate password with customizable minimum letters and digits', () => {
    expect(validatePassword('pass1234', 8, 4, 2)).toBe(true);
    expect(validatePassword('pass123', 8, 4, 2)).toBe(false);
});*/
test('should validate password with custom rules', () => {
    const noSpecialCharsRule = (password) => !/[!@#$%^&*]/.test(password);
    expect(validatePassword('password1', 8, 1, 1, [noSpecialCharsRule])).toBe(true);
    expect(validatePassword('password1!', 8, 1, 1, [noSpecialCharsRule])).toBe(false);
});



