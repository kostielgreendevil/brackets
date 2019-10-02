module.exports = function check(str, bracketsConfig) {
    // your solution
    let arrConcat = [];
    for (let i = 0; i < bracketsConfig.length; i++) {
        arrConcat = arrConcat.concat(bracketsConfig[i]);
    }

    let bracketsSet = new Set();
    for (let i = 0; i < arrConcat.length; i++) {
        bracketsSet.add(arrConcat[i]);
    }

    let prevStrLength = 0;
    while (prevStrLength !== str.length && str.length > 0) {
        prevStrLength = str.length;
        for (let i = 0; i < bracketsConfig.length; i++) {
            let trueBrackets = '';
            let brackets = bracketsConfig[i];
            if (bracketsSet.has(brackets[0])) {
                trueBrackets += brackets[0];
            }
            if (bracketsSet.has(brackets[1])) {
                trueBrackets += brackets[1];
            }
            str = str.replace(trueBrackets, '');
        }
    }
    return str.length === 0;
}
