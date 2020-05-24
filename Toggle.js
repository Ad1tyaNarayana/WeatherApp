let dark = true;

$("#Toggle").click(function () {
  if (dark) {
    $("#Toggle").text("Dark Mode");
    $("button").css("background-color", "#4796d6");
    $("input").css("background-color", "#4796d6");
    $("#background").css("background-color", "#4796d6");
    $("input").css("background-color", "#4796d6");
    $("input").css("border", "3px solid black");
    $("input").css("border-right", "none");
    $("#enter").css("border-left", "none");
    $("#enter").css("border-right", "3px solid black");
    $("#enter").css("border-top", "3px solid black");
    $("#enter").css("border-bottom", "3px solid black");
    $("#Toggle").css("border", "3px solid black");
    $("#card").css("background-color", "white");
    $("#card").css("color", "black");
    dark = false;
  } else {
    $("#Toggle").text("Light Mode");
    $("button").css("background-color", "#100e17");
    $("input").css("background-color", "#100e17");
    $("#background").css("background-color", "#100e17");
    $("input").css("background-color", "#100e17");
    $("input").css("border", "3px solid white");
    $("input").css("border-right", "none");
    $("#enter").css("border-left", "none");
    $("#enter").css("border-right", "3px solid white");
    $("#enter").css("border-top", "3px solid white");
    $("#enter").css("border-bottom", "3px solid white");
    $("#Toggle").css("border", "3px solid white");
    $("#card").css("background-color", "#17141d");
    $("#card").css("color", "white");
    dark = true;
  }
});
