
/**
 *  2.1.1 Fizz Buxx
 *
 *  1から100の数字までをカウントして、数字が3の倍数の場合にFizz
 *  5の倍数の場合にBuzz、3と5の倍数の時にFizzBuzzと表示する関数を実装してください。
 *
 *  example:
 *    1
 *    2
 *    3 Fizz
 *    4
 *    5 Buzz
 *    6
 *    7
 *    ..
 *    15 FizzBuzz
 *    ..
 *    18 Fizz
 *    ...
 *    30 FizzBuzz
 *    ...
 */
function fizzBuzz() {
  let num = 1
  while (num <= 100) {
    if (num % 3 == 0 && num % 5 == 0) {
      console.log(`${num} FizzBuzz`)
      num++
    } else if (num % 3 == 0) {
      console.log(`${num} Fizz`)
      num++
    } else if (num % 5 == 0) {
      console.log(`${num} Buzz`)
      num++
    } else {
      console.log(num)
      num++
    }
  }
}



/**
 *  2.1.2 配列の合計
 *
 *  渡された配列の合計を返す関数を実装してください。
 *
 *  example:
 *    [1, 3, 7, 9] => output: 20
 *    [2, 5, 3] => output: 10
 *    [1] => output: 1
 *
 */

function sum(array) {
  let num=0
  for (let x in array) {
    num+=array[x]
  }
  return num
}

/**
 *  2.1.3 配列の最大値と最小値
 *
 *  配列の最大値と最小値を出力する関数を実装してください。
 *
 *  example:
 *    [1, 3, 7, 9] => max: 20, min: 1
 *    [2, 5, 3, 6, 10, -1] => max: 10, min: -1
 *    [1] => max: 1, min: 1
 *
 */

function minMax(array) {
  const x = array.sort()
  const y = array.length - 1
  return `max: ${x[0]}`, `min: ${x[y]}`
}

/**
 *  2.1.4 文字列の反転
 *
 *  文字列を反転させる関数を実装してください
 *
 *  example:
 *    'library' => 'yrarbil'
 *    'krow' => 'work'
 *    'fizzbuzz' => 'zzubzzif'
 *
 */


function reverse(str) {
  const x = str.split("").reverse().join("")
  return x
}



//for_ver
function reverse(str) {
  let j = []
  for (let i = str.length - 1; i >= 0; i--) {
    j.push(str[i])
  }
  return j.join("")
}


/**
 *  2.1.5 文字列のローテート
 *
 *  文字列を入力された数だけローテートさせる関数を実装してください
 *
 *  example:
 *    'library',  1 => 'ylibrar'
 *    'library',  3 => 'arylibr'
 *    'library', -1 => 'ibraryl'
   0 1 2 3 4 
 * 6 1 2 3 4 1
 * 5 6 1 2 3 2
 * 4 5 6 1 2 3
 */
///



//もう一回
function rotate(str, num) {
  let x = str.split("")
  const v = x.length
  const z = v - 1

  if (num < -v) {
    num = Math.floor(num % v)
    num += v
  } else if (num < 0) {
    num += v
  } else if (num > v) {
    num = Math.floor(num % v)
  }

  let y = x.splice(z - (num - 1), num)
  x.splice(0, 0, y)
  return x.flat().join("")

}


//for_ver
function rotate(str, num) {
  //並べ替えるためのハコを作る 
  let ar = []
  const v = str.length
  //numを処理する（１）要素数以上の場合、（２）０以下の場合、（３）０以下でかつ、ー要素数以下の場合
  if (v < num) {
    num = num % v
    num = v - num
  } else if (v === num) {
    return str
  } else if (num < 0) {
    if (num <= -v) {
      num = v + (num % v)
    } else {
      num = v + num
    }
  } else {
    num = v - num
  }
  for (i = 0; i <= str.length - 1; i++) {
    let j = i + num
    if (str[j] === undefined) {
      let a = j - v
      ar.push(str[a])
    } else {
      ar.push(str[j])
    }
  }
  return ar.join("")
}



/**
 *  2.1.6 文字列のカウント
 *
 *  ある文字列の中に特定の文字列がいくつ含まれるかカウントする関数を実装してください。
 *
 *  example:
 *    'abcdabeabc',  'abc' => 2
 *    'abc',  'abc' => 1
 *    'hogehoage',  'hoge' => 1
 *
 */


//もう一回
function countStr(s1, s2) {
  reg = new RegExp(s2, "g");
  let x = s1.match(reg)
  return x.length
}

//for_ver
function isInclude(a, b) {
  let coun = 0
  let num = 0
  for (let i = 0; i < a.length; i++) {
    if (a[i] === b[num]) {
      num++
      if (num == b.length) {
        coun++
        num = 0
      }
    } else {
      num = 0
    }
  }
  return num
}


/**
 *  2.1.7 素数
 *
 *  入力された数字が素数であるか確認する関数を実装してください
 *
 *  example:
 *    1 => False
 *    2 => True
 *    3 => True
 *    6 => False
 *    9 => False
 *    11 => True
 *
 */


 //もう一回
function isPrime(num) {
  let boo = "True"
  if (num == 1) {
    boo = "False"
  }
  else if (num == 2) {
  }
  else {
    for (i = 2; i < num; i++) {
      if (num % i === 0) {
        boo = "False"
        break;
      }
    }
  }
  return boo
}


//要素追加
function isPrime(num) {
  let boo = "True"
  if (num === 1) {
    boo = "False"
    return boo
  }
  else if (num === 2) {
    return boo
  }
  //偶数排除
  else if (num % 2 === 0) {
    return boo
  } else {
    //ルート使用により、for文の回数を圧縮。
    snum = Math.sqrt(num)
    for (i = 2; i < snum; i++) {

      if (num % i === 0) {
        boo = "False"
        break;
      }
    }
  }
  return boo
}


/**
 *  2.1.8 配列の4と次の数字を抜いた合計
 *
 *  与えらた配列の合計を返す関数を実装してください。
 *  ただし、配列の中に4がある場合は、4とその次の数字を合計に含めないでください。
 *
 *  example:
 *    [1, 2, 3 , 4] => 6
 *    [1, 2, 3 , 4, 5] => 6
 *    [1, 4, 3 , 4, 5] => 1
 *    [4, 3 , 3, 5] => 11
 *    [4, 3 , 3, 4] => 3
 *    [4] => 0
 *
 */

function sumWithout4andNext(array) {
  num = 0
  num1 = 0
  for (i = 0; i <= array.length - 1; i++) {
    if (array[i] === 4) {
      num1 = 1
      continue;
    }
    else if (num1 === 1) {
      num1 = 0
      continue;
    }
    num += array[i]
  }
  return num
}
