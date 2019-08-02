// Immediately-Invoked Function Expression to prevent naming conflicts
// http://benalman.com/news/2010/11/immediately-invoked-function-expression/
(function() {
    // Use the JavaScript Strict Mode
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
    "use strict";

    // Define JavaScript Objects for various HTML Nodes
    var elSwForm = document.getElementById("swForm"),
        elBtnGo = document.getElementById("btnGo"),
        elBtnClear = document.getElementById("btnClear"),
        elErrorMsg = document.getElementById("errorMsg"),
        elNameYou = document.getElementById("nameYou"),
        elNameDroid = document.getElementById("nameDroid"),
        elNameType = document.getElementById("nameType"),
        elDroidPic = document.getElementById("droidPic");
    
    // Define Arrays to hold the Droid Types and Droid Pictures
    var droidType = ["Astromech", "Battle", "Interrogation",
                    "Medical", "Protocol", "Scout"],
        droidPic = ["astromech.png", "battle.png", "interrogation.png",
                    "medical.png", "protocol.png", "scout.png"];

    // Function to clear the Form and perform other cleanup actions
    function fnClearForm() {
        elSwForm.reset();
    }

    // Function that collects Input, Processes it, and displays Output
    function fnGo() {
        // Store the values typed into the Input Fields
        var valInFirst = document.getElementById("inFirst").value,
            valInLast = document.getElementById("inLast").value,
            valInDOB = document.getElementById("inDOB").value;
        
        // if...else Conditional Statement to check if the Input Fields are NOT empty
        if((valInFirst !== "") && (valInLast !== "") && (valInDOB !== "")) {
            // Hide the Error Message Div if NO errors
            elErrorMsg.style.display = "none";

            // Generate a Random Number based on the number of Droid Types
            var randomDroid = Math.floor(Math.random() * droidType.length);

            // Display the First and Last Names the User input
            elNameYou.innerHTML = "Your Real Name: " + valInFirst + " " + valInLast;
            // Using the fnDroidNameGen() Function, display a Droid Name
            elNameDroid.innerHTML = "Your Droid Name: " +
                                    fnDroidNameGen(valInFirst, valInLast, valInDOB);
            
            // Check if a Droid Name requires "A" or "An" grammer
            // "An" grammer needed for Droid Types of 0 and 2
            if((randomDroid === 0) || (randomDroid === 1)) {
                // Display the Droid Type based on the Random Number
                elNameType.innerHTML = "You are an " + droidType[randomDroid] + "Droid.";
                // Display the Droid Picture in the empty <img>
                elDroidPic.src = droidPic[randomDroid];
            } else {
                // "A" grammer needed for Droid Types 1, 3, 4, and 5
                // Display the Droid Type based on the Random Number
                elNameType.innerHTML = "You are a " + droidType[randomDroid] + "Droid.";
                // Display the Droid Picture in the empty <img>
                elDroidPic.src = droidPic[randomDroid];
            }
            // Clear the Form so a User can generate a new Droid Name
            fnClearForm();
        } else {
            // or Else the Input Fields ARE empty, so display an Error Message
            elErrorMsg.innerHTML = "Please enter all fields!";
            // Show the Error Message Div if YES errors
            elErrorMsg.style.display = "block";
            // Clear the Form so a User can generate a new Droid Name
            fnClearForm();
        }
    } // END of fnGo() function

    // Function to Generate a Droid Name based on User's First Name, Last Name, and DOB
    function fnDroidNameGen(n1, n2, dob) {
        // Starting at the 5 position and going to the 7th, slice the Month portion
        // of the Date input, then convert it to an Integer, and save it to a Variable
        var no = parseInt(dob.slice(5, 7), 10);
        // Create a Variable to hold the current Droid Name
        var myDroid = "";

        // If the Date provided is NOT in the format 1968-06-12, it's Not a Number, so...
        if(isNaN(no)) {
            // ...generate a Random Number, rounded up, based on 12 months
            no = Math.ceil(Math.random() * 12);
            // Display the Random (Month) Number in the Developer Console
            console.log(no);
        }

        // Based on the User's Month, choose a Droid Name Scheme.
        // Works by Slicing portions of the User's First/Last Names.
        // appending dashes and Months, and converting the characters toUpperCase()
        switch (no) {
            case 1:
                console.log("BT-1");
                myDroid = n1.slice(0, 2).toUpperCase() + "-" + no;
                break;
            
            case 2:
                console.log("R2-D2");
                myDroid = n1.slice(0, 1).toUpperCase() + no +
                        "-" + n2.slice(0, 1).toUpperCase() + no;
                break;
            
            case 3:
                console.log("C-3PO");
                myDroid = n1.slice(0, 1).toUpperCase() + "-"
                        + no + n2.slice(0, 2).toUpperCase();
                break;

            case 4:
                console.log("4-LOM");
                myDroid = no + "-" + n1.slice(0, 1).toUpperCase() +
                        n2.slice(0,2).toUpperCase();
                break;

            case 5:
                console.log("R5-G8");
                myDroid = n1.slice(0, 1).toUpperCase() + no +
                        "-" + n2.slice(0, 1).toUpperCase() + "8";
                break;

            case 6:
                console.log("BT-1");
                myDroid = n1.slice(0, 2).toUpperCase() + "-" + no;
                break;
            
            case 7:
                console.log("BT-1");
                myDroid = n1.slice(0, 2).toUpperCase() + "-" + no;
                break;

            case 8:
                console.log("IG-88");
                myDroid = n1.slice(0, 2).toUpperCase() + "-" + no + no;
                break;

            case 9:
                console.log("EV-9D9");
                myDroid = n1.slice(0, 1).toUpperCase() + n2.slice(0, 1).toUpperCase() + "-" + no + "D" + no;
                break;

            case 10:
                console.log("C1-10P");
                myDroid = n1.slice(0, 1).toUpperCase() + "1-" +
                        no + n2.slice(0, 1).toUpperCase();
                break;

            case 11:
                console.log("B11");
                myDroid = n1.slice(0, 1).toUpperCase() + no;
                break;

            case 12:
                console.log("K-2SO");
                myDroid = n1.slice(0, 1).toUpperCase() +
                        "-2" + n2.slice(0, 2).toUpperCase();
                break;            
        
            default:
                console.log("0-0-0");
                myDroid = no + "-" + no + "-" + no;
                break;
        }
        // Return the Generated Droid Name
        return myDroid;
    } // END of fnDroidNameGen() function

    // Event Handlers
    // When the Go Button is clicked, run the fnGo() function
    elBtnGo.addEventListener("click", fnGo, false);
    // When th Cleaqr Button is clicked, run the fnClearForm() function
    elBtnClear.addEventListener("click", fnClearForm, false);    
}());
