/**
 * @module lofty-datalazyload
 * @author chuanpeng.qchp
 * @date 20140505
 *
 */

var Class = require('lofty-class');
var Base = require('lofty-base');
var Exposure = require('lofty-exposure');
var WebP = require('lofty-webp');

'use strict';
var DataLazyload = Class(Base, {
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
        overflowContainer: null,
        imgSrcName: 'lazy-src',
        lazyAreaCls: 'lazy-area',
        webp: true,
        threshold: 200
    },

    init: function(config) {
        Base.prototype.init.call(this, config || {});
        var cf = {
            container: this.get('container'),
            target: 'img[' + this.get('imgSrcName') + '],.' + this.get('lazyAreaCls'),
            overflowContainer: this.get('overflowContainer'),
            threshold: this.get('threshold')
        };
        this._exposObj = new Exposure(cf);
        var self = this;
        this._exposObj.on('exposure', function(o) {
            var el = $(o);
            if (el.is($('img'))) {
                var src = el.attr(self.get('imgSrcName'));
                if (src) {
                    el.one('load', function() {
                        $(this).css('zoom', 1);
                    });
                    if (self.get('webp')) {
                        replaceSrc(el, src);
                    } else {
                        el.attr('src', src);
                    }
                    el.removeAttr(self.get('imgSrcName'));
                }
            } else {
                var lazyEl = $(el.html());
                if (lazyEl.filter('script').length) {
                    lazyEl = $(lazyEl.html());
                }
                if (!lazyEl.length) {
                    return;
                }
                el.replaceWith(lazyEl);
                self._exposObj.collectResouce(lazyEl);
            }

        })
        this._exposObj.execute();
    },
    execute: function() {
        this._exposObj.execute();
    },
    collectResouce: function(resource) {
        this._exposObj.collectResouce(resource);
    },
    destroy: function() {
        this._exposObj.destroy();
    }
});

function replaceSrc(el, src) {
    WebP.convertSrc(src, function(webpSrc) {
        el.attr('src', webpSrc);
    });
}

module.exports = DataLazyload;