// passwordValidator.js
function validatePassword(password) {
    return password.length >= 8 && /\d/.test(password) && /[a-zA-Z]/.test(password);
}
module.exports = validatePassword;
