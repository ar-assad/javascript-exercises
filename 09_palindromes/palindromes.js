const palindromes = function (str) {
    let chars = str.split('');
    chars = chars.filter(char => /[A-Za-z0-9]/.test(char));
    const len = chars.length;
    for (let i = 0; i < Math.floor(len) / 2; i++) {
        if (chars[i].toLowerCase() != chars[len - 1 - i].toLowerCase())
            return false;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
