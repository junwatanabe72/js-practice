/**
 *  6.1 下記データを持ったオブジェクトを返す関数を実装してください。
 *
 *  name: 'Bob'
 *  age: 32
 *  gender: 'male'
 *
 */

function getPersonObject() {
    const human = {
        name: 'Bob',
        age: 32,
        gender: 'male'
    }
    for( let x in human){
        return human[x]
    }
}

/**
 *  6.2 下記データAが引数で与えられた場合にデータBに書き換える関数を実装してください。
 *
 *  Data A:
 *    name: 'Bob'
 *    age: 32
 *    gender: 'male'
 *  Data B:
 *    name: 'Mary'
 *    age: 37
 *    gender: 'female'
 *
 */

function mutateObject(person) {
    const DataB = {
        name: 'Mary',
        age: 37,
        gender: 'female'
    }

    for (let x in person) {
        person[x] = DataB[x]
        return person[x]
    }
}

/**
 *  6.3 下記引数で渡される配列にランダムな1 ~10の数字を割り振り、オブジェクトとして返す
 *      関数を実装してください
 *
 *    [
 *      'Bob',
 *      'Mary',
 *      'Ann',
 *      'Mike'
 *    ]
 *
 *   output:
 *     {
 *       Bob: [Random Number],
 *       Mary: [Random Number],
 *       Ann: [Random Number],
 *       Mike: [Random Number]
 *     }
 *
 */

function assignNumber(persons) {
    let output = {}
    for (let i = 0; i < persons.length; i++) {
        const y = Math.floor(Math.random() * Math.floor(10) + 1)
        let name = persons[i]
        output[name] = y
    }
    console.log(output)
}
/**
 *  6.4 配列に重複した要素があれば、true、そうでなければfalseを返す関数を実装してください
 *      但し、オブジェクトを使って実装すること
 *
 *  example:
 *    [1, 2, 3], 1 => false
 *    [1, 2, 2, 3], 5 => true
 *    [] => false
 *
 */
function isDuplicate(array) {
    let output = {}
    const x = array.length
    const set = new Set(array)
    const setToArr = Array.from(set);
    const y = setToArr.length
    if (x != y) {
        output[array] = "true"
    } else {
        output[array] = "false"
    }
    return output
}
