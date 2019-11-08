"use strict";

$(document).ready(function() {


    // ------------------ MAKE ARROW INVISIBLE FUNCTION ------------------//
    let makeArrowsInvisibleForSecond = function() {
        arrowToLeft.css("opacity", "0");
        arrowToRight.css("opacity", "0");
        setTimeout(function() {
            arrowToLeft.css("opacity", "1");
            arrowToRight.css("opacity", "1");
        }, 3000);

    };


    // ------------------ SWITCH-TO-RIGHT FUNCTION ------------------//
    let switchToRight = function() {
        counter++;
        if (counter > logoHolderBar.length - 1) {
            counter = 0;
        }
    };

    // ------------------ SWITCH-TO-LEFT FUNCTION ------------------//
    let switchToLeft = function() {
        counter--;
        if (counter == -1) {
            counter = logoHolderBar.length - 1;
        }

    };

    // ------------------ MAIN PROGRAM ------------------//

    let arrowToLeft = $("#arrow-to-left");
    let arrowToRight = $("#arrow-to-right");

    let counter = 0;
    let logoHolderBar = document.querySelectorAll(".logo-holder-bar");

    let run = function() {

        makeArrowsInvisibleForSecond();

        console.log("the counter counts: " + counter);

        for (let i = 0; i < logoHolderBar.length; i++) {
            logoHolderBar[i].style.opacity = "0";
        }


        let actualLogoHolderBar = logoHolderBar[counter];
        setTimeout(function() {
            actualLogoHolderBar.style.opacity = "1";
        }, 2000);


        console.log(counter);

    };

    arrowToLeft.click(switchToLeft);
    arrowToRight.click(switchToRight);

    // $(document).ready(run);

    arrowToLeft.click(run);
    arrowToRight.click(run);



}); //END OF DOCUMENT READY FUNCTION