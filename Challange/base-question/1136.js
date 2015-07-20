/**
 * Created by paper on 15/7/19.
 *
 * 1136 欧拉函数
 * 
 * 欧拉函数的定义: E（N）= 区间[1,N-1] 中与 N 互质的整数个数
 * 
 * 在程序中利用欧拉函数如下性质，可以快速求出欧拉函数的值 ( P为N的质因子 )
 * 若(N%P==0 && (N/P)%P==0) 则有:E(N)=E(N/P)*P;
 * 若(N%P==0 && (N/P)%P!=0) 则有:E(N)=E(N/P)*(P-1);
 * 
 * 请自行看下面的文章，证明上面的2个假设
 * http://www.cnblogs.com/yefeng1627/archive/2013/01/02/2842492.html
 * 
 * 
 * 例如：φ(8) = 4（Phi(8) = 4），因为1,3,5,7均和8互质。
 * 
 * [Input]
 * 输入一个数N。(2 <= N <= 10^9)
 * 
 * [Output]
 * 输出Phi(n)
 * 
 * [Input示例]
 * 8
 * 
 * [Output示例]
 * 4
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
 * @n 8
 */
function solveMeFirst(n) {
  var result = 1, i;

  for (i = 2; i * i <= n; i++) {
    if (n % i == 0) {
      n /= i;
      result *= i - 1;
      
      while (n % i == 0) {
        n /= i;
        result *= i;
      }

    }
  }
  
  if (n > 1) {
    // 如果n是质数，那么result就是 n-1
    result *= n - 1;
  }

  return result;
}

process.stdin.on('end', function () {
  var res;

  // 传入的数
  var n = +__input_stdin;

  res = solveMeFirst(n);
  process.stdout.write("" + res + "\n");

});

