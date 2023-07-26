/*
1. Have JS display the world of brick/coin/etc
2. Have Pacman move up and down
*/

var world = [
    [
        2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
        2, 2, 2, 2
    ],
    [
        2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 2
    ],
    [
        2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2,
        2, 2, 1, 2
    ],
    [
        2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2,
        2, 2, 1, 2
    ],
    [
        2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2,
        2, 2, 1, 2
    ],
    [
        2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 2
    ],
    [
        2, 1, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2,
        2, 2, 1, 2
    ],
    [
        2, 1, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2,
        2, 2, 1, 2
    ],
    [
        2, 1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 2, 2, 1, 1, 1,
        1, 1, 1, 2
    ],
    [
        2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 0, 2, 2, 0, 2, 2, 2, 2, 2, 1, 2, 2,
        2, 2, 2, 2
    ],
    [
        0, 0, 0, 0, 0, 2, 1, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 1, 2, 2,
        0, 0, 0, 0
    ],
    [
        0, 0, 0, 0, 0, 2, 1, 2, 2, 0, 2, 2, 2, 0, 0, 2, 2, 2, 0, 2, 2, 1, 2, 2,
        0, 0, 0, 0
    ],
    [
        2, 2, 2, 2, 2, 2, 1, 2, 2, 0, 2, 0, 0, 0, 0, 0, 0, 2, 0, 2, 2, 1, 2, 2,
        2, 2, 2, 2
    ],
    [
        0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 1, 0, 0,
        0, 0, 0, 0
    ],
    [
        2, 2, 2, 2, 2, 2, 1, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 1, 2, 2,
        2, 2, 2, 2
    ],
    [
        0, 0, 0, 0, 0, 2, 1, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 1, 2, 2,
        0, 0, 0, 0
    ],
    [
        0, 0, 0, 0, 0, 2, 1, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 1, 2, 2,
        0, 0, 0, 0
    ],
    [
        2, 2, 2, 2, 2, 2, 1, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 1, 2, 2,
        2, 2, 2, 2
    ],
    [
        2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 2
    ],
    [
        2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2,
        2, 2, 1, 2
    ],
    [
        2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2,
        2, 2, 1, 2
    ],
    [
        2, 1, 1, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2,
        1, 1, 1, 2
    ],
    [
        2, 2, 2, 1, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2,
        1, 2, 2, 2
    ],
    [
        2, 2, 2, 1, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2,
        1, 2, 2, 2
    ],
    [
        2, 1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 2, 2, 1, 1, 1,
        1, 1, 1, 2
    ],
    [
        2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2,
        2, 2, 1, 2
    ],
    [
        2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2,
        2, 2, 1, 2
    ],
    [
        2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 2
    ],
    [
        2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
        2, 2, 2, 2
    ]
];

var score = 0;
var coinCount = 0;
var cherryCount = 0;
var lifeCount = 3;
var pacman = {
    x: 2,
    y: 13
};
var ghost = {
    x: 9,
    y: 13
};
var cherryDisplay =
    "<div class='cherry-dark'></div><div class='cherry-dark'></div><div class='cherry-dark'></div>";
document.getElementById("cherry-count").innerHTML = cherryDisplay;
// ! DISPLAY THE WORLD
function displayWorld() {
    var output = "";

    for (var i = 0; i < world.length; i++) {
        output += "<div class='row'>";
        for (var j = 0; j < world[i].length; j++) {
            if (world[i][j] == 2) {
                output += "<div class='brick'></div>";
            } else if (world[i][j] == 1) {
                output += "<div class='coin'></div>";
            } else if (world[i][j] == 0) {
                output += "<div class='empty'></div>";
            } else if (world[i][j] == 3) {
                output += "<div id='cherry'></div>";
            } else if (world[i][j] == 4) {
                output += "<div id='ghost'></div>";
            }
        }
        output += "</div>";
    }
    document.getElementById("world").innerHTML = output;
}

// ! DISPLAY PACMAN
function displayPacman() {
    document.getElementById("pacman").style.top = pacman.y * 20 + "px";
    document.getElementById("pacman").style.left = pacman.x * 20 + "px";

    // Left & Right World Wrap
    if (pacman.y == 13 && pacman.x == 0) {
        pacman.x = 27;
        pacman.y = 13;
        document.getElementById("pacman").style.top = pacman.y * 20 + "px";
        document.getElementById("pacman").style.left = pacman.x * 20 + "px";
    } else if (pacman.y == 13 && pacman.x == 27) {
        pacman.x = 0;
        pacman.y = 13;
        document.getElementById("pacman").style.top = pacman.y * 20 + "px";
        document.getElementById("pacman").style.left = pacman.x * 20 + "px";
    }
}

var randDir = 0;

// ! DISPLAY GHOST
function displayGhost() {
    document.getElementById("ghost").style.top = ghost.y * 20 + "px";
    document.getElementById("ghost").style.left = ghost.x * 20 + "px";

    setInterval(() => {
        // ghost.y--;
        // document.getElementById("ghost").style.top = ghost.y * 20 + "px";
        // document.getElementById("ghost").style.left = ghost.x * 20 + "px";
        // if (world[ghost.y - 1][ghost.x] == 2) {
        //     if (world[ghost.y][ghost.x - 1] != 2) {
        //         ghost.x--;
        //         document.getElementById("ghost").style.top =
        //             ghost.y * 20 + "px";
        //         document.getElementById("ghost").style.left =
        //             ghost.x * 20 + "px";
        //     } else if (world[ghost.y][ghost.x + 1] != 2) {
        //         ghost.x++;
        //         document.getElementById("ghost").style.top =
        //             ghost.y * 20 + "px";
        //         document.getElementById("ghost").style.left =
        //             ghost.x * 20 + "px";
        //     } else if (world[ghost.y + 1][ghost.x] != 2) {
        //         ghost.y++;
        //         document.getElementById("ghost").style.top =
        //             ghost.y * 20 + "px";
        //         document.getElementById("ghost").style.left =
        //             ghost.x * 20 + "px";
        //     }
        // }

        randDir = Math.floor(Math.random() * 5);
        switch (randDir) {
            case 1:
                if (world[ghost.y - 1][ghost.x] != 2) {
                    ghost.y--;
                    document.getElementById("ghost").style.top =
                        ghost.y * 20 + "px";
                    document.getElementById("ghost").style.left =
                        ghost.x * 20 + "px";
                }
                break;
            case 2:
                if (world[ghost.y + 1][ghost.x] != 2) {
                    ghost.y++;
                    document.getElementById("ghost").style.top =
                        ghost.y * 20 + "px";
                    document.getElementById("ghost").style.left =
                        ghost.x * 20 + "px";
                }
                break;
            case 3:
                if (world[ghost.y][ghost.x + 1] != 2) {
                    ghost.x++;
                    document.getElementById("ghost").style.top =
                        ghost.y * 20 + "px";
                    document.getElementById("ghost").style.left =
                        ghost.x * 20 + "px";
                }
                break;
            case 4:
                if (world[ghost.y][ghost.x - 1] != 2) {
                    ghost.x--;
                    document.getElementById("ghost").style.top =
                        ghost.y * 20 + "px";
                    document.getElementById("ghost").style.left =
                        ghost.x * 20 + "px";
                }
        }
    }, 300);
}

// ! DISPLAY THE CHERRIES
function displayCherry() {
    var pos1 = false;
    var pos2 = false;
    var pos3 = false;

    // Pick 3 Random Cherry Locations
    while (pos3 == false) {
        var positionY = Math.floor(Math.random() * world.length);
        var positionX = Math.floor(Math.random() * world[positionY].length);
        if (world[positionY][positionX] == 1) {
            pos1 = true;
            world[positionY][positionX] = 3;
            while (pos2 == false) {
                var positionY = Math.floor(Math.random() * world.length);
                var positionX = Math.floor(
                    Math.random() * world[positionY].length
                );
                if (world[positionY][positionX] == 1) {
                    pos2 = true;
                    world[positionY][positionX] = 3;
                    while (pos3 == false) {
                        var positionY = Math.floor(
                            Math.random() * world.length
                        );
                        var positionX = Math.floor(
                            Math.random() * world[positionY].length
                        );
                        if (world[positionY][positionX] == 1) {
                            pos3 = true;
                            world[positionY][positionX] = 3;
                        }
                    }
                }
            }
        }
    }

    if ((pos1, pos2, pos3 == true)) {
        displayWorld();
        pos1 = false;
        pos2 = false;
        pos3 = false;
    }
}

// ! DISPLAY THE SCORE
function displayScore() {
    document.getElementById("score").innerHTML = score;
}

// ! DISPLAY THE LIFE COUNT
function displayLifeCount() {
    var lifeOutput = "";
    if (lifeCount == 3) {
        lifeOutput +=
            "<div id='pacman-life'></div><div id='pacman-life'></div><div id='pacman-life'></div>";
    } else if (lifeCount == 2) {
        lifeOutput +=
            "<div id='pacman-life'></div><div id='pacman-life'></div><div id='pacman-life-dark'></div>";
    } else if (lifeCount == 1) {
        lifeOutput +=
            "<div id='pacman-life'></div><div id='pacman-life-dark'></div><div id='pacman-life-dark'></div>";
    } else {
        lifeOutput = "";
    }
    document.getElementById("pacman-life-count").innerHTML = lifeOutput;
    displayWorld();
}

displayWorld();
displayCherry();
displayPacman();
displayScore();
displayLifeCount();
displayGhost();

// ! MOVEMENT / COLLISION DETECTION / COIN & CHERRY EATING / LIFE LOSS / GAME OVER
document.onkeydown = function (e) {
    var output = "";
    var pacmanDirection = document.getElementById("pacman");

    //* MOVEMENT & WALL COLLISION DETECTION
    if (e.key == "ArrowRight" && world[pacman.y][pacman.x + 1] != 2) {
        pacman.x++;
        pacmanDirection.style.transform = "rotate(360deg)";
    } else if (e.key == "ArrowLeft" && world[pacman.y][pacman.x - 1] != 2) {
        pacman.x--;
        pacmanDirection.style.transform = "rotate(-180deg)";
    } else if (e.key == "ArrowUp" && world[pacman.y - 1][pacman.x] != 2) {
        pacman.y--;
        pacmanDirection.style.transform = "rotate(-90deg)";
    } else if (e.key == "ArrowDown" && world[pacman.y + 1][pacman.x] != 2) {
        pacman.y++;
        pacmanDirection.style.transform = "rotate(90deg)";
    }

    //* COIN COLLECTION
    if (world[pacman.y][pacman.x] == 1) {
        world[pacman.y][pacman.x] = 0;
        score += 10;
        coinCount--;
        displayScore();
        displayWorld();
    }

    //* CHERRY COLLECTION
    if (world[pacman.y][pacman.x] == 3) {
        world[pacman.y][pacman.x] = 0;
        score += 50;
        cherryCount++;
        if (cherryCount == 3) {
            cherryDisplay =
                "<div id='cherry'></div><div id='cherry'></div><div id='cherry'></div>";
        } else if (cherryCount == 2) {
            cherryDisplay =
                "<div id='cherry'></div><div id='cherry'></div><div class='cherry-dark'></div>";
        } else if (cherryCount == 1) {
            cherryDisplay =
                "<div id='cherry'></div><div class='cherry-dark'></div><div class='cherry-dark'></div>";
        }

        document.getElementById("cherry-count").innerHTML = cherryDisplay;
        displayScore();
        displayWorld();
    }

    //* GHOST COLLISION & LOSS OF LIFE
    if (pacman.x == ghost.x && pacman.y == ghost.y) {
        // Reset Position
        pacman.x = 2;
        pacman.y = 13;
        pacmanDirection.style.transform = "rotate(360deg)";
        // Subtract a Life
        lifeCount--;
        displayPacman();
        displayLifeCount();
    }

    //* GAME OVER & RESET BUTTON
    if (lifeCount == 0) {
        document.getElementById("game-over-container").innerHTML =
            "<div id='game-over'>GAME OVER</div> <button id='reset' onclick='resetGame()'>NEW GAME</button>";
        document.getElementById("container").innerHTML =
            "<div id='world'></div>";
        displayWorld();
    }

    if (score == 2580) {
        document.getElementById("game-over-container").innerHTML =
            "<div id='game-over-win'>YOU WIN!</div> <button id='reset' onclick='resetGame()'>NEW GAME</button>";
        document.getElementById("container").innerHTML =
            "<div id='world'></div>";
        displayWorld();
    }

    displayPacman();
};

// ! GAME RESET
function resetGame() {
    document.location.reload();
}
