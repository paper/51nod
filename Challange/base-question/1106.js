/**
 * Created by paper on 15/7/21.
 *
 * 1106 质数检测
 *
 * 给出N个正整数，检测每个数是否为质数。如果是，输出"Yes"，否则输出"No"。
 */

process.stdin.resume();
process.stdin.setEncoding('utf8');

var __input_stdin = "";
var __input_stdin_array = "";
var __input_currentline = 0;

process.stdin.on('data', function (data) {
  __input_stdin += data;
});

process.stdin.on('end', function () {
  // 按照回车来生成数组的话，数组的最后一个会有一个“空”
  __input_stdin_array = __input_stdin.split("\n");
  var len = __input_stdin_array.length;

  var res;

  // 表示序列的长度
  var n = +__input_stdin_array[0];

  // 序列中的元素, 去除最后一个空
  // ["2", "3", "4", "5", "6"]
  var r = __input_stdin_array.slice(1, len - 1);

  // 变成 [2, 3, 4, 5, 6]
  r.forEach(function (v, i) {
    r[i] = parseInt(v, 10);
  });

  res = solveMeFirst(n, r);
  process.stdout.write("" + res + "\n");

});

function isInt(num) {
  return /^\d+$/.test(num);
}

function isPrime(num, fn) {
  var isZhiShu = true;

  if ([1, 2, 3, 5, 7].indexOf(num) > -1) {
    return isZhiShu;
  }
  
  var v2 = Math.sqrt(num);

  // 如果v2是整数，则说明不是质数
  // 121 = 11*11
  if ( isInt(v2) ) {
    isZhiShu = false;
    return isZhiShu;
  }

  var i = 2;
  var x = fn ? fn(i) : i;
  
  // 遍历的值，肯定小于num的平方根
  while (x < v2) {
    if (num % x == 0) {
      isZhiShu = false;
      break;
    }

    i++;
    x = fn ? fn(i) : i;
  }

  return isZhiShu;
}

// 2 <= S[i] <= 10^9
// 从2开始，存前1010个质数
// 如果 x%2!=0, 那么x%4 也肯定不等于0
function getPrimeFirst(MAXS){
  MAXS = MAXS || 1010;
  
  var list = [2, 2];
  var step = 1;

  for (var j = 2; j < MAXS; j++) {
    while (true) {
      step++;

      if (isPrime(step)) {
        list[j] = step;
        break;
      }
    }
  }
  
  return list;
}


/**
 * 示例
 *
 *
 */

var G_list = getPrimeFirst(1010);

function solveMeFirst(n, r) {
  var result = [];

  r.forEach(function (v) {

    var check = isPrime(v, function (i) {
      return G_list[i];
    });

    var str = check ? "Yes" : "No";

    result.push(str);
  });

  return result.join("\n");
}
