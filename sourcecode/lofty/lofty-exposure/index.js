/**
 * @module lofty-exposure
 * @author chuanpeng.qchp
 * @date 20140424
 *
 */

var Class = require('lofty-class');
var Base = require('lofty-base');
var $ = require('jquery');

'use strict';
var Exposure = Class(Base, {
    options: {
        container: {
            value: 'body',
            getter: function(s) {
                if ('string' === typeof s) {
                    s = $(s);
                }
                return s;
            }
        },
        target: null,
        overflowContainer: null,
        onlyTop: false,
        onlyOnce: true,
        threshold: 200,
        timecell: 100
    },
    init: function(config) {
        Base.prototype.init.call(this, config || {});
        this._onlyOnce = this.get('onlyOnce');

        group.call(this);
        bindEvent.call(this);
    },
    execute: function() {
        run.call(this);
    },
    collectResouce: function(resource) {
        refreshGroup.call(this, $(resource));
        run.call(this);
    },

    destroy: function() {
        if (this.scrollTimeoutId) {
            clearTimeout(this.scrollTimeoutId);
        }
        if (this.resizeTimeoutId) {
            clearTimeout(this.resizeTimeoutId);
        }
        $(window).off("scroll." + getCurrentGuid.call(this));
        $(window).off("resize." + getCurrentGuid.call(this));
        this._hasBindEvent = false;
        this.constructor.superclass.destroy.call(this);
    }

});

function bindWinEvent() {
    if (this._hasBindEvent) {
        return;
    }
    this._hasBindEvent = true;
    var self = this,
        timecell = this.get('timecell');
    $(window).on("scroll." + getCurrentGuid.call(this), function() {
        if (self.scrollTimeoutId) {
            clearTimeout(self.scrollTimeoutId);
        }
        self.scrollTimeoutId = setTimeout(function() {
            run.call(self);
        }, timecell);
    });
    $(window).on("resize." + getCurrentGuid.call(this), function() {
        if (self.resizeTimeoutId) {
            clearTimeout(self.resizeTimeoutId);
        }
        self.resizeTimeoutId = setTimeout(function() {
            run.call(self);
        }, timecell);
    });
}

function bindEvent() {
    bindWinEvent.call(this);

    if (this._groupArr) {
        bindOverflowScroll.call(this, 0);
    }
}

function unBindEvent() {
    $(window).off("scroll." + getCurrentGuid.call(this));
    $(window).off("resize." + getCurrentGuid.call(this));
    this._hasBindEvent = false;
}

function bindEvery(index) {
    this._allUnbind = false;
    bindWinEvent.call(this);
    if (this._overflowScrollBind[index]) {
        return;
    }
    var self = this;
    $(this._overflowContainerArr[index]).on("scroll." + getCurrentGuid.call(this), function() {
        run.call(self, index);
    })
    this._overflowScrollBind[index] = true;
}

function bindOverflowScroll(startIndex) {
    for (var i = startIndex, ofSize = this._overflowContainerArr.length; i < ofSize; i++) {
        bindEvery.call(this, i)
    }
}

var exposureCount = 1;

function getCurrentGuid() {
    if (!this._guid) {
        this._guid = '_exposure_' + exposureCount++;
    }
    return this._guid;
}

function commonRun(tarArr, tarLastStateArr) {
    if (!tarArr.length) {
        return;
    }
    calBaseVal.call(this);
    var docTop = this._currentScrollTop + this._viewportHeight,
        docLeft = this._currentScrollLeft + this._viewportWidth,
        threshold = this.get('threshold');
    for (var i = 0; i < tarArr.length;) {
        var $item = $(tarArr[i]);

        var itemOffset = $item.offset(),
            itemOffsetTop = itemOffset.top,
            itemOffsetLeft = itemOffset.left,
            itemHeight = $item.outerHeight(),
            itemWidth = $item.outerWidth();

        var isBottomExp;
        if (this.get('onlyTop')) {
            isBottomExp = true;
        } else {
            isBottomExp = itemOffsetTop + itemHeight + threshold > this._currentScrollTop;
        }
        if (
            itemOffsetTop <= docTop + threshold &&
            isBottomExp &&
            itemOffsetLeft <= docLeft + threshold &&
            itemOffsetLeft + itemWidth + threshold > this._currentScrollLeft
        ) {
            if (this._onlyOnce) {
                this.trigger('exposure', $item);
                tarArr.splice(i, 1);
            } else {
                if (!tarLastStateArr[i]) {
                    this.trigger('exposure', $item);
                }
                if (itemOffsetTop >= this._currentScrollTop &&
                    itemOffsetTop + itemHeight <= docTop
                ) {
                    if (tarLastStateArr[i] != 2) {
                        tarLastStateArr[i] = 2;
                        this.trigger('completeShow', $item);
                    }
                } else {
                    if (tarLastStateArr[i] != 1) {
                        tarLastStateArr[i] = 1;
                        this.trigger('partShow', $item);
                    }
                }
                i++;
            }

        } else {
            if (!this._onlyOnce && tarLastStateArr[i]) {
                tarLastStateArr[i] = 0;
                this.trigger('hide', $item);
            }
            i++;
        }
    }

}

function unbindOverflowEvent(index) {
    if (!this._overflowScrollBind[index]) {
        return;
    }
    $(this._overflowContainerArr[index]).off("scroll." + getCurrentGuid.call(this));
    this._overflowScrollBind[index] = false;
    this._allUnbind = true;
    for (var i = 0; i < this._overflowScrollBind.length; i++) {
        if (this._overflowScrollBind[i]) {
            this._allUnbind = false;
            break;
        }
    }
    if (this._allUnbind) {
        if (this._groupArr.length > this._overflowContainerArr.length &&
            !this._groupArr[this._groupArr.length - 1].length ||
            this._groupArr.length == this._overflowContainerArr.length) {
            unBindEvent.call(this);
        }
    }
}

function runIndex(index) {
    if (!this._groupArr[index].length) {
        unbindOverflowEvent.call(this, index);
        return;
    }
    var ofCtn = this._overflowContainerArr[index];

    var docTop = this._currentScrollTop + this._viewportHeight,
        docLeft = this._currentScrollLeft + this._viewportWidth,
        threshold = this.get('threshold'),
        ofCtnOffset = $(ofCtn).offset(),
        ofCtnBorderLeft = parseInt($(ofCtn).css('borderLeftWidth'), 10) || 0,
        ofCtnpaddingLeft = parseInt($(ofCtn).css('paddingLeft'), 10),
        ofCtnBorderTop = parseInt($(ofCtn).css('borderTopWidth'), 10) || 0,
        ofCtnpaddingTop = parseInt($(ofCtn).css('paddingTop'), 10),
        ofCtnOffsetTop = ofCtnOffset.top + ofCtnBorderTop + ofCtnpaddingTop,
        ofCtnOffsetLeft = ofCtnOffset.left + ofCtnBorderLeft + ofCtnpaddingLeft,
        ofCtnHeight = $(ofCtn).innerHeight(),
        ofCtnWidth = $(ofCtn).innerWidth();

    if (
        ofCtnOffsetTop <= docTop &&
        ofCtnOffsetTop + ofCtnHeight > this._currentScrollTop &&
        ofCtnOffsetLeft <= docLeft &&
        ofCtnOffsetLeft + ofCtnWidth > this._currentScrollLeft
    ) {
        var baseTop = Math.max(ofCtnOffsetTop, this._currentScrollTop),
            baseLeft = Math.max(ofCtnOffsetLeft, this._currentScrollLeft),
            baseRight = Math.min(docLeft, ofCtnOffsetLeft + ofCtnWidth),
            basebottom = Math.min(docTop, ofCtnOffsetTop + ofCtnHeight);
        var targetArr = this._groupArr[index], targetStateArr;
        if (!this._onlyOnce) {
            targetStateArr = this._groupStateArr[index];
        }
        for (var i = 0; i < targetArr.length;) {
            var $item = $(targetArr[i]);

            var itemOffset = $item.offset(),
                itemOffsetTop = itemOffset.top,
                itemOffsetLeft = itemOffset.left,
                itemHeight = $item.outerHeight(),
                itemWidth = $item.outerWidth();

            var isBottomExp;
            if (this.get('onlyTop')) {
                isBottomExp = true;
            } else {
                isBottomExp = itemOffsetTop + itemHeight + threshold > baseTop;
            }

            if (
                itemOffsetTop <= basebottom + threshold &&
                isBottomExp &&
                itemOffsetLeft <= baseRight + threshold &&
                itemOffsetLeft + itemWidth + threshold > baseLeft
            ) {
                if (!this._onlyOnce) {
                    if (!targetStateArr[i]) {
                        this.trigger('exposure', $item);
                    }
                    if (itemOffsetTop >= baseTop &&
                        itemOffsetTop + itemHeight <= basebottom
                    ) {
                        if (targetStateArr[i] != 2) {
                            targetStateArr[i] = 2;
                            this.trigger('completeShow', $item);
                        }
                    } else {
                        if (targetStateArr[i] != 1) {
                            targetStateArr[i] = 1;
                            this.trigger('partShow', $item);
                        }
                    }
                    i++;
                } else {
                    this.trigger('exposure', $item);
                    targetArr.splice(i, 1);
                }
            } else {
                if (!this._onlyOnce) {
                    if (targetStateArr[i]) {
                        targetStateArr[i] = 0;
                        this.trigger('hide', $item);
                    }
                }
                i++;
            }
        }
    }
}

function groupRun(groupIndex) {

    calBaseVal.call(this);
    if (groupIndex !== undefined) {
        runIndex.call(this, groupIndex)
        return;
    }
    for (var i = 0, size = this._overflowContainerArr.length; i < size; i++) {
        runIndex.call(this, i);
    }
    var groupSize = this._groupArr.length;
    if (this._overflowContainerArr.length < groupSize) {
        if (!this._onlyOnce) {
            commonRun.call(this, this._groupArr[groupSize - 1], this._groupStateArr[groupSize - 1]);
        } else {
            commonRun.call(this, this._groupArr[groupSize - 1]);
        }
        if (!this._groupArr[groupSize - 1].length && this._allUnbind) {
            unBindEvent.call(this);
        }
    }
}

function calBaseVal() {
    this._currentScrollTop = $(document).scrollTop(),
        this._currentScrollLeft = $(document).scrollLeft(),
        this._viewportWidth = $(window).width(),
        this._viewportHeight = $(window).height();
}

function run(groupIndex) {
    if (this._targetArr) {
        commonRun.call(this, this._targetArr, this._targetLastStateArr);
        if (!this._targetArr.length) {
            unBindEvent.call(this);
        }
    } else {
        groupRun.call(this, groupIndex);
    }
}

function refreshGroup($resource) {
    var $resource = this.get('container').find($resource);
    var resourceArr = $resource.toArray();

    if (this.get('overflowContainer')) {
        var newOverflowContainerArr = [];
        var newTargetArr = [];
        var $ofctns = $(this.get('overflowContainer'));
        var $targets = $(this.get('target'));
        for (var i = 0, count = resourceArr.length; i < count; i++) {
            //??overflowContainer
            if ($(resourceArr[i]).is($ofctns)) {
                newOverflowContainerArr.push(resourceArr[i])

            } else {
                var innerOverflow = $(resourceArr[i]).find(this.get('overflowContainer')).toArray();
                if (innerOverflow.length) {
                    newOverflowContainerArr = newOverflowContainerArr.concat(innerOverflow);
                }
            }
            //??target
            if ($(resourceArr[i]).is($targets)) {
                newTargetArr.push(resourceArr[i])
            }
            var innerTarget = $(resourceArr[i]).find(this.get('target')).toArray();
            newTargetArr = newTargetArr.concat(innerTarget);
        }
        var lastGroup = [], lastGroupState;
        var origOverSize = this._overflowContainerArr.length;
        if (origOverSize < this._groupArr.length) {
            var l = this._groupArr.length - 1;
            lastGroup = this._groupArr[l];
            this._groupArr.length = l;
            if (!this._onlyOnce) {
                lastGroupState = this._groupStateArr[l];
                this._groupStateArr.length = l;
            }

        }

        this._overflowContainerArr = this._overflowContainerArr.concat(newOverflowContainerArr);
        for (var j = 0, size = newOverflowContainerArr.length; j < size; j++) {
            this._overflowScrollBind.push(false);
            this._groupArr.push([]);
            if (!this._onlyOnce) {
                this._groupStateArr.push([]);
            }
        }
        for (var m = 0, newTarSize = newTargetArr.length; m < newTarSize; m++) {
            var hasfind = false;
            for (var n = 0, overflowSize = this._overflowContainerArr.length; n < overflowSize; n++) {
                if ($(this._overflowContainerArr[n]).find(newTargetArr[m]).length) {
                    this._groupArr[n].push(newTargetArr[m]);
                    if (!this._onlyOnce) {
                        this._groupStateArr[n].push(0);
                    }
                    bindEvery.call(this, n);
                    hasfind = true;
                    break;
                }
            }
            if (!hasfind) {
                lastGroup.push(newTargetArr[m]);
                if (!this._onlyOnce) {
                    lastGroupState.push(0);
                }
            }
        }
        if (lastGroup.length) {
            this._groupArr.push(lastGroup);
            if (!this._onlyOnce) {
                this._groupStateArr.push(lastGroupState);
            }
            bindWinEvent.call(this);
        }

    } else {
        var newTargetArr = [];
        var $targets = $(this.get('target'));
        for (var i = 0, count = resourceArr.length; i < count; i++) {
            //target
            if ($(resourceArr[i]).is($targets)) {
                newTargetArr.push(resourceArr[i])
            }
            var innerTarget = $(resourceArr[i]).find(this.get('target')).toArray();
            newTargetArr = newTargetArr.concat(innerTarget);
        }
        this._targetArr = this._targetArr.concat(newTargetArr);
        if (!this._onlyOnce) {
            var len = newTargetArr.length;
            for (var i = 0; i < len; i++) {
                this._targetLastStateArr.push(0);
            }
        }

        if (this._targetArr.length) {
            bindEvent.call(this);
        }

    }
}

function group() {
    if (this.get('overflowContainer')) {
        this._overflowContainerArr = this.get('container').find(this.get('overflowContainer')).toArray();
        this._overflowScrollBind = [];
        this._allUnbind = true;
        this._groupArr = [];
        if (!this._onlyOnce) {
            this._groupStateArr = [];
        }
        var targetArr = this.get('container').find(this.get('target')).toArray();
        var everyGroup, remainTargetArr, everyGroupState;
        for (var i = 0, count = this._overflowContainerArr.length; i < count; i++) {
            this._overflowScrollBind.push(false);
            everyGroup = [];
            everyGroupState = [];
            remainTargetArr = [];
            for (var j = 0, targetCount = targetArr.length; j < targetCount; j++) {
                if ($(this._overflowContainerArr[i]).find($(targetArr[j])).length) {
                    everyGroup.push(targetArr[j]);
                    if (!this._onlyOnce) {
                        everyGroupState.push(0);
                    }
                } else {
                    remainTargetArr.push(targetArr[j]);
                }
            }
            this._groupArr.push(everyGroup);
            if (!this._onlyOnce) {
                this._groupStateArr.push(everyGroupState);
            }
            targetArr = remainTargetArr;
            everyGroup = null;
            remainTargetArr = null;
        }
        if (targetArr.length) {
            this._groupArr.push(targetArr);
            if (!this._onlyOnce) {
                var tArr = [];
                for (var idx = 0, len = targetArr.length; idx < len; idx++) {
                    tArr.push(0);
                }
                this._groupStateArr.push(tArr);
            }
        }
    } else {
        this._targetArr = this.get('container').find(this.get('target')).toArray();
        if (!this._onlyOnce) {
            var len = this._targetArr.length;
            this._targetLastStateArr = new Array(len);
            for (var i = 0; i < len; i++) {
                this._targetLastStateArr[i] = 0;
            }
        }

    }
}

module.exports = Exposure;