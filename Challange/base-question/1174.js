/**
 * Created by paper on 15/7/21.
 *
 * 1174 区间中最大的数
 *
 * 给出一个有N个数的序列，编号0 - N - 1。进行Q次查询，查询编号i至j的所有数中，最大的数是多少。
 * 例如: 1 7 6 3 1。i = 1, j = 3，对应的数为7 6 3，最大的数为7。（该问题也被称为RMQ问题）
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
 *
 */
function solveMeFirst(n, r, q, qr) {
  var result = [];

  // 记录r值和下标的对应关系
  var r2 = [];

  r.forEach(function (v, i) {
    r2.push([v, i]);
  });

  // 按照值从大到小排序
  r2.sort(function (a, b) {
    return b[0] - a[0];
  });

  qr.forEach(function (v) {
    var i = v[0];
    var j = v[1];

    // 根据区间，查找r2
    // 如果找到了（肯定是这个区间的最大值），就立即返回
    for (var k = 0; k < n; k++) {
      var index = r2[k][1];

      if (index >= i && index <= j) {
        result.push(r2[k][0]);
        break;
      }
    }

  });

  return result.join("\n");
}

process.stdin.on('end', function () {
  // 按照回车来生成数组的话，数组的最后一个会有一个“空”
  __input_stdin_array = __input_stdin.split("\n");
  var len = __input_stdin_array.length;

  var res;

  // 表示序列的长度
  var n = +__input_stdin_array[0];

  // 序列中的元素
  // ["1", "7", "6", "3", "1"]
  var r = __input_stdin_array.slice(1, n + 1);

  // 变成 [1, 7, 6, 3, 1]
  r.forEach(function (v, i) {
    r[i] = +v;
  });

  // 查询的数量
  var q = +__input_stdin_array[n + 1];

  // 每行2个数，对应查询的起始编号i和结束编号j。(0 <= i <= j <= N - 1)
  // ["0 1", "1 3", "3 4"]
  // 去除最后一个空
  var qr = __input_stdin_array.slice(n + 2, len - 1);

  // 变成 [[0, 1], [1, 3], [3, 4]]
  qr.forEach(function (d, i) {
    var temp = [];
    d.split(" ").forEach(function (v) {
      temp.push(+v);
    });

    qr[i] = temp;
  });

  res = solveMeFirst(n, r, q, qr);
  process.stdout.write("" + res + "\n");

});