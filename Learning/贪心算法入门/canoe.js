/**
 * Created by paper on 15/7/18.
 * 
 * 独木舟问题
 * 
 * n个人，已知每个人体重。独木舟承重固定，每只独木舟最多坐两个人，可以坐一个人或者两个人。
 * 显然要求总重量不超过独木舟承重，假设每个人体重也不超过独木舟承重，问最少需要几只独木舟？
 * 
 * [输入]
 * 第一行包含两个正整数: 一个人数，一个独木舟承重
 * 从2行开始，就是每个人的体重
 * 
 * [输出]
 * 最少需要的独木舟数
 * 
 * [输入示例]
 * 3 6
 * 1
 * 2
 * 3
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

/**
 * 示例
 * 
 * @people 3
 * @maxWeight 6
 * @everyPeopleWeight [1, 2, 3]
 */
function solveMeFirst(people, maxWeight, everyPeopleWeight) {
  var needCanoe = 0;
  
  // 体重从大到小排序
  var r = everyPeopleWeight.sort(function(a, b){ return b - a; });
  
  // 数组的左下标 和 右下标
  var i = 0, j = people - 1;
  
  while(i <= j){
    
    // 如果相等了，就说明只剩下1个人了
    if( i == j){
      j--;
    }
    // 最重和最轻的可以上船
    else if( r[i] + r[j] <= maxWeight ){
      j--;
    }
    
    i++;
    needCanoe++;
  }
  
  return needCanoe;
}

process.stdin.on('end', function () {
  // 按照回车来生成数组的话，数组的最后一个会有一个“空”
  __input_stdin_array = __input_stdin.split("\n");
  var len = __input_stdin_array.length;

  var res;
  
  // 第一行数据
  var n1 = __input_stdin_array[0];
  
  // 人数
  var people = +n1.split(" ")[0];
  
  // 每个船最大承受的重量
  var maxWeight = +n1.split(" ")[1];
  
  // 去除第一个，和最后一个空
  // 每个人的体重
  // ["1", "2", "3"]
  var everyPeopleWeight = __input_stdin_array.slice(1, len - 1)
  
  // 变成 [1, 2, 3]
  everyPeopleWeight.forEach(function(weight, i){
    everyPeopleWeight[i] = +weight;
  });
  
  res = solveMeFirst(people, maxWeight, everyPeopleWeight);
  process.stdout.write("" + res + "\n");

});