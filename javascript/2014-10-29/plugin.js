/***************************************************插件部分*************************************************/
/**
 * 轮播插件[支持渐隐和直接切换]
 * 2014-7-7 :完成添加动态banner支持
 */
function ScrollBar(settings) {
    this.leftBtn = settings.leftBtn || null;     //向左
    this.rightBtn = settings.rightBtn || null;     //向右
    this.scrollBody = settings.scrollBody; //轮播的整体区域
    this.holder = settings.holder;           //轮播的图片层
    this.indexBtn = settings.indexBtn || null;      //快捷跳转按钮
    this.indexBtnClass = settings.indexBtnClass || null;      //快捷跳转按钮class
    this._autoPlay = settings._autoPlay || false;    //是否自动播放
    this.scrollType = settings.scrollType || "opacity"; //滚动方式 默认为渐隐
    this.css3Animate = settings.css3Animate || false;
    this._init().bindEvent();
}

ScrollBar.prototype = {
    _init: function () {
        this.currentIndex = 0;  //当前轮播到第几张图
        this.targetIndex = 0;   //当前轮播图要到第几张去
        this.itemNum = this.holder.length;         //一共几张图
        this.scrollSpeed = 500;          //过渡动画速度
        if (this.css3Animate)this.checkPicLoaded(this.holder.eq(this.currentIndex).show());
        if (this._autoPlay) {   //是否自动播放
            this.autoPlayLag = 10000;     //自动播放间隔
            this.autoPlay();
        }
        return this;
    },
    bindEvent: function () {
        var self = this;
        this.leftBtn && this.leftBtn.bind("click", function () {     //左翻
            self.targetIndex--;
            if (self.targetIndex < 0)self.targetIndex = self.itemNum - 1;
            self.scroll("left");
        })
        this.rightBtn && this.rightBtn.bind("click", function () {    //右翻
            self.targetIndex++;
            if (self.targetIndex >= self.itemNum)self.targetIndex = 0;
            self.scroll("right");
        })

        this.indexBtn && this.indexBtn.bind("click", function () {     //直接跳转
            if ($(this).index() > self.targetIndex) {
                self.targetIndex = $(this).index();
                self.scroll("right");
            } else if ($(this).index() < self.targetIndex) {
                self.targetIndex = $(this).index();
                self.scroll("left");
            }
        })

        this._autoPlay && this.scrollBody.bind("mouseenter", function () {
            clearInterval(self.timer);
            self.leftBtn.show();
            self.rightBtn.show();
        }).bind("mouseleave", function () {
            self.autoPlay();
            self.leftBtn.hide();
            self.rightBtn.hide();
        })
        return this;
    },
    scroll: function (type) {
        var self = this;
        this.indexBtn.removeClass(this.indexBtnClass).eq(this.targetIndex).addClass(this.indexBtnClass)
        var $current = this.holder.eq(this.currentIndex).show();
        if (this.css3Animate)self.resetLayer($current)
        var $target = this.holder.eq(this.targetIndex).show();
        if (this.title) {
            this.title.eq(this.currentIndex).hide();
            this.title.eq(this.targetIndex).show();
        }
        if (self.css3Animate)self.checkPicLoaded($target)
        switch (this.scrollType) {
            case "opacity":
                $target.css("opacity", 0)
                $current.stop().animate({
                    opacity: 0
                }, self.scrollSpeed, function () {
                    $current.hide();
                })
                $target.stop().animate({
                    opacity: 1
                }, self.scrollSpeed, function () {
                })
                break;
        }
        this.currentIndex = this.targetIndex;
    },
    autoPlay: function () {
        var self = this;
        if (this.timer)clearInterval(this.timer)
        this.timer = setInterval(function () {
            self.targetIndex++;
            if (self.targetIndex >= self.itemNum)self.targetIndex = 0;
            self.scroll("right");
        }, self.autoPlayLag);
    },
    checkPicLoaded: function (currentLayer) {
        var self = this;
        var $animateLayer = currentLayer.children("div");
        var length = $animateLayer.length;
        var loadedNum = 0;
        for (var i = 0; i < length; i++) {
            var _img = new Image();
            _img.src = $animateLayer.eq(i).attr("data-bkg");
            _img.onload = function () {
                loadedNum++;
                if (loadedNum == length) {
                    currentLayer.css("backgroundImage", "none");
                    self.animateLayer(currentLayer);
                }
            }
        }
    },
    resetLayer: function (currentLayer) {
        var $animateLayer = currentLayer.children("div");
        $animateLayer.each(function () {
            $(this).removeClass($(this).attr("data-type"));
            if (!$(this).attr("data-isBg"))$(this).hide();
        })
    },
    animateLayer: function (currentLayer) {
        var self = this;
        var $animateLayer = currentLayer.children("div");
        var currentAnimateIndex = 0;
        var layerAry = [];
        var stepAry = [];
        $animateLayer.each(function () {
            layerAry.push($(this));
            $(this).removeClass($(this).attr("data-type"));
            var step = $(this).attr("data-delay");
            if (stepAry[step - 1]) {
                stepAry[step - 1].push($(this));
            } else {
                stepAry[step - 1] = [$(this)];
            }
        });
        clearInterval(this.animateTimer)
        this.animateTimer = setInterval(function () {
            if (stepAry[currentAnimateIndex]) {
                for (var i = 0; i < stepAry[currentAnimateIndex].length; i++) {
                    var target = stepAry[currentAnimateIndex][i];
                    target.css("backgroundImage", "url(" + target.attr("data-bkg") + ")").show().addClass(target.attr("data-type"));
                }
            }
            if (currentAnimateIndex > stepAry.length) {
                clearTimeout(self.animateTimer)
            }
            currentAnimateIndex++;
        }, 100)
    }
};


/**
 * 倒计时插件
 */
function CountDown(settings) {
    this.$day = settings.$day;
    this.$hour = settings.$hour;
    this.$min = settings.$min;
    this.$second = settings.$second || null;
    this.totalSecond = settings.totalSecond;
    this.timeCent = settings.timeCent || 1
    this.endFn = settings.endFn || null;
    this.init();
}

CountDown.prototype = {
    init: function () {
        this.refreshLag = this.$second ? 1000 : 60000;
        this.totalSecond = this.totalSecond / this.timeCent;
        if (this.totalSecond == 0 && this.endFn) {
            this.endFn();
        }
        this.getFormatTime(this.totalSecond).refreshTime().upDataTime();


    },
    getFormatTime: function (totalSecond) {
        this.timeInfo = {
            day: totalSecond / 86400 | 0,
            hour: (totalSecond % 86400) / 3600 | 0,
            minutes: (totalSecond % 3600) / 60 | 0,
            second: totalSecond % 60
        }

        return this;
    },
    upDataTime: function () {
        var self = this;
        self.timer = setInterval(function () {
            self.totalSecond -= (self.refreshLag / 1000);
            self.getFormatTime(self.totalSecond);
            self.refreshTime();
            if (self.totalSecond <= 0) {
                clearInterval(self.timer);
                self.endFn && self.endFn()
            }
        }, this.refreshLag);
        return this;
    },
    refreshTime: function () {
        this.$day && this.$day.html(this.timeInfo.day);
        this.$hour && this.$hour.html(this.timeInfo.hour);
        this.$min && this.$min.html(this.timeInfo.minutes);
        this.$second && this.$second.html(Math.max(0, this.timeInfo.second));
        return this;
    }


};

/**
 * 动态数字插件
 */
function AnimateNum(settings) {
    this.obj = settings.obj;
    this.target = settings.target.toString();
    this.totalTime = settings.totalTime || 1000;
    this.init();
}

AnimateNum.prototype = {
    init: function () {
        if (!this.target)return false;
        this.animation();
    },
    animation: function () {
        var self = this;
        var fixIndex = this.target.indexOf("."); //小数点索引
        var fixLength = 0;  //小数点后有几位
        if (fixIndex >= 0) {
            fixLength = this.target.length - fixIndex - 1;
        }
        var target = this.target.replace("\.", "");
        var totalStep = (this.totalTime / 30) | 0;
        var stepLength = target / totalStep | 0;
        var currentStep = 0;
        var currentNum = 0;
        self.timer = setInterval(function () {
            currentStep++;
            currentNum += stepLength
            self.obj.html(currentNum / Math.pow(10, fixLength));
            if (currentStep >= totalStep) {
                clearInterval(self.timer);
                self.obj.html(self.target);
            }
        }, 30);
    }
}

/**
 *手风琴插件
 */
function Accordion(settings) {
    this.$item = settings.$item;
    this.speed = settings.speed || 400;
    this.currentClass = settings.currentClass || "";
    this.posiAry = [];
    this.disX = 0;
    this.init().bindEvent();
}

Accordion.prototype = {
    init: function () {
        var _this = this;
        _this.itemLength = _this.$item.length;
        for (var i = 0; i < _this.itemLength; i++) {
            _this.posiAry.push(parseInt(_this.$item.eq(i).css("left")));
        }
        _this.disX = _this.posiAry[2] - _this.posiAry[1];

        return _this;
    },
    bindEvent: function () {
        var _this = this;
        _this.$item.bind("mouseenter", function () {
            $(this).addClass(_this.currentClass).siblings().removeClass(_this.currentClass);
            for (var i = 0; i < _this.itemLength; i++) {
                if (i > $(this).index()) {
                    _this.$item.eq(i).stop().animate({
                        left: _this.posiAry[i] + "px"
                    }, _this.speed)
                } else {
                    _this.$item.eq(i).stop().animate({
                        left: i * _this.disX + "px"
                    }, _this.speed)
                }
            }
        })
    }
}

/*****************************************************工具函数部分*******************************************************/
/**
 * 判断浏览器是否支持css3动画
 */

function getCss3Animation() {
    var testDiv = document.createElement("div");
    var css3AnimateSupport = false;
    if ("oninput" in testDiv) {
        ["", "ms", "webkit"].forEach(function (prefix) {
            var css3Animate = prefix + (prefix ? "A" : "a") + "nimation";
            if (css3Animate in testDiv.style) {
                css3AnimateSupport = true;
            }
        });
    }
    return css3AnimateSupport;
}







