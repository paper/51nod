/**
 * Created by paper on 15/7/17.
 * 
 * 1000 A + B
 * 
 * 给出2个整数A和B，计算两个数的和。
 * 
 * [Input]
 * 2个整数A B，中间用空格分割。（0 <= A, B <= 10^9）
 * 
 * [Output]
 * 输出A + B的计算结果。
 * 
 * [Input示例]
 * 1 2
 * 
 * [Output示例]
 * 3
 */

process.stdin.resume();
process.stdin.setEncoding('ascii');

var __input_stdin = "";
var __input_stdin_array = "";
var __input_currentline = 0;

process.stdin.on('data', function (data) {
  __input_stdin += data;
});

function solveMeFirst(a, b) {
  return a + b;
}
process.stdin.on('end', function () {
  __input_stdin_array = __input_stdin.split(" ");
  var res;
  var _a = parseInt(__input_stdin_array[__input_currentline].trim(), 10);
  __input_currentline += 1;

  var _b = parseInt(__input_stdin_array[__input_currentline].trim(), 10);
  __input_currentline += 1;

  res = solveMeFirst(_a, _b);
  process.stdout.write("" + res + "\n");

});