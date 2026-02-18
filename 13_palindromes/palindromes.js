const palindromes = function (word) {
let punctuation = /[\., ?!]/g;
let newWord = word.replace(punctuation, "").toLowerCase();
let reversed = newWord.split("").reverse().join("");
if (reversed === newWord) {
    return true;
} else {
    return false;
}};

// Do not edit below this line
module.exports = palindromes;
