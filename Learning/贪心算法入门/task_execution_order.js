/**
 * Created by paper on 15/7/19.
 *
 * 任务执行顺序
 * 
 * 分析： 本题可以抽象成，从一个整数开始，每次减去a，再加上b (a,b都是正数)，
 * 要求每次操作都不产生负数。
 *
 * 
 * [输入]
 * 第 1    行：1个数N，表示任务的数量。（2 <= N <= 100000)
 * 第 2... 行：每行2个数R[i]和O[i]，分别为执行所需的空间和存储所需的空间。
 * (1 <= O[i] < R[i] <= 10000)
 * 
 * [输出]
 * 输出执行所有任务所需要的最少空间。
 * 
 * [输入示例]
 * 20
 * 14 1
 * 2 1
 * 11 3
 * 20 47 5
 * 6 5
 * 20 7
 * 19 8
 * 9 4
 * 20 10
 * 18 11
 * 12 6
 * 13 12
 * 14 9
 * 15 2
 * 16 15
 * 17 15
 * 19 13
 * 20 2
 * 20 1
 * 
 * [输出示例]
 * 135
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
 * @number 20
 * @data [ [14, 1], [2, 1], [11, 3], ...]
 */
function solveMeFirst(number, data) {
  var needSpace = 0;
  
  // 执行所需的空间和存储所需的空间的差值 集合
  var B = [];
  
  data.forEach(function(d){
    B.push(d[0] - d[1]);
  });
  
  // 从大到小排序
  B.sort(function(a, b){ return b - a});
  
  data.forEach(function(d, i){
    // 执行所需的空间
    var runSpace = d[0];

    var b = B[i];
    
    // 不是最后一个
    if(i != number - 1){
      // b 尽量大，这样才会使得 needSpace 越小
      // 因为 runSpace 的全部数据始终都会加上，这个总和是不变的
      // 所以对上面 B 进行 从大到小排序
      needSpace += runSpace - b;
    }
    // 最后一个
    else{
      // 最后一个 b 是不能减去的
      // 因为 最后一次是 x - a + b >= 0
      // 而且必须 x - a >= 0
      // 故 x 不能再小了，最后一个 b 是没有意义的
      needSpace += runSpace
    }
  });
  
  return needSpace;
}

process.stdin.on('end', function () {
  // 按照回车来生成数组的话，数组的最后一个会有一个“空”
  __input_stdin_array = __input_stdin.split("\n");
  var len = __input_stdin_array.length;

  var res;

  // 数据个数
  var number = +__input_stdin_array[0];

  // 去除第一个，和最后一个空
  // R[i] 和 O[i] 数据
  // ["14 1", "2 1", "11 3", ...]
  var data = __input_stdin_array.slice(1, len - 1);
  
  // format
  // 变成 [ [14, 1], [2, 1], [11, 3], ...]
  data.forEach(function(d, i){
    var temp = [];
    d.split(" ").forEach(function(v){
      temp.push(+v);
    });
    
    data[i] = temp;
  });

  res = solveMeFirst(number, data);
  process.stdout.write("" + res + "\n");

});

