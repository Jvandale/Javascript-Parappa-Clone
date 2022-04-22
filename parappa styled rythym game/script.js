// initialize canvas

let cnv = document.getElementById("background");
let ctx = cnv.getContext("2d");


cnv.width = 800;
cnv.height = 400;

document.addEventListener("keydown", input)


// variables
var Debug = false;
let GameState = "Menu"

let x = 105
let points = 0
let totalPoints = 0
let lastPoints = 0
var plus = 3;
var backhit = 0;
var teach = 0;

var rank = 8;
let rank1 = "grey"
let rank2 = "white"
let rank3 = "grey"
let rank4 = "grey"
var cool = false;
var CoolPoints = 90;
var rankChange = 0;
let CRank

var buttonhit = false;
var buttonC = "lime"
let Pdifference = 0;
var Lp = 0;
let Pattern = 00;
let TPattern = 00;
let TButton = 0;
var Line = 0;

var dot = {
    Y: 45,
    X: 145,
    S: 5
}

var P1 = {
    X: x,
    Y: 37,
    S: 25,
    mx: 5
}


var bullet = {
    X: P1.X + 8,
    Y: 45
}

var Groove = []
var TeachGroove = []
var Line = []
var TeachLine = []
var objects = [];
var taps = [];
var times = 0;
var miss = 0


let Y = 45


// functions


function draw() {
    this.x = P1.X + 8;
    this.y = P1.Y + 2;

    this.draw = function () {
        ctx.fillStyle = "lime";
        ctx.fillRect(this.x + this.y, 45, 10, 10);
    }
}




function buttons() {

    let Z = 145

    let Pink = 0.1

    let Green = 0.2

    let Red = 0.3

    let Blue = 0.4

    // Local Variables to Calculate patterns
    let A = 0

    var B = 0

    var C = 0 

    for (n = 0; n <= 19; n++) {

        let Assign = Math.random();

        if (A < 3) {
            if (Assign < Pink) {
                var tap = {

                    type: "purple",

                    x: Z,

                    y: 54,
                }



                
                

                teach++
                taps.push(tap);
            } else if (Assign < Green) {
                var tap = {

                    type: "green",

                    x: Z,

                    y: 54,


                }

                

                teach++
                taps.push(tap);
            } else if (Assign < Red) {
                var tap = {

                    type: "darkred",

                    x: Z,

                    y: 54,
                }


               

                teach++
                taps.push(tap);
            } else if (Assign < Blue) {
                var tap = {

                    type: "darkblue",

                    x: Z,

                    y: 54,
                }

                

                teach++
                taps.push(tap);
            } else {

            }
            
            
        
        
        } else {


            A = 0
            Z += 25
        }       

        Z += 25

        
    }


    console.log(TeachLine)
}


// creates object as well as register input
function input(event) {

    if (event.code == "KeyZ") {
        detect()
        buttonC = "pink"
        text = 'Z'
        createObject()
    } else if (event.code == "KeyX") {
        detect()
        buttonC = "lime"
        text = 'X'
        createObject()
    } else if (event.code == "KeyN") {
        detect()
        buttonC = "cyan"
        text = 'N'
        createObject()
    } else if (event.code == "KeyM") {
        detect()
        buttonC = "red"
        text = 'M'
        createObject()
    } else if (event.code == "Space" && GameState == "Play") {
        Debug = !Debug
    }

    if (event.code == "Space" && GameState == "Menu") {
        GameState = "Play"
    }

}


//checks if button is timed to a dot as well as create a pattern to be used to calculate total score
function detect() {

    let A = 15
    let B = A + 10

    let C = 40
    let D = C + 10




    for (n = 1; n <= 22; n++) {

        if (P1.X + 8 >= A && P1.X + 8 <= B) {
            times += 1;
            points + plus

            if (n > Lp || Pattern == 11 || n < Lp) {
                console.log(Pattern);
                Groove.push(Pattern)
                Pattern = 10;
                Lp = n;
            } else {
                Pattern += 10;
            }

            break
        }

        if (P1.X + 8 >= C && P1.X + 8 <= D) {
            times += 1;
            points + plus
            if (n > Lp + 1 || n < Lp || Pattern == 11) {
                console.log(Pattern)
                Groove.push(Pattern)
                Pattern = 01;
                Lp = n - 2;
            } else {
                Pattern += 01;
            }

            break
        }




        if (n == 22) {
            if (cool == false) {
                miss += 1;
            } else {
                miss += 1;
            }

        }



        A += 50
        B = A + 15

        C += 50
        D = C + 15

    }


    ctx.fillStyle = "lime";
    ctx.fillRect(P1.X + 3, 45, 10, 10);


}


function createObject() {


    // create the new object
    var object = {

        text: text,

        type: buttonC,

        x: P1.X + 6,

        y: P1.Y + 8,
    }

    // add the new object to the objects[] array
    objects.push(object);
}




// resets position of player when the other side is reached and calculates points
function restart() {
    P1.X = 45;
    P1.Y = 37;
    line = 1;


    console.clear()
    CalcScore()

    Ranks()

    if (totalPoints < 0) {
        totalPoints = 0
    }

    Pdifference = totalPoints - lastPoints;

    teach = 0;

    points = 0
    objects.length = 0;
    taps.length = 0;
    times = 0;
    miss = 0;
    backhit = 0;
    lastPoints = totalPoints
    CoolPoints = 0
    Pattern = 00;
    Groove.length = 0;
    TeachGroove.length = 0
    TeachLine.length = 0

    if (rank < 11) {
        buttons()
    }


    // console.log("end")
    // console.log(totalPoints)
    // ctx.fillStyle = "black";
    // ctx.fillRect(0, 0, cnv.width, cnv.height);
}

// draws the backgrounds
ctx.fillStyle = "black";
ctx.fillRect(0, 0, cnv.width, cnv.height);

function drawBackground() {

    // ctx.clearRect(0, 0, cnv.width, cnv.height)
    var A = 170
    var B = 195

    for (let n = 1; n < 10; n++) {



        ctx.fillStyle = "white";
        ctx.fillRect(A, dot.Y, dot.S, dot.S);
        A += 50;

    }

    for (let n = 1; n < 10; n++) {



        ctx.fillStyle = "grey";
        ctx.fillRect(B, dot.Y, dot.S, dot.S);
        B += 50;

    }

    if (cool == true) {
        var C = 170
        var D = 195

        for (let n = 1; n < 10; n++) {



            ctx.fillStyle = "white";
            ctx.fillRect(C, dot.Y + 35, dot.S, dot.S);
            C += 50;

        }

        for (let n = 1; n < 10; n++) {



            ctx.fillStyle = "grey";
            ctx.fillRect(D, dot.Y + 35, dot.S, dot.S);
            D += 50;

        }
    }


    ctx.fillStyle = rank1;
    ctx.font = "30px Brush Script MT";
    ctx.fillText("Cool", 50, 110)

    ctx.fillStyle = rank2;
    ctx.font = "30px Brush Script MT";
    ctx.fillText("Good", 50, 150)

    ctx.fillStyle = rank3;
    ctx.font = "30px Brush Script MT";
    ctx.fillText("Bad", 50, 190)

    ctx.fillStyle = rank4;
    ctx.font = "30px Brush Script MT";
    ctx.fillText("Awful", 50, 230)
};

// draws parts that dont move on the frame
function staticElements() {

    for (var i = 0; i < taps.length; i++) {
        var tap = taps[i];

        ctx.fillStyle = tap.type;
        ctx.fillRect(tap.x, 45, 10, 10);



    }

    for (var i = 0; i < objects.length; i++) {
        var object = objects[i];

        ctx.fillStyle = object.type;
        ctx.fillRect(object.x, object.y, 10, 10);

        // ctx.font = "30px Courier";
        // ctx.fillText(object.text, object.x, 45)
    }



}

// draws the moving elements on screen
function drawElements() {

    ctx.fillStyle = "yellow";
    ctx.font = "30px Brush Script MT";
    ctx.fillText(totalPoints, 150, 150)



    // extra info for debuging
    if (Debug == true) {
        ctx.fillStyle = "red";
        ctx.font = "30px Brush Script MT";
        ctx.fillText(points, 175, 175)

        ctx.fillStyle = "lime";
        ctx.font = "30px Brush Script MT";
        ctx.fillText(Pdifference, 210, 175)

        ctx.fillStyle = "green";
        ctx.font = "30px Brush Script MT";
        ctx.fillText(times, 175, 200)


        ctx.fillStyle = "blue";
        ctx.font = "30px Brush Script MT";
        ctx.fillText(miss, 175, 225)

        ctx.fillStyle = "Pink";
        ctx.font = "30px Brush Script MT";
        ctx.fillText(Pattern, 175, 250)
    }


    // icon
    ctx.fillStyle = "rgb(255, 247, 130)";
    ctx.fillRect(P1.X, P1.Y, 20, P1.S);


    ctx.fillStyle = "orange";
    ctx.fillRect(P1.X - 2, P1.Y + 4, 24, 10);


    ctx.fillStyle = "orange";
    ctx.fillRect(P1.X, P1.Y - 5, 20, 10);


    ctx.fillStyle = "lime";
    ctx.fillRect(P1.X + 8, P1.Y + 5 + 2, 5, 5);
};

// determines your ranking after a line is finished
function Ranks() {

    var copied = false


    if (Groove.join("") == TeachLine.join("")) {
        copied = true
        
    }


    if (cool == true) {
        if (totalPoints <= lastPoints || points <= 79) {
            if (rank === 11) {
                rank = 8
                Cool = false
            } else {
                rank--
            }
        } else if (rankChange === 1) {
            rank++
        }
    } else {
        if (points <= 0 || points < CoolPoints) {
            if (rankChange === 3 && points > 79) {
                rank -= 2
            } else if (rankChange === 1) {
                rank -= 2
            } else if (points <= 0) {
                rank -= 1
            }
        } else {
            if (rankChange === 3 && points >= 79) {
                rank = 12
                Cool = true
            } else if (rankChange === 2) {
                rank += 2
            } else {
                rank += 1
            }
        }
    }





    if (rank > 12) {
        rank = 12
    } else if (rank == 10) {
        rank = 9
    } else if (rank < 0) {
        rank = 0
    }

    if (cool == true) {
        plus = 3
    } else {
        plus = 3
    }

    if (rank == 12) {
        rank1 = "white"
        rank2 = "grey"
        rank3 = "grey";
        rank4 = "grey";
        rankChange = 0;
        cool = true;
    } else if (rank == 11) {
        rank1 = "red"
        rank2 = "grey"
        rank3 = "grey";
        rank4 = "grey";
        rankChange = 1;
        cool = true;
    } else if (rank == 9) {
        rank1 = "grey"
        rank2 = "yellow"
        rank3 = "grey";
        rank4 = "grey";
        rankChange = 3;
        cool = false;
    } else if (rank == 8) {
        rank1 = "grey"
        rank2 = "white"
        rank3 = "grey";
        rank4 = "grey";
        rankChange = 0;
        cool = false;
    } else if (rank == 7) {
        rank1 = "grey"
        rank2 = "red"
        rank3 = "grey";
        rank4 = "grey";
        rankChange = 1;
        cool = false;
    } else if (rank == 6) {
        rank1 = "grey"
        rank2 = "grey"
        rank3 = "yellow";
        rank4 = "grey";
        rankChange = 2;
    } else if (rank == 5) {
        rank1 = "grey"
        rank2 = "grey"
        rank3 = "white";
        rank4 = "grey";
        rankChange = 0;
    } else if (rank == 4) {
        rank1 = "grey"
        rank2 = "grey"
        rank3 = "red";
        rank4 = "grey";
        rankChange = 1;
    } else if (rank == 3) {
        rank1 = "grey"
        rank2 = "grey"
        rank3 = "grey";
        rank4 = "yellow";
        rankChange = 2;
    } else if (rank == 2) {
        rank1 = "grey"
        rank2 = "grey"
        rank3 = "grey";
        rank4 = "white";
        rankChange = 0;
    } else if (rank == 1) {
        rank1 = "grey"
        rank2 = "grey"
        rank3 = "grey";
        rank4 = "red";
        rankChange = 0;
    } else if (rank == 0) {
        rank1 = "grey"
        rank2 = "grey"
        rank3 = "grey";
        rank4 = "grey";
        rankChange = 0;
    }


    if (copied) {
       console.log("line copied")
    }
    console.log("rank", rank)
    console.log("Points for cool", CoolPoints)
}


function CalcScore() {
    points = -teach

    points += (Groove.length * 12)

    if (Groove.length >= 10) {
        points += 92
    }

    if (cool == false) {
        points += miss * teach
    } else {
        points += miss * 3
    }


    // punishes for spamming inputs
    if (times > 50 && cool == true) {
        points += -100
        rank -= 2
    } else if (times > 30) {
        points = -100
        rank -= 2
    }

    points = Math.floor(points)

    console.log("Patterns", Groove.length);

    totalPoints += points

    CoolPoints = teach * 8

    console.log("Points for Cool", CoolPoints)
}

buttons()

function Menu() {
    ctx.fillStyle = "White";
    ctx.font = "30px Brush Script MT";
    ctx.fillText("Parappa Styled Rythym game", 240, 45)

    ctx.fillStyle = "White";
    ctx.font = "18px Courier New";
    ctx.fillText("Press The Buttons that correspond with the coloured blocks", 110, 140)

    ctx.fillStyle = "White";
    ctx.font = "12px Courier New";
    ctx.fillText("Your overall performance will be noted in the rating bar on the left which will change colours", 70, 170)

    ctx.fillStyle = "White";
    ctx.font = "12px Courier New";
    ctx.fillText("If you do well you'll be elevated to Cool, in Which you'll have to create your own flow", 90, 185)

    ctx.fillStyle = "White";
    ctx.font = "24px Brush Script MT";
    ctx.fillText("when your ready Press Space to begin", 230, 360)

}

function End() {
    ctx.fillStyle = "White";
    ctx.font = "30px Brush Script MT";
    ctx.fillText("You Lose", 240, 45)

    ctx.fillStyle = "White";
    ctx.font = "30px Brush Script MT";
    ctx.fillText("Now refresh Page", 280, 70)

    ctx.fillStyle = "Green";
    ctx.font = "30px Brush Script MT";
    ctx.fillText(points, 280, 120)
}

requestAnimationFrame(draw)

function draw() {
    // calculation stuffz

    if (GameState == "Play") {

        if (P1.X > 700 && cool == true && line === 1) {
            P1.X = 75;
            P1.Y += 35;
            line = 2;
        } else if (P1.X > 700) {
            restart()
        }

        if (times < teach) {
            plus = 4.5
        } else if (cool == true) {
            plus = 3
        } else {
            plus = 1.5
        }


        dot.X = 145
        X = P1.X + 2
        P1.X = P1.X + 2

        if (rank === 0) {
            GameState = "End"
        }

        // draw objects
        ctx.clearRect(0, 0, cnv.width, cnv.height)


        drawBackground()

        staticElements()

        drawElements()
    } else if (GameState == "Menu") {
        ctx.clearRect(0, 0, cnv.width, cnv.height)
        Menu()
    } else if (GameState == "End") {
        ctx.clearRect(0, 0, cnv.width, cnv.height)
        End()
    }


    requestAnimationFrame(draw)
}