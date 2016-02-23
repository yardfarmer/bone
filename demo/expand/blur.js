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
image.src='https://cbu01.alicdn.com/cms/upload/2016/054/755/2557450_2093447082.png?710x360';

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
    context.beginPath();
    // 路径是个圆型
    // 圆心 + 半径 + 圆弧的起始位置(0) + 圆弧的结束为止, 顺时针/逆时针,
    context.arc(clippingRegion.x, clippingRegion.y, clippingRegion.r, 0, Math.PI * 2, false);
    // 剪辑区域
    context.clip();
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