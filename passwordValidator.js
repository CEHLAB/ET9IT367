// passwordValidator.js
function validatePassword(password, minLength = 8, minLetters = 1, minDigits = 1) {
    const letters = password.match(/[a-zA-Z]/g) || [];
    const digits = password.match(/\d/g) || [];
    return password.length >= minLength && letters.length >= minLetters && digits.length >= minDigits;
}
module.exports = validatePassword;

