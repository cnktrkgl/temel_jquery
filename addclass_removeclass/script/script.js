$(document).ready(function () {
    $("#btnChangeText").css("display", "inline-block");
    $("#btnChangeColor").click(function () {
        $(".box").css("background", "blue");
        $("#box1").css("border", "1px solid yellow");
    });
})