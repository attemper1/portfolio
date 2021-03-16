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
//cookie
function createCookie(name,value,days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
    console.log(document.cookie);   //name=value
    console.log(ca);    //["name=value"]
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
        console.log(c); //name=value
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}

function eraseCookie(name) {
	createCookie(name,"",-1);
}
//today box checked
$(function(){
    $("#validation #boxToday").on("click",function(){
        if($("#boxToday").prop("checked")){
            createCookie("redirect","today",1);
            window.location.href='https://attemper1.github.io/portfolio/index.html'
        }
    });
});
$(function(){
    if(readCookie("redirect")!="today"){
        if(window.location=='https://attemper1.github.io/portfolio/'){
        window.location.href='https://attemper1.github.io/portfolio/validation.html';
        }else{
            if(window.location=='https://attemper1.github.io/portfolio/'){
            window.location.href='https://attemper1.github.io/portfolio/index.html';
            }
        }
    }
});