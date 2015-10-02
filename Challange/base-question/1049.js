/**
 * Created by paper on 15/7/21.
 *
 * 1049 最大子段和
 *
 * N个整数组成的序列a[1],a[2],a[3],…,a[n]，
 * 求该序列如a[i]+a[i+1]+…+a[j]的连续子段和的最大值。当所给的整数均为负数时和为0。
 * 例如：-2,11,-4,13,-5,-2，和最大的子段为：11,-4,13。和为20。
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
  // ["-2", "11", "-4", "13", "-5", "-2"]
  var r = __input_stdin_array.slice(1, len - 1);

  // 变成 [-2, 11, -4, 13, -5, -2]
  r.forEach(function (v, i) {
    r[i] = parseInt(v, 10);
  });

  res = solveMeFirst(n, r);
  process.stdout.write("" + res + "\n");

});

/**
 * 示例
 *
 *
 */
function solveMeFirst(n, r) {

  var cur = r[0];
  var max = r[0];
  
  for (var i = 1; i < n; i++) {
    if (cur < 0){
      cur = 0;
    }
    
    cur += r[i];
    
    if (cur > max){
      max = cur;
    }
  }

  return max;
}
