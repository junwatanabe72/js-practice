/**
 *  4.1 文字列の長さを返却するメソッドを実装してください
 *
 */

function length(str) {
    return str.length
}

/**
 *  4.2 文字列のながさが偶数の場合にtrueを返却するメソッドを実装してください
 *
 */

function lengthIsEven(str) {
    const x = str.length
    if (x % 2 == 0) {
        return "true"
    } else {
        return "false"
    }
}

/**
 *  4.3 文字列の先頭一文字目を返却するメソッドを実装してください
 *
 */

function firstChar(str) {
    const x = str.slice(0,1)
    return x 
}

/**
 *  4.4 文字列と二つの数字a, bを渡すとa文字目から, b文字目まで
 *  を返却するメソッドを実装してください
 *
 */

function substring(str, a, b) {
    const z = a - 1
    const x = str.slice(z, b)
    return x
}

/**
 *  4.5 引数に与えられた二つの引数のうち、一つ目の引数の文字列に二つ目の引数の文字列が
 *  含まれることを確認するメソッドを実装してください
 *
 *  example:
 *      "workplace", "work" => true
 *      "work", "workplace" => false
 *      "hogehoge", "" => true
 *      "hogegeho", "fugafuga" => false
 *
 */
//for文で書いてみる。
function isInclude(a, b) {
    console.log(a.includes(b)? true:false)
}

//for_ver
function isInclude(a, b) {
    let num = 0
    for (let i = 0; i < a.length; i++) {
        if (a[i] === b[num]) {
            num++
            if (num == b.length) {
                return true
                break;
            }
        } else {
            num = 0
        }
    }
    return false
}

/**
 *  4.6 引数に与えられたアルファベットの文字列が回文であること
 *  を確認するメソッドを実装してください
 *
 *  example:
 *      work => false
 *      anna => true
 *      madam => true
 *      level => true
 *
 */

 
function isPalindrome(str) {
    const x = str
    const y = x.split("").reverse().join("")
    console.log(x === y ? true : false)
}


//for_ver
function isPalindrome(str) {
    let num = 0
    for (let i = 0; i < str.length; i++) {
        let j = i + 1
        let k = Math.floor(str.length / 2)
        if (str[i] === str[str.length - j]) {
            num += 1
            if (num === k) {
                return true
            }
        } else {
            num = 0
        }
    }
    return false
}
