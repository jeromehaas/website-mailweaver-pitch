"use strict";

$(document).ready(function() {

   let createBubbles = function() {

       //------------------- GET WIDTH OF THE WINDOW -------------------//
       let getWidth = function() {
           let windowWidth = $(window).width();
           return windowWidth;
       };

       $(window).resize(getWidth);
       $(document).ready(getWidth);

       //------------------- GET HEIGHT OF THE WINDOW -------------------//
        let getHeight = function() {
            let windowHeight = $(window).height();
            return windowHeight;
        };

        $(window).resize(getHeight);
        $(document).ready(getHeight);

       //------------------- CREATE A RANDOM POSITION FOR THE X AXIS -------------------//
       let generateRandomPosition = function(min, max) {
           let randomNumber = Math.random() * (max - min) + min;
           return randomNumber;
       };

       //------------------- CREATE A RANDOM DELAY FOR THE BUBBLE -------------------//
        let generateRandomDelay = function(min, max) {
            let randomDelay = Math.random() * (max - min) + min;
            return randomDelay;
        };

       //------------------- CREATE A RANDOM COLOR FOR THE BUBBLE -------------------//
        let generateRandomColor = function() {
            let colors = ["#009190", "#ffca0d"];
            let randomColor = colors[Math.floor(Math.random() * colors.length)];
            return randomColor;
        };

       //------------------- CREATE A RANDOM SIZE FOR THE BUBBLE -------------------//
        let generateRandomSize = function() {
            let sizes = ["34px", "24px", "14px"];
            let randomSize = sizes[Math.floor(Math.random() * sizes.length)];
            return randomSize;
        };

       //------------------- MAIN PROGRAM -------------------//

        let screenWidth = getWidth();
        let marginBetweenBubbles = Math.round(screenWidth / 60);

        for (let i = 0; i < marginBetweenBubbles; i++) {

            let individualPosition = Math.round(generateRandomPosition(50, (screenWidth - 50)));
            let individualColor = generateRandomColor();
            let individualSize = generateRandomSize();
            let individualDelay = generateRandomDelay(-60, 60) + "s";

            $(".bubble-holder").append("<figure class='bubble'></figure>");
            let bubble = document.querySelectorAll(".bubble");
            bubble[i].style.right = individualPosition + "px";
            bubble[i].style.backgroundColor = individualColor;
            bubble[i].style.height = individualSize;
            bubble[i].style.width = individualSize;
            bubble[i].style.animationDelay = individualDelay;

            if (bubble[i].style.height == "34px") {

                bubble[i].style.animationDuration = "40s";

            } else if (bubble[i].style.height == "24px") {

                bubble[i].style.animationDuration = "50s";

            } else if (bubble[i].style.height == "14px") {

                bubble[i].style.animationDuration = "60s";

            } else {

            };



        }





   } // ----> END OF CREATE BUBBLE FUNCTION


    $(window).ready(createBubbles);
    $(window).resize(createBubbles);

});


