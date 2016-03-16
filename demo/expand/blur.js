/**
 * Created by yakuncyk on 16/2/4.
 */
//http://www.imooc.com/video/11093


// 1. 不必原形, 旋转展开
// 2. clip

var canvasWidth = 710;
var canvasHeight = 360;
var radius = 0;

var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

canvas.width = canvasWidth;
canvas.height = canvasHeight;

var image = new Image();

// 剪辑区域 原型
var clippingRegion = {x: 400, y: 200, r: radius};


//image.src = './710x360-1.png';
image.src='a.png';

image.onload = function (e) {
    initCanvas();
};


function initCanvas() {
    clippingRegion = {
        x: Math.random() * 610 + radius, // 710 - 2R
        y: Math.random() * 260 + radius, // 260 - 2R
        r: radius
    };
    draw(image, clippingRegion);
}

function setClippingRegion(clippingRegion) {
    var ctx = context;
    context.beginPath();
    // 路径是个圆型
    // 圆心 + 半径 + 圆弧的起始位置(0) + 圆弧的结束为止, 顺时针/逆时针,
    //context.arc(clippingRegion.x, clippingRegion.y, clippingRegion.r, 0, Math.PI * 2, false);

    var i = 1;


    //context.arc(355, 180, 100, 0, Math.PI/2);
    ctx.lineWidth = 10;
    ctx.moveTo(75,40);
    ctx.bezierCurveTo(75,37,70,25,50,25);
    ctx.bezierCurveTo(20,25,20,62.5,20,62.5);
    ctx.bezierCurveTo(20,80,40,102,75,120);
    ctx.bezierCurveTo(110,102,130,80,130,62.5);
    ctx.bezierCurveTo(130,62.5,130,25,100,25);
    ctx.bezierCurveTo(85,25,75,37,75,40);

    // 线段的开始处和结尾处, 不能用于连接处
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.closePath(); // 绘制封闭曲线
    //ctx.rotate((Math.PI/180)*25);

    //context.lineTo(150, 50);

    //context.arc(355, 180, 1, 0, Math.PI/2);




    // 剪辑区域
    context.clip();

    //context.restore();
}

function draw(image, clippingRegion) {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.save(); // 存储 canvas 的当前状态
    setClippingRegion(clippingRegion);
    context.drawImage(image, 0, 0);
    context.restore(); // 状态恢复
}

function show() {
    // 对角线的长度
    var intervarlId;
    intervarlId = setInterval(function () {
        clippingRegion.r += Math.random() * 50;
        if (clippingRegion.r > 1000) {
            clearInterval(intervarlId);
        }
        draw(image, clippingRegion);
    }, 30)
}

function reset() {
    initCanvas();
}