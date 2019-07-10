// IIFE - (Iffy)
(function () {
    "use strict";

    var maxStats = 6,
        maxStatsValue = 7;

    var heroNames = ["Spider-Man", "Daredevil", "Squirrel Girl"],
        heroStrength = [],
        heroSpeed = [],
        heroAgility = [],
        heroStamina = [],
        heroDurability = [],
        heroIntelligence = [],

        heroNamesLength = heroNames.length,
        heroAll = [],
        heroAllLength = heroAll.length,
        heroImage = [
            // "https://vmcink.files.wordpress.com/2016/10/spiderman.png",
            // "https://vmcink.files.wordpress.com/2016/10/daredevil.png",
            // "https://vmcink.files.wordpress.com/2016/10/squirrelgirl.png",
            "images/spiderman.png",
            "images/daredevil.png",
            "images/squirrelgirl.png",
        ];

    for (var i = 0; i < maxStats; i++) {
        var tempHeroStrength = Math.ceil(Math.random() * maxStatsValue),
            tempHeroSpeed = Math.ceil(Math.random() * maxStatsValue),
            tempHeroAgility = Math.ceil(Math.random() * maxStatsValue),
            tempHeroStamina = Math.ceil(Math.random() * maxStatsValue),
            tempHeroDurability = Math.ceil(Math.random() * maxStatsValue),
            tempHeroIntelligence = Math.ceil(Math.random() * maxStatsValue);

        heroStrength.push(tempHeroStrength);
        heroSpeed.push(tempHeroSpeed);
        heroAgility.push(tempHeroAgility);
        heroStamina.push(tempHeroStamina);
        heroDurability.push(tempHeroDurability);
        heroIntelligence.push(tempHeroIntelligence);
    } // End For Loop, Hero Powers

    var villainNames = ["Venom", "Kingpin", "Black Cat"],
        villainStrength = [],
        villainSpeed = [],
        villainAgility = [],
        villainStamina = [],
        villainDurability = [],
        villainIntelligence = [],

        villainNamesLength = villainNames.length,
        villainAll = [],
        villainAllLength = villainAll.length,
        villainImage = [
            // "https://vmcink.files.wordpress.com/2016/10/venom.png",
            // "https://vmcink.files.wordpress.com/2016/10/kingpin.png",
            // "https://vmcink.files.wordpress.com/2016/10/blackcat.png"
            "images/venom.png",
            "images/kingpin.png",
            "images/blackcat.png",
        ];

    for (var i = 0; i < maxStats; i++) {
        var tempVillainStrength = Math.ceil(Math.random() * maxStatsValue),
            tempVillainSpeed = Math.ceil(Math.random() * maxStatsValue),
            tempVillainAgility = Math.ceil(Math.random() * maxStatsValue),
            tempVillainStamina = Math.ceil(Math.random() * maxStatsValue),
            tempVillainDurability = Math.ceil(Math.random() * maxStatsValue),
            tempVillainIntelligence = Math.ceil(Math.random() * maxStatsValue);

        villainStrength.push(tempVillainStrength);
        villainSpeed.push(tempVillainSpeed);
        villainAgility.push(tempVillainAgility);
        villainStamina.push(tempVillainStamina);
        villainDurability.push(tempVillainDurability);
        villainIntelligence.push(tempVillainIntelligence);
    } // End For Loop, Vilain Powers

    function SuperCharacter(name, strength, speed, agility, stamina, durability, intelligence, image) {
        this.name = name;
        this.strength = strength;
        this.speed = speed;
        this.agility = agility;
        this.stamina = stamina;
        this.durability = durability;
        this.intelligence = intelligence;
        this.image = image;

        this.power = function () {
            var allPower = this.strength + this.speed + this.agility +
                this.stamina + this.durability + this.intelligence;
            return allPower;
        } // End of power() Object

        this.stats = function () {
            var allStats = "<ul>"
                + "<li>Strength: " + this.strength + "</li>"
                + "<li>Speed: " + this.speed + "</li>"
                + "<li>Agility: " + this.agility + "</li>"
                + "<li>Stamina: " + this.stamina + "</li>"
                + "<li>Durability: " + this.durability + "</li>"
                + "<li>Intelligence: " + this.intelligence + "</li>"
            "</ul>";
            return allStats;
        } // End stat()
    } // End SuperCharacter() Object

    for (var i = 0; i < heroNamesLength; i++) {
        var aHero = new SuperCharacter(
            heroNames[i],
            heroStrength[i],
            heroSpeed[i],
            heroAgility[i],
            heroStamina[i],
            heroDurability[i],
            heroIntelligence[i],
            heroImage[i],
        );
        heroAll.push(aHero);
    } // End Hero Creation For Loop

    for (var i = 0; i < villainNamesLength; i++) {
        var aVillain = new SuperCharacter(
            villainNames[i],
            villainStrength[i],
            villainSpeed[i],
            villainAgility[i],
            villainStamina[i],
            villainDurability[i],
            villainIntelligence[i],
            villainImage[i],
        );
        villainAll.push(aVillain);
    } // End Villain Creation For Loop

    // console.log("All Heroes: " + heroAll);
    // console.log("All Villains: " + villainAll);

    // console.log("Hero: " + heroAll[0].name + heroAll[2].power());
    // console.log("Villains: " + villainAll[0].name + villainAll[2].power());

    heroAllLength = heroAll.length;
    villainAllLength = villainAll.length;

    var elBtnFight = document.getElementById("btnFight"),
        elDivShowFight = document.getElementById("divShowFight"),
        elDivLeftCol = document.getElementById("divLeftCol"),
        elDivRightCol = document.getElementById("divRightCol"),
        elDivCenterCol = document.getElementById("divCenterCol"),
        elUlAll = document.getElementsByTagName("ul"),
        elImgAll = document.getElementsByTagName("img");

    elBtnFight.addEventListener("click", fnFight, false);

    function fnFight() {
        var randomHero = Math.floor(Math.random() * heroAllLength),
            randomVillain = Math.floor(Math.random() * villainAllLength);

        console.log("Hero: " + heroAll[randomHero].name + heroAll[randomHero].power());
        console.log("Villains: " + villainAll[randomVillain].name + villainAll[randomVillain].power());

        if (heroAll[randomHero].power() === villainAll[randomVillain].power()) {
            console.log("It's a tie!");

            elDivLeftCol.innerHTML = "<h2>" + heroAll[randomHero].name + "</h2>";
            elDivLeftCol.innerHTML += "<img src='" + heroAll[randomHero].image + "'>";
            elDivLeftCol.innerHTML += "<p>" + heroAll[randomHero].stats() + "</p>";            
            elImgAll[0].className = "imageHeight";
            elUlAll[0].className = "textAlign";

            elDivRightCol.innerHTML = "<h2>" + villainAll[randomVillain].name + "</h2>";
            elDivRightCol.innerHTML += "<img src='" + villainAll[randomVillain].image + "'>";
            elDivRightCol.innerHTML += "<p>" + villainAll[randomVillain].stats() + "</p>";
            elImgAll[1].className = "imageHeight";
            elUlAll[1].className = "textAlign";

            elDivCenterCol.innerHTML = "<h3>A tie!</h3>";
            elDivCenterCol.className = "fightTie";
        } else if (heroAll[randomHero].power() > villainAll[randomVillain].power()) {
            console.log("Hero Wins.");

            elDivLeftCol.innerHTML = "<h2>" + heroAll[randomHero].name + "</h2>";
            elDivLeftCol.innerHTML += "<img src='" + heroAll[randomHero].image + "'>";
            elDivLeftCol.innerHTML += "<p>" + heroAll[randomHero].stats() + "</p>";
            elImgAll[0].className = "imageHeight";
            elUlAll[0].className = "textAlign";

            elDivRightCol.innerHTML = "<h2>" + villainAll[randomVillain].name + "</h2>";
            elDivRightCol.innerHTML += "<img src='" + villainAll[randomVillain].image + "'>";
            elDivRightCol.innerHTML += "<p>" + villainAll[randomVillain].stats() + "</p>";
            elImgAll[1].className = "imageHeight";
            elUlAll[1].className = "textAlign";

            elDivCenterCol.innerHTML = "<h3>Hero Win!</h3>";
            elDivCenterCol.className = "fightWin";
        } else {
            console.log("Hero Lost!");

            elDivLeftCol.innerHTML = "<h2>" + heroAll[randomHero].name + "</h2>";
            elDivLeftCol.innerHTML += "<img src='" + heroAll[randomHero].image + "'>";
            elDivLeftCol.innerHTML += "<p>" + heroAll[randomHero].stats() + "</p>";
            elImgAll[0].className = "imageHeight";
            elUlAll[0].className = "textAlign";

            elDivRightCol.innerHTML = "<h2>" + villainAll[randomVillain].name + "</h2>";
            elDivRightCol.innerHTML += "<img src='" + villainAll[randomVillain].image + "'>";
            elDivRightCol.innerHTML += "<p>" + villainAll[randomVillain].stats() + "</p>";
            elImgAll[1].className = "imageHeight";
            elUlAll[1].className = "textAlign";

            elDivCenterCol.innerHTML = "<h3>Hero Loses!</h3>";
            elDivCenterCol.className = "fightLose";
        }; // End fnFight()
    }
}());