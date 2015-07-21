/**
 * Created by paper on 15/7/20.
 *
 * 1085 背包问题
 * 
 * 在N件物品取出若干件放在容量为W的背包里，每件物品的体积为W1，W2……Wn（Wi为整数），
 * 与之相对应的价值为P1,P2……Pn（Pi为整数）。求背包能够容纳的最大价值。
 *
 * [Input]
 * 第1行，2个整数，N和W中间用空格隔开。N为物品的数量，W为背包的容量。(1 <= N <= 100，1 <= W <= 10000)
 * 第2 - N + 1行，每行2个整数，Wi和Pi，分别是物品的体积和物品的价值。(1 <= Wi, Pi <= 10000)
 * 
 * [Output]
 * 输出可以容纳的最大价值。
 * 
 * [Input示例]
 * 3 6
 * 2 5
 * 3 8
 * 4 9
 * 
 * [Output示例]
 * 14
 * 
 * http://wenku.baidu.com/view/d0d79e4be45c3b3567ec8bbc.html
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
 * @N 3 (N为物品的数量)
 * @W 6 (W为背包的容量)
 * @r [[2, 5], [3, 8], [4, 9]] ( Wi和Pi，分别是物品的体积和物品的价值 )
 */
function solveMeFirst(N, W, r) {
  var ret = [],
    w, p,
    k, i, j;
  
  // init
  for (k = 0; k <= W; k++) {
    ret[k] = 0;
  }

  /**
   * 动态规划
   *
   * 把 某个物品r[i] 装进 各种空间j, 价值是 ret[j - v] + c
   * 不装进 就是ret[j]
   * 取最大值 max(ret[j], ret[j - v] + c)
   */
  for (i = 0; i < N; i++) {
    w = r[i][0]; // 体积
    p = r[i][1]; // 价值
    
    for (j = W; j >= w; j--) {
      ret[j] = ret[j] > ret[j - w] + p ? ret[j] : ret[j - w] + p;
    }
  }

  return ret[W];
}

process.stdin.on('end', function () {
  // 按照回车来生成数组的话，数组的最后一个会有一个“空”
  __input_stdin_array = __input_stdin.split("\n");
  var len = __input_stdin_array.length;

  var res;

  // 第一行数据
  var n1 = __input_stdin_array[0];

  // 物品数量
  var N = +n1.split(" ")[0];

  // 背包容量
  var W = +n1.split(" ")[1];

  // 去除第一个，和最后一个空
  // 分别是物品的体积(Wi) 和 物品的价值(Pi)
  // ["2 5", "3 8", "4 9"]
  var r = __input_stdin_array.slice(1, len - 1);

  // 变成 [[2, 5], [3, 8], [4, 9]]
  r.forEach(function (d, i) {
    var temp = [];
    d.split(" ").forEach(function (v) {
      temp.push(+v);
    });

    r[i] = temp;
  });

  res = solveMeFirst(N, W, r);
  process.stdout.write("" + res + "\n");

});

