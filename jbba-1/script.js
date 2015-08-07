//Title changer
//.................................................................................................................
function TitleChanger() {
    var titleInput = prompt("Type in what you want to change the title to. Use up to 24 characters.");
    document.title = titleInput;
}


//Percent calculator
//.................................................................................................................
$(document).ready(function () {
    $("#PercentButton").click(function () {
        var first = document.getElementById("1stNumber").value;
        var second = document.getElementById("2ndNumber").value;
        alert((first / second * 100) + "%");
    });
});



//Spam button
//.................................................................................................................
var clickCount = 0;

function Spamm() {
    if (clickCount === 0) {
        alert("Press this button 5 times. on the fifth time, something fun will happen.");
    }

    alert("You've got " + (5 - clickCount) + " left");
    clickCount += 1;
    //    $("#klickCounter").html("Your count is: " + clickCount);
    if (clickCount > 5) {
        $('#InnerBody').replaceWith('<img src="dickbuttcolors.jpg" />');
    }
}



//Browser crasher
//.................................................................................................................
$(document).ready(function () {
    $('#CrasherButton').click(function () {
        alert("lol try and do anytgin");
        while (true) {
            console.log("lololololololololololl");
        }
    });

});

//TyroneEasterEgg
//.................................................................................................................
$(document).ready(function () {
    $('#EasterEgg').click(function () {
        var pr = prompt("Please input your favorite simple color.");
        var tr = pr.trim();
        var result = tr.toLocaleLowerCase();
        if ((result === "blue") || (result === "teal")) {
            alert("You typed in: " + result);
            $(this).replaceWith('<img src="1.jpg" width="35%" />');
        } else if (result === "red") {
            alert("You typed in: " + result);
            $(this).replaceWith('<img src=" 2.jpg " width="35%" />');
        } else if (result === "green") {
            alert("You typed in: " + result);
            $(this).replaceWith('<img src=" 3.jpg " width="35%" />');
        } else if ((result === "purple") || result === "violet") {
            alert("You typed in: " + result);
            $(this).replaceWith('<img src=" 4.jpg " width="35%" />');
        } else if ((result === "pink") || result === "magenta" || (result === "fuchsia")) {
            alert("You typed in: " + result);
            $(this).replaceWith('<img src=" 5.jpg " width="35%" />');
        } else if ((result == "yellow") || result === "gold") {
            alert("You typed in: " + result);
            $(this).replaceWith('<img src=" 6.jpg " width="35%" />');
        } else if (result === "orange") {
            alert("You typed in: " + result);
            $(this).replaceWith('<img src=" 7.jpg " width="35%" />');
        } else if (result === "black") {
            alert("You typed in: " + result);
            $(this).replaceWith('<img src=" 8.jpg " width="35%" />');
        } else if ((result === "gray") || result === "grey") {
            alert("You typed in: " + result);
            $(this).replaceWith('<img src=" 9.jpg " width="35%" />');
        } else if (result === "white") {
            alert("You typed in: " + result);
            $(this).replaceWith('<img src=" 10.jpg " width="35%" />');
        } else if ((result === "brown") || (result === "tan")) {
            alert("You typed in: " + result);
            $(this).replaceWith('<img src=" 11.jpg " width="35%" />');
        } else if ((result === "rainbow") || (result === "all")) {
            alert("You typed in: " + result);
            $(this).replaceWith('<img src=" 12.jpg " width="35%" />');
        } else {
            alert("You didn't choose a simple color. You typed in: " + tr + ", which isn't valid");
            $(this).replaceWith('<img src="dickbuttcolors.jpg" width="35%" />');
        };

    });
})

//FIXER
$(document).ready(function () {
    $('#FixEE').click(function () {
        location.reload();
    });
});




//HideImgs - New script for each picture - Except for Tyrone img, that's used for the easter egg
//.................................................................................................................
$(document).ready(function () {
    $('.BackDropZ').click(function () {
        $('.BackDropZ').slideToggle(400);
    });
    $('.BackDropTextZ').click(function () {
        $('.BackDropZ').slideToggle(400);
    });
});

$(document).ready(function () {
    $('.BackDropTextEasterEgg').click(function () {
        $('.BackDropEasterEgg').slideToggle(400);
    });
});

$(document).ready(function () {
    $('.BackDrop1').click(function () {
        $('.BackDrop1').slideToggle(400);
    });
    $('.BackDropText1').click(function () {
        $('.BackDrop1').slideToggle(400);
    });
});

$(document).ready(function () {
    $('.BackDrop2').click(function () {
        $('.BackDrop2').slideToggle(400);
    });
    $('.BackDropText2').click(function () {
        $('.BackDrop2').slideToggle(400);
    });
});

$(document).ready(function () {
    $('.BackDrop3').click(function () {
        $('.BackDrop3').slideToggle(400);
    });
    $('.BackDropText3').click(function () {
        $('.BackDrop3').slideToggle(400);
    });
});