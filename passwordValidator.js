// passwordValidator.js
function validatePassword(password) {
    return password.length >= 8 && /\d/.test(password);
}
module.exports = validatePassword;


