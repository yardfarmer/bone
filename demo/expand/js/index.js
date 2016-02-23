window.onload = function () {
    var canvas  = document.getElementById('canvas'),
        context = canvas.getContext('2d'),
        colors  = {
            bg: "#a4bf47",
            grey: "#54595b",
            red_bg: "#d25444",
            red_darken: "#c14c3e",
            red_lighten: "#fdcdca",
            white: "#FFFFFF"
        };

    var positions = {
        bg_size: 0,
        drink_y: -550,
        paille_y: -550,
        anim_finished: false,
        end_time: 0
    };

    var i = 0;

    function render() {
        //console.log(i++);

        // White scene
        context.beginPath();
        context.moveTo(0, 0);
        context.lineTo(0, 544);
        context.lineTo(544, 544);
        context.lineTo(544, 0);
        context.fillStyle = colors.white;
        context.fill();

        // Background
        context.beginPath();
        context.fillStyle = colors.bg;
        context.arc(544 / 2, 544 / 2, positions.bg_size, Math.PI * 2, false);
        context.fill();

        // Paille Îü¹Ü
        context.beginPath();
        context.moveTo(370, 80 + positions.paille_y);
        context.lineTo(320, 80 + positions.paille_y);
        context.lineTo(250, 300 + positions.paille_y);
        context.lineTo(265, 300 + positions.paille_y);
        context.lineTo(330, 95 + positions.paille_y);
        context.lineTo(370, 95 + positions.paille_y);
        context.fillStyle = colors.grey;
        context.fill();

        // Top drink  ±­¸Ç
        context.beginPath();
        context.moveTo(165, 155 + positions.drink_y);
        context.lineTo(380, 155 + positions.drink_y);
        context.lineTo(380, 175 + positions.drink_y);
        context.lineTo(165, 175 + positions.drink_y);
        context.globalAlpha = 0.5;
        context.fillStyle = colors.white;
        context.fill();

        // Reset opacity
        context.globalAlpha = 1;
        // Drink  ±­Éí
        context.beginPath();
        context.moveTo(175, 175 + positions.drink_y);
        context.lineTo(370, 175 + positions.drink_y);
        context.lineTo(340, 440 + positions.drink_y);
        context.lineTo(205, 440 + positions.drink_y);
        context.fillStyle = colors.red_bg;
        context.fill();

        // Shadow
        context.beginPath();
        context.moveTo(325, 175 + positions.drink_y);
        context.lineTo(370, 175 + positions.drink_y);
        context.lineTo(340, 440 + positions.drink_y);
        context.lineTo(300, 440 + positions.drink_y);
        context.fillStyle = colors.red_darken;
        context.fill();


        /* LIGHT
         -------*/

        context.beginPath();
        context.moveTo(220, 175 + positions.drink_y);
        context.quadraticCurveTo(280, 300 + positions.drink_y, 260, 440 + positions.drink_y);
        context.lineTo(205, 440 + positions.drink_y);
        context.quadraticCurveTo(230, 300 + positions.drink_y, 190, 175 + positions.drink_y);
        context.fillStyle = colors.red_lighten;
        context.fill();

        if (positions.anim_finished == true) {
            positions = {
                bg_size: 0,
                drink_y: -550,
                paille_y: -550,
                anim_finished: false,
                end_time: 0
            };
        }

        if (positions.bg_size < 272) {
            positions.bg_size += 4;
        }

        if (positions.drink_y <= 0 && positions.bg_size >= 150) {
            positions.drink_y += 10;
        }

        if (positions.drink_y >= -50 && positions.paille_y <= 0) {
            positions.paille_y += 15;
        }

        if (positions.paille_y >= 0) {
            if (positions.end_time >= 100) {
                positions.anim_finished = true;
            }
            positions.end_time++;
        }

    }

    /* REQUEST ANIMATION FRAME 
     -------------------------*/

    window.requestAnimFrame = (function () {
        return window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            function (callback) {
                window.setTimeout(callback, 1000 / 60);
            };
    })();

    requestAnimFrame(loop);

    function loop() {
        requestAnimFrame(loop);
        render();
    };

};