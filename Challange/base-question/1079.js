/**
 * Created by paper on 15/7/21.
 *
 * 1079 中国剩余定理
 * 
 * http://blog.csdn.net/bo_jwolf/article/details/9355937
 */

process.stdin.resume();
process.stdin.setEncoding('utf8');

var __input_stdin = "";
var __input_stdin_array = "";
var __input_currentline = 0;

process.stdin.on('data', function (data) {
  __input_stdin += data;
});

/**
 * 示例
 *
 * @n 3 表示后面输入的质数及模的数量。（2 <= N <= 10)
 *
 * @r [[2, 1], [3, 2], [5, 3]]
 * 每行2个数P和M，中间用空格分隔，P是质数，M是K % P的结果。
 * (2 <= P <= 100, 0 <= M < P)
 */
function solveMeFirst(n, r) {
  
  // 所有质数的乘积
  var p_multi = 1;
  r.forEach(function (v) {
    p_multi = p_multi * v[0];
  });
  
  var sum = 0;
  for (var i=0; i<n; i++) {
    var p = r[i][0];
    var m = r[i][1];
    
    var t = p_multi / p;
    var v = t;
    
    // 从t的公倍数中找出被p除 余1 的最小数v
    while (v % p !== 1) v += t;
    sum += v * m;
  }

  return sum%p_multi;
}

process.stdin.on('end', function () {
  // 按照回车来生成数组的话，数组的最后一个会有一个“空”
  __input_stdin_array = __input_stdin.split("\n");
  var len = __input_stdin_array.length;

  var res;

  // 表示后面输入的质数及模的数量 （2 <= N <= 10)
  var n = +__input_stdin_array[0];

  // 去除第一个，和最后一个空
  // 分别是物品的体积(Wi) 和 物品的价值(Pi)
  // ["2 1", "3 2", "5 3"]
  var r = __input_stdin_array.slice(1, len - 1);

  // 变成 [[2,1], [3, 2], [5, 3]]
  r.forEach(function (d, i) {
    var temp = [];
    d.split(" ").forEach(function (v) {
      temp.push(+v);
    });

    r[i] = temp;
  });

  res = solveMeFirst(n, r);
  process.stdout.write("" + res + "\n");

});

