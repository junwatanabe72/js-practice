/**
 *  5.1 配列の要素を全て表示するメソッドを実装してください
 *
 */

function printArray(array) {
    const x = array.length 
    for (let num = 0; num < x; num++) {
        console.log(array[num])
}
}

function printArray(array) {
    for (let num in array) {
        console.log(array[num])
    }
}

/**
 *  5.2 全ての曜日を配列として返却するメソッドを実装してください
 *
 *  example:
 *     [
 *       "Monday",
 *       "Tuesday",
 *       "Wednesday",
 *       "Thursday",
 *       "Friday",
 *       "Saturday",
 *       "Sunday",
 *      ]
 *
 */
function getDays() {
    const example = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
    ]

    const x = example.length
    for (let num = 0; num < x; num++) {
        console.log(example[num])
}

/**
 *  5.3 配列に特定の数があった場合にtrue、そうでない場合にfalseを返す関数を実装してください
 *
 *  example:
 *    [1, 2, 3], 1 => true
 *    [1, 2, 3], 5 => false
 *    [], 5 => false
 *
 */

function findNum(array, num) {
    if (array.includes(num)){
        return "true"
    }else{
        return "false"
    }
}

/**
 *  5.4 配列に重複した要素があれば、true、そうでなければfalseを返す関数を実装してください
 *
 *  example:
 *    [1, 2, 3], 1 => false
 *    [1, 2, 2, 3], 5 => true
 *    [] => false
 *
 */

function isDuplicate(array) {
    const x = array.length
    const set = new Set(array)
    const setToArr = Array.from(set);
    const y = setToArr.length
    console.log(x != y ? "true":"false")
}
