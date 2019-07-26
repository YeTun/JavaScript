(function(){
"use strict";

var nameReal = "",
    nameHero = "",
    superPower = "",
    superOrigin = "",

    elFormHero = document.getElementById("formHero"),
    elSuperOrigin = document.getElementById("inSuperOrigin"),
    elCharDisplay = document.getElementById("charsLeft"),
    elShowResult = document.getElementById("divResult"),    

    allHeroes = [],
    maxChars = 140,

    elBtnSave = document.getElementById("btnSave"),
    elBtnReset = document.getElementById("btnReset"),
    elBtnShow = document.getElementById("btnShow");

elCharDisplay.textContent = maxChars;

function SuperHero(nameReal, nameHero, superPower, superOrigin) {
    this.nameReal = nameReal;
    this.nameHero = nameHero;
    this.superPower = superPower;
    this.superOrigin = superOrigin;

    this.info = function() {
        var heroInfo = "Real name: " + this.nameReal +
                       " Hero name: " + this.nameHero +
                       " Super Power: " + this.superPower +
                       " Origin: " + this.superOrigin;
        return heroInfo;
    }
} // END SuperHero() Constructor

function fnSaveName() {
    nameReal = document.getElementById("inRealName").value;
    nameHero = document.getElementById("inHeroName").value;
    superPower = document.getElementById("inSuperPower").value;
    superOrigin = document.getElementById("inSuperOrigin").value;

    if(localStorage.allHeroes === "" || localStorage.allHeroes === null || localStorage.allHeroes === undefined) {
        // if a super hero was never saved
        if(nameReal && nameHero && superPower && superOrigin) {
            // ready to save a hero
            var aHero = new SuperHero(nameReal, nameHero, superPower, superOrigin);

            // Create fnClearForm() function
            fnClearForm();

            allHeroes.push(aHero);
            localStorage.allHeroes = JSON.stringify(allHeroes);

            elShowResult.textContent = "Saved!";
        } else {
            // else, one or more fields are empty
            elShowResult.textContent = "Please enter all fields.";
        } // END if..else checking if all filels are filled in
    } else {
        // else a super hero WAS saved
        if(nameReal && nameHero && superPower && superOrigin) {
            // Yes, all fields filled in.
            // So retrieve any saved Heroes, then add a new hero, then save again.
            var allHeroesTemp = JSON.parse(localStorage.allHeroes);
            var aHero = new SuperHero(nameReal, nameHero, superPower, superOrigin)

            // Create fnClearForm() function
            fnClearForm()

            allHeroesTemp.push(aHero);
            localStorage.allHeroes = JSON.stringify(allHeroesTemp);

            elShowResult.textContent = "Saved!";
        } else {
            // No, not fields were filled in 
            elShowResult.textContent = "Please enter all fields.";
        } // END if..else check if all fields are filled in
    } // END if..else checking if we have never saved to localStorage
} // END fnSaveName()

function fnClearForm() {
    document.getElementById("inRealName").value = "";
    document.getElementById("inHeroName").value = "";
    document.getElementById("inSuperPower").value = "";
    document.getElementById("inSuperOrigin").value = "";

    elSuperOrigin.disbaled = false;
    elCharDisplay.textContent = maxChars;
} // END fnClearForm()

function fnCharCount() {
    var textEntered,
        counter,
        lastKey;
    
    textEntered = document.getElementById("inSuperOrigin").value;
    counter = maxChars - textEntered.length;
    elCharDisplay.textContent = counter;

    if(counter <= 0) {
        elSuperOrigin.disbaled = true;
    }
} // END fnCharCount()

function fnChangeForm(e) {
    if(e.keyCode == 13) {
        fnSaveName()
    }
} // END fnChangeForm()

function fnShowName() {
    if(localStorage.allHeroes === "" || localStorage.allHeroes === null || localStorage.allHeroes === undefined) {
        // No names to display
    } else {
        // else, yes, names to display
        var allHeroesArray = JSON.parse(localStorage.allHeroes);
        var str = "<table class='tableStyle'><tr><th>Real Name</th><th>Hero Name</th><th>Power</th><th>Origin</th></tr>"

        for(var i = 0; i < allHeroesArray.length; i++) {
            str += "<tr><td>" + allHeroesArray[i].nameReal + 
                   "</td><td>" + allHeroesArray[i].nameHero + 
                   "</td><td>" + allHeroesArray[i].superPower +
                   "</td><td>" + allHeroesArray[i].superOrigin +"</td></tr>";
        }
        str += "</table>";
        elShowResult.innerHTML = str;
    } // END if..else checking to display names or not
} // END fnShowName()

elSuperOrigin.addEventListener("keydown", fnCharCount, false);
elFormHero.addEventListener("keydown", fnChangeForm, false);
elBtnSave.addEventListener("click", fnSaveName, false);
elBtnShow.addEventListener("click", fnShowName, false);
}()); 
