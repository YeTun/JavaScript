(function() {
    "use strict";

    // Create an Object of Divs on-screen
    var elDivShowNewBand = document.getElementById("divShowNewBand");

    // Create an Object of the Button on-screen
    var elBtnMakeName = document.getElementById("btnMakeName");
    
    function fnGenerateNames() {
        let msg = "Clicked!"
        console.log(msg);
        elDivShowNewBand.innerHTML = msg;
    }

    // Event Listener, to make the Button work.
    elBtnMakeName.addEventListener("click", fnGenerateNames, false);
}());