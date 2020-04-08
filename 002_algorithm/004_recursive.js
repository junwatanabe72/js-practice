
/*
 *  2.4.1 数列の和
 *
 *  再帰処理を用いて、0からnまでの数列の和を返す関数を実装してください
 *
 *  example:
 *    3 => 6
 *    10 => 55
 *    30 => 55
 */
function sumSequence(n, sum = 0) {
  if (n === 0) {
    return sum
  } else {
    return sumSequence(n - 1, sum += n)
  }
}


/**
 *  2.4.2 フィボナッチ数
 *
 *  指定された数のフィボナッチ数を返却する関数を実装してください。
 *  https://www.studyplus.jp/445
 *
 *  example:
 *    input: 10 => [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
 */

function fibonacci(num, index = 0, array = []) {
  if (index === num) {
    return array
  } else if (index === 0 || index === 1) {
    array.push(1)
    fibonacci(num, index + 1, array)
  } else {
    let a = array[index - 1] + array[index - 2]
    array.push(a)
    fibonacci(num, index + 1, array)
  }
}




/**
 *  2.4.2 ディレクトリに含まれるファイルサイズの合計
 *
 *  ツリー上のオブジェクトで渡されるディレクトリの
 *  ファイルサイズの合計を求める関数を実装してください。
 * 
 *  example:
 *    {
 *      type: 'folder',
 *      size: 0
 *      children: [
 *        {
 *          type: 'folder',
 *          size: 0
 *          children: 
 *          [
 *            {
 *              type: 'folder'
 *              size: 0
 *              children: [
 *                {
 *                  type: 'file',
 *                  size: 5
 *                },
 *                {
 *                  type: 'file',
 *                  size: 7
 *                },
 *                {
 *                  type: 'file',
 *                  size: 9
 *                },
 *              ]
 *            }
 *          ]
 *        },
 *        {
 *          type: 'file',
 *          size: 3
 *        },
 *        {
 *          type: 'file',
 *          size: 4
 *        },
 *        {
 *          type: 'file',
 *          size: 10
 *        },
 *      ]

 *    }
 *    => 38
 */

// 0folder 
//  0*folder
//  *  0folder
//  *   0 file 5
//      1 file 7
//      2 file 9 
//  1*file 3
//  2*file 4

let ar = []
function fileSize(node, sum = 0) {
  Object.keys(node).forEach(function (key) {
    if (key === "size") {
      sum += node[key]
      ar.push(node[key])
    }
    if (Array.isArray(node[key])) {
      node[key].forEach(function (item) {
        fileSize(item, sum);
      });
    }
    return sum
  });
  let aa = ar.reduce(function (a, b) { return a + b })
  console.log(aa)
  return aa
}

// let hassh = { type: 'folder', size: 0, children: [{ type: 'folder', size: 0, children: [{ type: 'folder', size: 0, children: [{ type: 'file', size: 5 }, { type: 'file', size: 7 }, { type: 'file', size: 9 }] }] }, { type: 'file', size: 3 }, { type: 'file', size: 4 }, { type: 'file', size: 10 },] }

// let esh = { type: 'folder', size: 4, children: [{ type: 'file', size: 3 }, { type: 'file', size: 10 }, { type: 'folder', size: 0, children: [{ type: 'file', size: 2 }] }] }

// fileSize(hassh, sum = 0)