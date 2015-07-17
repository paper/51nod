/**
 * Created by paper on 15/7/17.
 * 
 * 活动安排问题
 * 
 * 有若干个活动，第i个开始时间和结束时间是[Si,fi)，
 * 只有一个教室，活动之间不能交叠，求最多安排多少个活动？
 * （注：起点或终点重叠，不算重叠）
 * 例如：[1 5][2 3][3 6]，可以选[2 3][3 6]，这2条线段互不重叠。
 * 
 * [输入]
 * 第 1    行：1个数N，线段的数量(2 <= N <= 10000)
 * 第 2... 行：每行2个数，线段的起点和终点(-10^9 <= S,E <= 10^9)
 * 
 * [输出]
 * 输出最多可以选择的线段数量。
 * 
 * [输入示例]
 * 3
 * 1 5
 * 2 3
 * 3 6
 * 
 * [输出示例]
 * 2
 */

process.stdin.resume();
process.stdin.setEncoding('utf8');

var __input_stdin = "";
var __input_stdin_array = "";
var __input_currentline = 0;

process.stdin.on('data', function (data) {
  __input_stdin += data;
});

// @n 3
// @r ["1 5", "2 3", "3 6"]
function solveMeFirst(n, r) {
  var r2 = [];

  // 格式化r
  r.forEach(function(v){
    var temp = [];

    v.split(" ").forEach(function(x){
      temp.push(+x);
    });

    r2.push(temp);
  });

  // 按照终点从小到大排序的数组
  var E = r2.sort(function(a, b){ return a[1] - b[1] });

  var begin = E[0]; // 最初值
  var result = 1;
  
  for(var i = 1; i < n; i++){
    var e = E[i];
    if( e[0] >= begin[1] ){
      result++;
      begin = e;
    }
  }

  return result;
}
process.stdin.on('end', function () {
  // 按照回车来生成数组的话，数组的最后一个会有一个“空”
  __input_stdin_array = __input_stdin.split("\n");
  var len = __input_stdin_array.length;
  
  var res;
  var n = parseInt(__input_stdin_array[0].trim(), 10);
  // 去除第一个，和最后一个空
  //（这里是坑，坑爹啊！又不能线上调试，只能在本地调试发现，最后有个空值。
  // 但51node给的测试数据，最后一行数据是没有换行符的）
  var r = __input_stdin_array.slice(1, len - 1);

  res = solveMeFirst(n, r);
  process.stdout.write("" + res + "\n");

});