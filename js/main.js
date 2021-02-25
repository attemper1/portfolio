$(function(){
    //2depth메뉴 액션
    $("#gnb>ul>li.slide").hover(
        function(){
            //mouseover
            $(".depth1").find(".depth2").addClass("show");
            $("#main_header #gnb").addClass("visible");
        },
        function(){
            //mouseout
            $(".depth1").find(".depth2").removeClass("show");
            $("#main_header #gnb").removeClass("visible");
        }
    );
});
//#gnb mobile
$(function(){
    $(".btn-toggle").on("click",function(){
        $("#gnb").addClass("show");
        $("#main_header .btn-toggle").removeClass("show");
        $("#main_header .btn-close").addClass("show");
    });
});
$(function(){
    $(".btn-close").on("click",function(){
        $("#gnb").removeClass("show");
        $("#main_header .btn-toggle").addClass("show");
        $("#main_header .btn-close").removeClass("show");
    });
});