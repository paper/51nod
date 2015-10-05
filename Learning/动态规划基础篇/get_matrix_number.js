/**
    Created by paper on 15/8/3.
    
    一个N*N矩阵中有不同的正整数，经过这个格子，就能获得相应价值的奖励，
    从左上走到右下，只能向下向右走，求能够获得的最大价值。
    例如：3 * 3的方格。

    1 3 3
    2 1 3
    2 2 1

    能够获得的最大价值为：11。

    [输入]
    第1行：N，N为矩阵的大小。(2 <= N <= 500)
    第2 - N + 1行：每行N个数，中间用空格隔开，对应格子中奖励的价值。（1 <= N[i] <= 10000)

    [输出]
    输出能够获得的最大价值。

    [输入示例]
    3
    1 3 3
    2 1 3
    2 2 1

    [输出示例]
    11
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
    var N = __input_stdin_array[0].trim();

    // 去除第一个，和最后一个空
    var r = __input_stdin_array.slice(1, len - 1);


    // 格式化r
    var r2 = [];
    r.forEach(function(v){
        var temp = [];

        v.split(" ").forEach(function(x){
            temp.push(+x);
        });

        r2.push( temp );
    });


    var t1 = +new Date();
    res = solveMeFirst(N, r2);
    process.stdout.write("" + res + "\n");
    var t2 = +new Date();

    console.log("time: ", t2 - t1);

});

// @N 3
// @r [ [ 1, 3, 3 ], [ 2, 1, 3 ], [ 2, 2, 1 ] ]
function solveMeFirst(N, r) {

    // 动态规划，一般都要使用缓存，这样速度会快很多
    var cache = [];
    for(var i = 0; i<=N; i++){
        cache[i] = [];
    }

    function fn(x, y){
        if(cache[x][y]){
            return cache[x][y];
        }

        if(x === 0 || y === 0) return -99999;
        if(x === 1 && y === 1) return r[0][0];

        var result = Math.max( fn(x-1, y), fn(x, y-1) ) + r[x-1][y-1];

        cache[x][y] = result;

        return result;
    }

    return fn(N, N);
}



