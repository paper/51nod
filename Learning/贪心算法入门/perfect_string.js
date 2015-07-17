/**
 * Created by paper on 15/7/16.
 *
 * 完美字符串
 *
 * 约翰认为字符串的完美度等于它里面所有字母的完美度之和。
 * 每个字母的完美度可以由你来分配，不同字母的完美度不同，分别对应一个1-26之间的整数。
 * 约翰不在乎字母大小写。（也就是说字母F和f）的完美度相同。给定一个字符串，输出它的最大可能的完美度。
 *
 * 例如：dad，你可以将26分配给d，25分配给a，这样整个字符串完美度为77。
 * 分析：由排序不等式，出现次数最多的字母显然应该给26。
 * 所以这个题目变成了统计每种字母出现的次数了，然后按照出现次数从大到小，依次分配从高到低的权值。这就是最朴素的贪心思想。
 *
 * 最后，我们来提供输入输出数据，由你来写一段程序，实现这个算法，只有写出了正确的程序，才能继续后面的课程。
 *
 * [输入]
 * 输入一个字符串S(S的长度 <= 10000)，S中没有除字母外的其他字符。
 *
 * [输出]
 * 由你将1-26分配给不同的字母，使得字符串S的完美度最大，输出这个完美度。
 *
 * [输入示例]
 * dad
 *
 * [输出示例]
 * 77
 */

process.stdin.resume();
process.stdin.setEncoding('utf8');

var __input_stdin = "";
var __input_stdin_array = "";
var __input_currentline = 0;

process.stdin.on('data', function (data) {
  __input_stdin += data;
});

function solveMeFirst(a) {
  var result = 0;
  var r1 = a.toLocaleLowerCase().split("");
  var r2 = [];
  var m = 26;
  var obj = {};
  
  r1.forEach(function(v){
    obj[v] = obj[v] ? obj[v] + 1 : 1;
  });

  for (var i in obj) {
    r2.push(obj[i]);
  }

  r2.sort(function (a, b) {
    return b - a;
  });
  
  r2.forEach(function(v){
    result += m * v;
    m--;
  });

  return result;
}

process.stdin.on('end', function () {
  __input_stdin_array = __input_stdin.split(" ");

  var res;
  var _a = __input_stdin_array[__input_currentline].trim();

  res = solveMeFirst(_a);
  process.stdout.write("" + res + "\n");

});