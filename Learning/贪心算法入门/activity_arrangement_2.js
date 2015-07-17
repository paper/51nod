/**
 * Created by paper on 15/7/17.
 *
 * 活动安排问题之二
 *
 * 有若干个活动，第i个开始时间和结束时间是[Si,fi)，活动之间不能交叠，要把活动都安排完，至少需要几个教室？
 * 
 * [输入]
 * 第一行一个正整数n (n <= 10000)代表活动的个数。
 * 第二行到第(n + 1)行包含n个开始时间和结束时间。
 * 开始时间严格小于结束时间，并且时间都是非负整数，小于1000000000
 * 
 * [输出]
 * 一行包含一个整数表示最少教室的个数。
 * 
 * [输入示例]
 * 3
 * 1 2
 * 3 4
 * 2 9
 * 
 * [输出示例]
 * 2
 */

process.stdin.resume();
process.stdin.setEncoding('ascii');

var __input_stdin = "";
var __input_stdin_array = "";
var __input_currentline = 0;

process.stdin.on('data', function (data) {
  __input_stdin += data;
});

// @n 3
// @r ["1 2", "3 4", "2 9"]
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

  // 按照起点从小到大排序的数组
  var S = r2.sort(function(a, b){ return a[0] - b[0] });
  var rooms = [];
  var max = 0;

  // 初始化
  var begin = S[0];
  rooms.push(begin);
  max = 1;

  for(var i = 1; i < n; i++){
    var s = S[i];

    var find = false;

    for(var j = 0, len = rooms.length; j<len; j++){
      var room = rooms[j];

      if( s[0] >= room[1] ){
        find = true;
        rooms[j] = s;
        break;
      }
    }

    if(!find) {
      rooms.push(s);
      max++;
    }
  }

  return max;
}
process.stdin.on('end', function () {
  // 按照回车来生成数组的话，数组的最后一个会有一个“空”
  __input_stdin_array = __input_stdin.split("\n");
  var len = __input_stdin_array.length;

  var res;
  var n = parseInt(__input_stdin_array[0].trim(), 10);
  // 去除第一个，和最后一个空
  var r = __input_stdin_array.slice(1, len - 1);

  res = solveMeFirst(n, r);
  process.stdout.write("" + res + "\n");

});