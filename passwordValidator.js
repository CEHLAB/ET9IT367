// passwordValidator.js
function validatePassword(password, minLength = 8, minLetters = 1, minDigits = 1, customRules = []) {
    const letters = password.match(/[a-zA-Z]/g) || [];
    const digits = password.match(/\d/g) || [];
    const baseValidation = password.length >= minLength && letters.length >= minLetters && digits.length >= minDigits;
    return baseValidation && customRules.every(rule => rule(password));
}
module.exports = validatePassword;
