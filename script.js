function start(){
$("body").css("background-color", "pink");
$("#main-menu a:first").click();
}
$(window).on("load", start)

function loadpage(e){
    e.preventDefault();
    $("#main-menu a.active").removeClass("active");
    $(this).addClass("active");
  
    var href = $(this).attr("href");
    $("content").load(href);
}
$(document).on("click", "#main-menu a", loadpage);