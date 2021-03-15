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
$(function(){
    $("#gnb .slide>a").on("click",function(){
        return false;
    });
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
//#gallery
$(function(){
    $("#gallery .btn-more").on("click",function(){
        $("#gallery .row2").addClass("show");
        $("#gallery .btn-more").removeClass("show");
        $("#gallery .btn-hide").addClass("show");
    });
});
$(function(){
    $("#gallery .btn-hide").on("click",function(){
        $("#gallery .row2").removeClass("show");
        $("#gallery .btn-more").addClass("show");
        $("#gallery .btn-hide").removeClass("show");
    });
});
//scroll top
$(function(){
    $(document).on("scroll",function(){
        var scrollY=$(document).scrollTop();
        if(scrollY > 400){
            $("#btn-top").addClass("show");
        }else{
            $("#btn-top").removeClass("show");
        }
    })
});
//redirection   
if(window.location=='http://attemper1.github.io/portfolio/'){
    window.location.href='http://attemper1.github.io/portfolio/validation.html';
}