var user = {
    username: "Ye Tun Aung",
    password: "yta1968"
};

var database = [
    user,
    {
        username: "Thura Ye Tun",
        password: "tyyt2001"
    },
    {
        username: "Maythansin Ye Tun",
        password: "mpk2006"
    },
    {
        username: "Hla Hla Win",
        password: "hhw1968"
    },
];

var newsFeed = [
    {
        username: "Thura",
        timeline: "So tired from all that learning!"
    },
    {
        username: "PuKywe",
        timeline: "Scratch is so cool!",
    },
    {
        username: "Ye Tun Aung",
        timeline: "JavaScript is pretty cool!",
    },
    {
        username: "Hla Hla Win",
        timeline: "Head is a little difficult.",
    }
];

var userNamePrompt = prompt("What's your user name?");
var passwordPrompt = prompt("What's your password?");

function isUserValid(username, password) {
    for (var i = 0; i < database.length; i++) {
        if (database[i].username === username &&
            database[i].password === password) {
            return true;
        }    
    }
    return false;
}

function signIn(username, password) {
    // console.log(isUserValid(username, password));
    if (isUserValid(username, password)) {
            console.log(newsFeed);
        for (i=0; i<newsFeed.length; i++) {
            document.write(`<h2>${newsFeed[i].username}</h2>`);
            document.write(`<p>${newsFeed[i].timeline}</p>`);
        }
        
        } else {
            // alert("Sorry, wrong username and password!");
            document.write("Sorry, wrong username and password!");
        }
}

signIn(userNamePrompt, passwordPrompt);
