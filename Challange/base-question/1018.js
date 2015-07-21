/**
 * Created by paper on 15/7/20.
 *
 * 1018 排序
 * 
 * 给出N个整数，对着N个整数进行排序
 * 
 * [Input]
 * 第1行：整数的数量N（1 <= N <= 50000)
 * 第2 - N + 1行：待排序的整数（-10^9 <= A[i] <= 10^9）
 * 
 * [Output]
 * 共n行，按照递增序输出排序好的数据。
 * 
 * [Input示例]
 * 5
 * 5
 * 4
 * 3
 * 2
 * 1
 * 
 * [Output示例]
 * 1
 * 2
 * 3
 * 4
 * 5
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
 * @n 3 (整数的数量)
 * @r [5, 4, 3, 2, 1]
 */
function solveMeFirst(n, r) {
  r.sort(function(a, b){return a - b });
  
  return r.join("\n");
}

process.stdin.on('end', function () {
  // 按照回车来生成数组的话，数组的最后一个会有一个“空”
  __input_stdin_array = __input_stdin.split("\n");
  var len = __input_stdin_array.length;

  var res;

  // 整数的数量
  var n = +__input_stdin_array[0];

  // 去除第一个，和最后一个空
  // 分别是物品的体积(Wi) 和 物品的价值(Pi)
  // ["5", "4", "3", "2", "1"]
  var r = __input_stdin_array.slice(1, len - 1);

  // 变成 [5, 4, 3, 2, 1]
  r.forEach(function (d, i) {
    r[i] = +d;
  });

  res = solveMeFirst(n, r);
  process.stdout.write("" + res + "\n");

});

