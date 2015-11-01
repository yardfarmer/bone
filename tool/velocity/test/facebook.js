/**
 * Created by cyk on 15/10/27.
 */

var s,
    portraitsGrid = {

        settings: {
            unit: $('.unit'),
            steps: $('.steps'),
            btn: $('.btn'),
            transitionGridIn: "fadeIn",
            transitionGridOut: "fadeOut",
            transitionTitlesIn: "transition.flipYIn",
            transitionTitlesOut: "transition.flipYOut"
        },

        init: function(options) {
            this.settings = $.extend(this.settings, options);
            s = this.settings;
            // 加载肖像
            this.loadPortraits();
            // 绑定事件
            this.initEvents();
        },

        loadPortraits: function() {
            var genero = ["fff000", "34d3a3", "971a3c", "8a7a8d"];
            s.unit.find('img').each(function(i) {
                // nice
                var rand = genero[Math.floor(Math.random() * genero.length)];
                $(this).attr('src', '//dummyimage.com/200x100/'+ rand +'&text=' + Math.floor(Math.random()*100));
            });
            s.unit.last().find('img').one('load', function() {
                portraitsGrid.sequenceInOut(
                    500,
                    s.transitionGridIn,
                    false,
                    800,
                    2700,
                    s.transitionTitlesIn,
                    2500);
            });
        },

        initEvents: function() {
            s.btn.on('click', function(e) {
                e.preventDefault();
                portraitsGrid.sequenceInOut(0, s.transitionGridOut, true, 200, 0, s.transitionTitlesOut, 1800);
                setTimeout(function() {
                    portraitsGrid.sequenceInOut(500, s.transitionGridIn, false, 800, 2700, s.transitionTitlesIn, 2500);
                }, 3800);
            });
        },

        /**
         *
         * @param delaygrid
         * @param easegrid
         * @param backgrid: Set the backwards option to true to animate starting with the last element in a set.
         * @param durationgrid
         * @param delaytext
         * @param easetext
         * @param durationtext
         */
        sequenceInOut: function(delaygrid, easegrid, backgrid, durationgrid, delaytext, easetext, durationtext) {
            s.unit.delay(delaygrid).velocity(easegrid, {
                stagger: 55,
                duration: durationgrid,
                //动画顺序,正着来还是倒着来
                backwards: backgrid,
                drag: true
            });
            s.steps.delay(delaytext).velocity(easetext, {
                duration: durationtext,
                backwards: backgrid,
                drag: true
            });
        }

    };

$(function() {
    portraitsGrid.init({
        transitionGridIn: "transition.flipYIn",
        transitionGridOut: "transition.flipYOut"
    });
});