;$(function(){
    var indexCurrent = 0;
    var $navBtn = $(".brand_nav");
    var $navBtnLi = $navBtn.find("li");
    var $tabPage = $navBtn.next().find(".brand_page");

    function tabMove(obj, index){
        obj.find("li").eq(index).css("color","#00c8ff").siblings().css("color","#000");
        obj.find("li").eq(index).children("i").show();
        obj.find("li").eq(index).siblings().children("i").hide();
        obj.next().find(".brand_page").eq(index).show().siblings().hide();
    };
    $tabPage.eq(0).show();
    $navBtnLi.eq(0).css("color","#00c8ff").siblings().css("color","#000");
    $navBtnLi.eq(0).children("i").show();
    $navBtnLi.on("mouseenter",function(){
        indexCurrent = $(this).index();
        tabMove($navBtn,indexCurrent);
    });

    $(".right_leftbtn").on("click",function(){
        indexCurrent--;
        if(indexCurrent < 0){
            indexCurrent = 3;
        }
        tabMove($navBtn,indexCurrent);
    });

    $('.right_rightbtn').on("click",function(){
        indexCurrent++;
        if(indexCurrent > $(".brand_nav li").length-1){
            indexCurrent = 0;
        }
        tabMove($navBtn,indexCurrent);
    })
});/*导航栏切换*/