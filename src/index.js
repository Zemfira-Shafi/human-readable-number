module.exports = function toReadable(number) {
    const ones = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    const tens = [
        " ",
        " ",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];
    let digit = 0;
    if (number < 20) return ones[number];
    if (number < 100) {
        digit = number % 10;
        if (digit > 0) {
            return tens[Math.floor(number / 10)] + " " + ones[digit];
        }
        if (digit === 0) {
            return tens[number / 10];
        }
    }
    if (number < 1000) {
        if (number % 100 > 0) {
            return (
                ones[Math.floor(number / 100)] +
                " hundred " +
                toReadable(number % 100)
            );
        }
        if (number % 100 === 0) {
            return ones[Math.floor(number / 100)] + " hundred";
        }
    }
};
