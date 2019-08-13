(function() {
    "use strict";

    var $elBtnGetChar = $("#btnGetChar"),
        $elDivLeftCol = $("#divLeftCol"),
        $elDivRightCol = $("#divRightCol");

    var fileConnection = new XMLHttpRequest();

    function fnGetChar() {
        console.log("fnGetChar() STARTS");

        fileConnection.open("GET", "characters.json", true);
        fileConnection.send(null);

        fileConnection.onload = function() {
            var charObj = JSON.parse(fileConnection.responseText);
            var randomChar = Math.floor(Math.random() * charObj.allChars.length);
            var strName = "",
                strStats = "";

            console.log(charObj);
            
            strName += `<p><img src='./img/${charObj.allChars[randomChar].graphic}'></p>`;
            strName += `<p>${charObj.allChars[randomChar].name}</p>`;
            $elDivLeftCol.html(strName).hide().fadeIn(2000);

            strStats += `<p>Origin: ${charObj.allChars[randomChar].origin}</p>`;
            strStats += `<p>Powers:<br>
                        <ul>
                        <li>${charObj.allChars[randomChar].powers[0].p1}</li>
                        <li>${charObj.allChars[randomChar].powers[0].p2}</li>
                        </ul>
                        </p>`;
            
            $elDivRightCol.html(strStats).hide().delay(250).fadeIn(1750);
        }; // END onload (after successful connection to the file)
    } // END fnGetChar()

    $elBtnGetChar.on("click", fnGetChar);
}());