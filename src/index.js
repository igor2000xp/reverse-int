module.exports = function reverse (n) {
    let newN = Math.abs(n);
    newN = newN.toString().split('').reverse().join('');
    return Number(newN);
}
