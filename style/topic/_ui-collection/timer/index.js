/**
 * @fileOverview
 * @author yakuncyk
 * @version 15/8/18
 */

/*create by hongss on 2014.08.13 for 标题带倒计时 */
define(['fui/timer/1.0', 'lofty/alicn/now/1.0/now', 'jquery'], function (Timer, Now, $) {
    "use strict";

    $(function () {
        var timerEls = $('.mod-title-timer-20140812 .txt-timer');
        Now.now(function (time) {
            timerEls.each(function () {
                var timerEl = $(this),
                    labelEl = timerEl.siblings('.label'),
                    endTime = getDate(timerEl.data('timerdate')),
                    nowTime = (time) ? new Date(time) : new Date(),
                    toStart   = labelEl.data('toBegin'),
                    toEnd    = labelEl.data('toEnd'),
                    endText    = labelEl.data('endText'), // 倒计时结束显示的文案
                    repeat  = Number(timerEl.data('timerrepeat'));
                if (endTime > nowTime) {
                    labelEl.text(toStart);
                } else if (endTime < nowTime && repeat && !isNaN(repeat)) {
                    labelEl.text(toEnd);
                } else if (endTime < nowTime && (!repeat || isNaN(repeat))) {
                    labelEl.text('');
                    timerEl.html('<span class="over">'+endText+'</span>');
                }
                setTimer(endTime, repeat, timerEl, labelEl, toEnd);
            });
        });
    });
    function setTimer(endTime, repeat, timerEl, labelEl, text, isSecond) {
        var timer;
        Now.now(function (time) {
            var nowTime = (time) ? new Date(time) : new Date();
            if (repeat && !isNaN(repeat)) {
                endTime = getEndTime(repeat, endTime, nowTime);
            }
            if (isSecond === true) {
                labelEl.text(text);
            }
            if (endTime) {
                timer = new Timer({
                    to: endTime,
                    useServerTime: true,
                    fixInterval: false,
                    wrap: '<i>{d}</i>',
                    el: timerEl
                });
                timer.on('stop', function () {
                    if (repeat && !isNaN(repeat)) {
                        setTimer(endTime, repeat, timerEl, labelEl, text, true);
                    } else {
                        labelEl.text('');
                        timerEl.html('<span class="over">'+endText+'</span>');
                    }
                });
            }
        });
    }

    function getEndTime(repeat, endTime, nowTime) {
        if (endTime <= nowTime) {
            var endParse = Date.parse(endTime) + repeat * 60 * 60 * 1000;
            return getEndTime(repeat, new Date(endParse), nowTime);
        } else {
            return endTime;
        }
    }

    function getDate(strDate) {
        if (strDate) {
            strDate = $.trim(strDate);
            var arrTimer = strDate.split(' '),
                arrDate  = arrTimer && $.trim(arrTimer[0]).split('-'),
                arrTime  = arrTimer && $.trim(arrTimer[1]).split(':');
            if (arrDate && arrTime) {
                return new Date(arrDate[0], arrDate[1] - 1, arrDate[2], arrTime[0], arrTime[1], arrTime[2]);
            }
        }
        return false;
    }
});