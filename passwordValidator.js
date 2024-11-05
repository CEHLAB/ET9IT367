// passwordValidator.js
function validatePassword(password, minLength = 8) {
    return password.length >= minLength && /\d/.test(password) && /[a-zA-Z]/.test(password);
}
module.exports = validatePassword;

