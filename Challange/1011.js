/**
 * Created by paper on 15/7/17.
 * 
 * 1011 最大公约数GCD
 * 
 * 输入2个正整数A，B，求A与B的最大公约数。
 * 
 * [Input]
 * 2个数A,B，中间用空格隔开。(1<= A,B <= 10^9)
 * 
 * [Output]
 * 输出A与B的最大公约数。
 * 
 * [Input示例]
 * 30 105
 * 
 * [Output示例]
 * 15
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
  
  var min = a < b ? a : b;
  var max = a < b ? b : a;

  var t = max % min;

  if( t === 0 ) return min;

  return solveMeFirst(min, t);

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