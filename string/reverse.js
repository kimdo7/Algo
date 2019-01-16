console.log(prob1("abcde")) //baced
console.log(prob1("abcd")) //badc

function prob1(str) {
    var midpoint = parseInt(str.length / 2)

    var leftStr = ""
    var rightStr = ""
    var midStr = (str.length % 2) ? str[midpoint] : ""

    for (var i = 0, leftCursor = 0, rightCursor = str.length - 1;
        i < midpoint; i++) {
        leftStr = str[leftCursor] + leftStr
        rightStr = rightStr + str[rightCursor]

        leftCursor += 1
        rightCursor -= 1
    }

    return leftStr + midStr + rightStr
}

