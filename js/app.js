$(function() {
    'use strict';

    //Fade the title in and out on hover
    $('#title').hover(function() {
        $(this).velocity(
            {opacity: 0, color: '#2B9AE8'},
            {loop: 1}, 10000
        );
    });

    //Randomly generate an integer between two numbers
    function r (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    var box = $('#animateBox');

    //get browser window height/width
    var count;
    var snowflakeHtml = '';
    var snow;
    var width = $(window).width();
    var height = $(window).height();

    var translateZMin = -725,
        translateZMax = 600;

    var containerAnimationMap = {
        perspective: [ 215, 50 ],
        opacity: [ 0.90, 0.55 ]
    };

    //to display
    count = width/50;
    for (var i = 0; i < count; i++) {
        //Icons made by Icon Works www.flaticon.com
        snowflakeHtml += "<div class='snowflake'><img src='img/christmas234.png'/></div>";
        snowflakeHtml += "<div class='snowflake'><img src='img/snow42.png'/></div>";
        snowflakeHtml += "<div class='snowflake'><img src='img/snow260.png'/></div>";
        snowflakeHtml += "<div class='snowflake'><img src='img/snow266.png'/></div>";
        snowflakeHtml += "<div class='snowflake'><img src='img/snowflake1.png'/></div>";
        snowflakeHtml += "<div class='snowflake'><img src='img/snowflake144.png'/></div>";
    }
    snow = $(snowflakeHtml);

    //Animation
    snow
        .velocity({
            translateX: [
                function() { return "+=" + r(-width/2.5, width/2.5) },
                function() { return r(0, width) }
            ],
            translateY: [
                function() { return "+=" + r(-height/2.75, height/2.75) },
                function() { return r(0, height) }
            ],
            translateZ: [
                function() { return "+=" + r(translateZMin, translateZMax) },
                function() { return r(translateZMin, translateZMax) }
            ],
            opacity: [
                function() { return Math.random() },
                function() { return Math.random() + 0.1 }
            ]
        }, { duration: 7000 })
        .velocity("reverse", { easing: "easeOutQuad", loop: true })
        //.velocity({ opacity: 0 }, { duration: 2000, complete: function() {
            //Show octocat and move off screen
            //$('#centered')
            //    .html('<img src="https://octodex.github.com/images/jetpacktocat.png" alt="jetoctocat" width="50%"/>')
            //    .velocity({ opacity: 0.9 }, { duration: 3000, display: "block" })
            //    .velocity({width: '80%', translateX: '100%'}, {display:"none"}, "easeout");
            //Show octocat with ice cream
            //$('#end')
            //    .html('<img src="https://octodex.github.com/images/cherryontop-o-cat.png" alt="octocat" width="80%"/>')
            //    .velocity({opacity: 0.8}, {duration: 3500, display: "block", delay: 4500}, "easeInSine")
        //}

        //})

        .appendTo(box);

});


