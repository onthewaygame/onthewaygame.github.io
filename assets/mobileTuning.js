//var isMobile = screen.width < 768;
var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
if (isMobile) {
    $(".desktop").each(function () {
        $(this).hide();
    });
} else {
     $(".mobile").each(function () {
        $(this).hide();
    });
    
    $("a").each(function () {
        $(this).addClass("linkDecoration");
    });
}