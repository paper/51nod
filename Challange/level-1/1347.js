/**
 * Created by paper on 15/7/21.
 *
 * 1347 旋转字符串
 *
 * S[0...n-1]是一个长度为n的字符串，定义旋转函数Left(S)=S[1…n-1]+S[0].
 * 比如S=”abcd”,Left(S)=”bcda”.
 *
 * 一个串是对串当且仅当这个串长度为偶数，前半段和后半段一样。
 * 比如”abcabc”是对串,”aabbcc”则不是。
 *
 * 现在问题是给定一个字符串，判断他是否可以由一个对串旋转任意次得到。
 *
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

  // 序列中的元素, 去除最后一个空
  // ["aa", "bb"]
  var r = __input_stdin_array.slice(0, len - 1);

  res = solveMeFirst(r);
  process.stdout.write("" + res + "\n");

});

function isDoubleStr(str) {
  var len = str.length;

  if (len % 2 != 0) return false;

  var leftStr = str.slice(0, len / 2);
  var rightStr = str.slice(len / 2);

  return leftStr == rightStr;
}

//function makeStrLeft(str){
//  if(str.length == 1) return str;
//  
//  return str.slice(1) + str.charAt(0);
//}

/**
 *
 */
function solveMeFirst(r) {
  var result = [];

  r.forEach(function (str) {

    var s = isDoubleStr(str) ? "YES" : "NO";
    result.push(s);

  });

  return result.join("\n");
}




