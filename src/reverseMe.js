const reverse = (n) => {
    const reversePositive = (n) => {
        const posN = n.toString().split('');
        return Number(posN.reverse().join(''));
    }

    if (n < 0) {
        let newN = Math.abs(n).toString();
        return - reversePositive(newN);
    } else {
        return reversePositive(n);
    }
}

console.log(reverse(-123));
