/**
 * Created by cyk on 15/10/25.
 */

define(
    'queue-animation',
    [
        'jquery',
        'velocity',
        'animTypes',
        'utils'
    ],
    function (jQ, velocity, animTypes, utils) {
        'use strict';

        // 常量配置
        var BackEase = {
            easeInBack: [0.6, -0.28, 0.735, 0.045],
            easeOutBack: [0.175, 0.885, 0.32, 1.275],
            easeInOutBack: [0.68, -0.55, 0.265, 1.55]
        };

        // 组件默认配置
        var setting = {
            isLocked: false
        };

        /**
         * @param el 元素选择器
         * @constructor
         */
        var QueueAnim = function (el) {
            this.keysToEnter = [];
            this.keysToLeave = [];
            this.keysAnimating = [];

            // 第一次进入，默认进场
            var children = toArrayChildren(getChildren(el));
            /**
             * QueueAnim 元素的子元素必须要有 key 属性
             */
            children.forEach(child => {
                if (!child || !child.key) {
                    return;
                }
                this.keysToEnter.push(child.key);
            });

            this.originalChildren = toArrayChildren(getChildrenFromProps(this.props));

            this.state = {
                children,
                childrenShow: {}
            };

            [
                'performEnter',
                'performLeave',
                'enterBegin',
                'leaveComplete',
            ].forEach((method) => this[method] = this[method].bind(this));
        };

        QueueAnim.prototype = {
            init: function () {
                init();
                bindEvents();
            }
            
        };

        return QueueAnim;

    }
);