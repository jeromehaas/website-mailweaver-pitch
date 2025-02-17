
$(document).ready(function() {

    // ------------------ FUNCTION TO FORMAT THE INPUT ------------------//

    function separator(number) {
        number = '' + number;
        if (number.length > 3) {
            var mod = number.length % 3;
            var output = (mod > 0 ? (number.substring(0,mod)) : '');
            for (i=0 ; i < Math.floor(number.length / 3); i++) {
                if ((mod == 0) && (i == 0))
                    output += number.substring(mod+ 3 * i, mod + 3 * i + 3);
                else
                    output+= '\'' + number.substring(mod + 3 * i, mod + 3 * i + 3);
            }
            return (output);
        }
        else return number;
    }

    // ------------------ MAIN PROGRAM ------------------//

    let rangeInput = $("input[type='range']");
    let rangeOutput = $("#range-output");

    rangeInput.change(function() {

        let inputValue = rangeInput.val();
        let formattedValue = separator(inputValue);

        rangeOutput.text(formattedValue);

    }).trigger('change');






});
