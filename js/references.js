"use strict";

$(document).ready(function() {

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // SET UP THE REFERENCES
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    let references = [
        {
            bericht: "Unsere Wünsche und Anliegen wurden kundennah berücksichtigt. Die hohe Zufriedenheit der Mitarbeitenden, die den Tragekomfort loben, bestätigt den Entscheid, die Arcmedia AG als Partner zu wählen.",
            name: "Max Müller",
            firma: "Example GmbH"
        } , {
            bericht: "Wir fühlten uns bereits bei der Erstberatung komplett verstanden, denn wir konnten problemlos unsere sehr individuellen Bedürfnisse anbringen und nachhaltig abdecken.",
            name: "Heinz Heiniger",
            firma: "Muster AG"
        }, {
            bericht: "Spannend war, dass wir beim Dessin mitbestimmen konnten. Ausserdem legten wir Wert auf einen Schweizer Lieferanten. Das garantiert uns auch die langjährige Nachlieferung",
            name: "Lukas Limacher",
            firma: "Leinziker GmbH"
        }
    ];


    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // CREATE AS MANY CAROUSEL POINT AS WE HAVE REFERENCES
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    for(let i = 0; i < references.length; i++) {
        let referenzSwitcher = $(".referenz-switcher");
        let carouselPoint = document.createElement("div");
        carouselPoint.setAttribute("id", "carousel-point-" + i);
        carouselPoint.setAttribute("class", "carousel-point");
        referenzSwitcher.append(carouselPoint);
    }


    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // DEFINE VARIABLES
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    let counter = 2;
    let amountOfReferences = references.length;
    let carouselIcons = $(".carousel-icon");
    let placeholderReference = $("#referenz-bericht");
    let placeholderName = $("#referenz-quelle-name");
    let placeholderFirma = $("#referenz-quelle-firma");

    placeholderReference.text(references[0].bericht);
    placeholderName.text(references[0].name);
    placeholderFirma.text(references[0].firma);


    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // MAIN FUNCTION
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    let changeReference = function() {

        counter++;

        if(counter >= amountOfReferences) {
            counter = 0;
        }
        
        $(".carousel-point").css("backgroundImage", "url('../media/icons/carousel_unchecked.png')");
        placeholderReference.css("opacity", "1");
        placeholderName.css("opacity", "1");
        placeholderFirma.css("opacity", "1");



        setTimeout(function() {
            placeholderReference.css("opacity", "0");
            placeholderName.css("opacity", "0");
            placeholderFirma.css("opacity", "0");
        }, 5500);



        placeholderReference.text(references[counter].bericht);
        placeholderName.text(references[counter].name);
        placeholderFirma.text(references[counter].firma);




        $("#carousel-point-" + counter).css("backgroundImage", "url('../media/icons/carousel_checked.png')");





    };


setInterval(changeReference, 8000);







});
