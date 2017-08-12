//var isMobile = screen.width < 768;
var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
if (isMobile) {
    $(".slideLink").each(function () {
        $(this).addClass("nonePointerEvents");
    });
} else {
    $("a").each(function () {
        $(this).addClass("linkDecoration");
    });
}