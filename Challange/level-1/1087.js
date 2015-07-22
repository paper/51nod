/**
 * Created by paper on 15/7/21.
 *
 * 1087 1 10 100 1000
 *
 * 1,10,100,1000...组成序列1101001000...，求这个序列的第N位是0还是1
 * 
 * [Input]
 * 第1行：一个数T，表示后面用作输入测试的数的数量。（1 <= T <= 10000)
 * 第2 - T + 1行：每行1个数N。（1 <= N <= 10^9)
 * 
 * [Output]
 * 共T行，如果该位是0，输出0，如果该位是1，输出1。
 * 
 * [Input示例]
 * 3
 * 1
 * 2
 * 3
 * 
 * [Output示例]
 * 1
 * 1
 * 0
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

  // 表示后面用作输入测试的数的数量
  var t = +__input_stdin_array[0];

  // 序列中的元素, 去除最后一个空
  // ["1", "2", "3"]
  var r = __input_stdin_array.slice(1, len - 1);

  // 变成 [1, 2, 3]
  r.forEach(function (v, i) {
    r[i] = parseInt(v, 10);
  });

  res = solveMeFirst(t, r);
  process.stdout.write("" + res + "\n");

});

//function isOne(n){
//  if(n == 1 || n == 2) return true;
//  
//  var MAX = 1000000000;
//  var a = 1;
//  var b = 1;
//
//  for(var i = 1; i<MAX; i++){
//    b = a + i;
//
//    if( b == n ){
//      return true;
//    }
//
//    if( b > n ){
//      return false;
//    }
//    
//    a = b;
//  }
//}

// 常规较慢的方法，就是一个一个去找
//function solveMeFirst(t, r) {
//  var result = [];
//  
//  r.forEach(function(v){
//    if( isOne(v) ){
//      result.push(1);
//    }else{
//      result.push(0);
//    }
//  });
//
//  return result.join("\n");
//}


/**
 * 快速方法 说明：
 * 
 * 我们从下标0开始, 可以发现哪些下标对应的数字是1的规律
 * 
 * 0, 1, 3, 6, 10, 15, 21, ... 
 * =>
 * 
 * x(i)   = x(i-1) + i    其中 x(0) = 0; i从1,2,3....
 * =>
 * 
 * x(i)   = x(i-1) + i
 * x(i-1) = x(i-2) + i-1
 * x(i-2) = x(i-3) + i-2
 * ...
 * ...
 * x(2)   = x(1) + 2
 * x(1)   = x(0) + 1
 * 
 * 左边和右边相加（有点像推导高中等差数量之和）
 * =>
 * 
 * x(i) = x(0) + 1 + 2 + 3 + ... + i
 * =>
 * 
 * x(i) = (1+i) * i / 2;
 */
function solveMeFirst(t, r) {
  var result = [];

  r.forEach(function(v){
    var x = 2 * (v - 1); // 减1是因为题目是从1开始算的
    var n = Math.floor( Math.sqrt(x) );
    
    var z = n * (n+1) == x ? 1 : 0;
    
    result.push(z);
  });

  return result.join("\n");
}




