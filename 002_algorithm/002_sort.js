/**
 *  2.2.1 バブルソート
 *
 *  バブルソートを実装してください。(入力は数値のみ)
 *
 *  example:
 *    [1, 3, 2, 4, 5] => [1, 2, 3, 4, 5]
 *    [5, 3, 2, 1] => [1, 2, 3, 5]
 */

function bubbleSort (array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = array.length - 1; j > i; j--) {
      if (array[j] < array[j - 1]) {
        let tmp = array[j];
        array[j] = array[j - 1];
        array[j - 1] = tmp;
      }
    }
  }
  return array
}

/**
 *  2.2.2 挿入ソート
 *
 *  挿入ソートを実装してください。(入力は数値のみ)
 *
 *  example:
 *    [1, 3, 2, 4, 5] => [1, 2, 3, 4, 5]
 *    [5, 3, 2, 1] => [1, 2, 3, 5]
 */

function insertSort (array) {
  for (let i = 1; i < array.length; i++) {
    let tmp = array[i];
    for (let j = i - 1; j >= 0; j--) {
      if (array[j] > tmp) {
        array[j + 1] = array[j];
        array[j] = tmp
      } else {
        break;
      }
    }
  }
  return array
}

/**
 *  2.2.3 マージソート
 *
 *  マージソートを実装してください。(入力は数値のみ)
 *
 *  example:
 *    [1, 3, 2, 4, 5] => [1, 2, 3, 4, 5]
 *    [5, 3, 2, 1] => [1, 2, 3, 5]
 */

function mergeSort (array) {
  //配列の要素が１になるまで、分割する。
  let split = function (ar) {
    if (ar.length < 2) {
      return ar;
    }
    //配列の要素を二つに分ける
    let a, b, mid = ar.length / 2 | 0;

    //再帰的に分割処理し、margeメソッドにて、ソートして出力する。
    a = split(ar.slice(0, mid));
    b = split(ar.slice(mid, ar.length));
    return marge(ar, a, b);
  }
  let marge = function (ar, a, b) {
    if (b === undefined) {
      return ar;
    }
    let c = [], i, j;
    while (a.length > 0 && b.length > 0) {
      i = a[0], j = b[0];
      if (i < j) {
        c.push(a.shift())
      } else {
        c.push(b.shift())
      }
    }
    if (a.length === 0) {
      c = c.concat(b);
    } else if (b.length === 0) {
      c = c.concat(a);
    }
    return c
  }
  return split(array);
}


/**
 *  2.2.4 クイックソート
 *
 *  クイックソートを実装してください。(入力は数値のみ)
 *
 *  example:
 *    [1, 3, 2, 4, 5] => [1, 2, 3, 4, 5]
 *    [5, 3, 2, 1] => [1, 2, 3, 5]
 */

function quickSort (array, start = 0, end = (array.length -1)) {
  return array
};









//マージソート1
//refer_ruby_version

  // def midPoint(nums)
  //   return ((nums.count / 2) + 0.5).floor
  // end

  // def setMerge(arr1, arr2)
  //   arr = []
  //   while arr1.count > 0 || arr2.count > 0 do
  //     if arr1.count == 0 then
  //         arr.push(arr2.shift)
  //       elsif arr2.count == 0 then
  //         arr.push(arr1.shift)
  //       elsif arr1[0] > arr2[0] then
  //         arr.push(arr2.shift)
  //       else
  //         arr.push(arr1.shift)
  //       end
  //     end
  //   return arr
  // end

  // def mergeSort(numbers)
  //     if numbers.count == 0 then
  //       numbers = []
  //     elsif numbers.count == 1 then
  //       numbers = numbers
  //     elsif numbers.count == 2 then
  //         if numbers[0] > numbers[1] then
  //           tmp = numbers[0]
  //           numbers[0] = numbers[1]
  //           numbers[1] = tmp
  //         end
  //     else
  //       midNum = midPoint(numbers)
  //       arr1 = numbers.slice(0, midNum + 1)
  //       arr2 = numbers.slice(midNum + 1, numbers.count)
        
  //       arr1 = mergeSort(arr1)
  //       arr2 = mergeSort(arr2)
        
  //       numbers = setMerge(arr1, arr2)
  //     end
  //   return numbers
  // end

  // numbers = [10, 2, 12, 7, 16, 8, 1]
  // p mergeSort(numbers) 

//マージソート2
//runtime_error_version

// function midPoint(nums) {
//   console.log(Math.floor((nums.length / 2) + 0.5))
//   return (Math.floor((nums.length / 2) + 0.5))
// }
// function setMerge(arr1, arr2) {
//   let arr = []
//   console.log(arr1)
//   console.log(arr2)
//   while (arr1.length > 0 || arr2.length > 0) {
//     if (arr1.length === 0) {
//       arr.push(arr2.shift())
//     } else if (arr2.length === 0) {
//       arr.push(arr1.shift)
//     } else if (arr1[0] > arr2[0]) {
//       arr.push(arr2.shift())
//     } else {
//       arr.push(arr1.shift())
//     }
//   }
//   console.log(arr)
//   return arr
// }
// function mergeSort(numbers) {
//   if (numbers.length === 0) {
//     numbers = []
//   } else if (numbers.length === 1) {
//     numbers = numbers
//   } else if (numbers.length === 2) {
//     if (numbers[0] > numbers[1]) {
//       let tmp = numbers[0]
//       numbers[0] = numbers[1]
//       numbers[1] = tmp
//     }
//   } else {
//     midNum = midPoint(numbers)
//     arr1 = numbers.slice(0, midNum)
//     arr2 = numbers.slice(midNum, numbers.length)
//     arr1 = mergeSort(arr1)
//     arr2 = mergeSort(arr2)

//     numbers = setMerge(arr1, arr2)
//   }
//   return numbers
// }