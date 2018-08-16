;$(function(){
    $.fn.extend({
        countDown:function(endTime){
            //取设定的活动结束时间距1970年1月1日之间的毫秒数
            var end=new Date(endTime).getTime();
            //取当前时间距1970年1月1日之间的毫秒数
            var nowTime=new Date().getTime();
            //结束时间与当前时间之间的毫秒差
            var difference=end-nowTime;
            if (difference>0) {
                //将毫秒差换算成天数
                days=Math.floor(difference/86400000);
                difference=difference-days*86400000;
                //换算成小时
                hours=Math.floor(difference/3600000);
                difference=difference-hours*3600000;
                //换算成分钟
                minutes=Math.floor(difference/60000);
                difference=difference-minutes*60000;
                //换算成秒数
                seconds=Math.floor(difference/1000);
                //不足10时，进行补零操作
                if(hours<10){
                    hours="0"+hours;
                };
                if(minutes<10){
                    minutes="0"+minutes;
                };
                if(seconds<10){
                    seconds="0"+seconds;
                };
                $(".downClock").next().children().eq(0).html(days);
                $(".downClock").next().children().eq(1).html(hours);
                $(".downClock").next().children().eq(2).html(minutes);
                $(".downClock").next().children().eq(3).html(seconds);
            } else {
                //设定若是过了设置的活动结束时间，全部写成0天0时0分0秒
                $(".downClock").next().children().eq(0).html(0);
                $(".downClock").next().children().eq(1).html(0);
                $(".downClock").next().children().eq(2).html(0);
                $(".downClock").next().children().eq(3).html(0);
            }
        }
    });/*index倒计时函数*/
    var $amount = $(".slide_amount").text();/*侧边栏和顶部购物车的数值*/
    $(".right ul li:eq(0)").children("a").mouseenter(function(){
        $(this).parent().css("backgroundColor","#fff");
        $(".erweima").stop(true,false).slideDown(800);
    }).mouseleave(function(){
        $(this).parent().css("backgroundColor","#f2f2f2");
        $(".erweima").stop(true,false).slideUp(800);
    });/*顶部二维码-->效果：指向文字，图片卷帘出现*/
    $("#show").mouseenter(function(){
        $(this).css("backgroundColor","#fff");
        $(".list").stop(true,false).slideDown(800);
    }).mouseleave(function(){
        $(this).css("backgroundColor","#f2f2f2");
        $(".list").stop(true,false).slideUp(800);
    });/*顶部：我的小窝-->效果：指向文字，列表卷帘出现*/
    $("#show2").mouseenter(function(){
        $(this).css("backgroundColor","#fff");
        $(".list2").stop(true,false).slideDown(800);
    }).mouseleave(function(){
        $(this).css("backgroundColor","#f2f2f2");
        $(".list2").stop(true,false).slideUp(800);
    });/*顶部：客户服务-->效果：指向文字，列表卷帘出现*/
    $(".shopcar").mouseenter(function(){
        $(".mycar").css({"boxShadow":"0 -1px 3px #d8d8d8","borderBottom":"none"});
        $(".shopgoods").stop(false,true).show(500,2000);
    }).mouseleave(function(){
        $(".mycar").css({"boxShadow":"0 0 2px #d8d8d8","borderBottom":"1px #e2e2e2 solid"});
        $(".shopgoods").stop(true,false).slideUp(800);
    });/*顶部购物车栏-->效果：指向购物车，出现阴影并且出现div*/
    $("#img").mouseenter(function(){
        $(".status1").css("display","none");
        $(".status2").css("display","block");
    }).mouseleave(function(){
        $(".status1").css("display","block");
        $(".status2").css("display","none");
    });/*顶部导航栏-->效果：切换图片*/
    $("#list").mouseenter(function(){
        $(this).css("backgroundColor","#00647f");
        $(".shoplistitem").stop(true,false).slideDown(800);
    }).mouseleave(function(){
        $(this).css("backgroundColor","#00c8ff");
        $(".shoplistitem").stop(true,false).slideUp(800);
    });/*顶部导航栏-->效果：指向logo显示文字*/
    $(".nlist").find("li").eq(0).children(".goods_img").mouseenter(function(){
        $(this).children(".goods_img_effic").css("display","block");
    }).mouseleave(function(){
        $(this).children(".goods_img_effic").css("display","none");
    });/*指向商品显示功效*/
    $(".nlist").find("li").eq(0).mouseenter(function(){
        $(this).children(".goods_img").css("opacity","0.8");
    }).mouseleave(function(){
        $(this).children(".goods_img").css("opacity","1");
    });/*指向商品商品变亮*/
    $(".nlist").find("li").eq(0).find(".price_info_buy").children("a").click(function(){
        $(this).next().show();
        $(this).next().animate({
            left: 203,
            top: -81,
            opacity: 0
        },1000,function(){
            $(this).next().hide();
        });
        return false;
    });/*动画效果：点击添加购物车，跑出一个逐渐消失的小圆点*/
    $(window).on("scroll",function(){
        var scrollTop = $(this).scrollTop();
        if(scrollTop >= 558){
            $(".slide_left").fadeIn(600);
        }
        else{
            $(".slide_left").fadeOut(600);
        }
    });/*左边的导航栏在滚轮在一定位置的时候显示*/
    $(".slide_left").find("li").click(function(){
        $(this).css("backgroundColor", "#00c8ff").siblings().css("backgroundColor", "#fff");
        $(this).find("span").css("color","#fff");
        $(this).siblings().find("span").css("color","#6c6c6c");
        $(".zhiwo_index").css("backgroundColor","#00c8ff");
        $(".zhiwo_index").find("span").css("color","#fff");
    });/*左边导航栏点击效果*/
    $(".slide_btnc").mouseenter(function(){
        $(this).stop(true,false).css("backgroundColor","#00c8ff");
        $(this).stop(true,false).next().show();
    }).mouseleave(function(){
        $(this).stop(true,false).css("backgroundColor","#6c6c6c");
        $(this).stop(true,false).next().hide();
    });/*右边工具栏二维码-->效果：指向按钮显示二维码*/
    $(".slide_btn").mouseenter(function(){
        $(this).css("backgroundColor","#00c8ff");
        $(this).next().stop(true,false).animate({
            "left":"-103px",
            "opacity":"1"
        },1000);
    }).mouseleave(function(){
        $(this).css("backgroundColor","#6c6c6c");
        $(this).next().stop(true,false).animate({
            "left":"-120px",
            "opacity":"0"
        },1000);
    });/*右边工具栏-->指向显示标签*/
    $(".slide_right_panel_part1_foot").click(function(){
        $(".slide_right_content").css("left","-335px");
    });
    $(".slide_right_panel_part1_shopcar").click(function(){
        $(".slide_right_content").css("left","-335px");
        $(".nav_content").eq(0).css("z-index","100")
    });
    $(".close").click(function(){
        $(".slide_right_content").css("left","35px");
        $(".nav_content").eq(0).css("z-index","0")
    });/*右边工具栏-->效果：点击隐藏*/
    $(".rankinglist_img").children().mouseenter(function(){
        $(this).children().css("border","1px solid rgba(0,0,0,0.1)");
    }).mouseleave(function(){
        $(this).children().css("border","none");
    });/*详情页面-->效果：指向图片出现边框*/
    $(".price_info_buy").children("a").click(function(){
        $(".total").show();
       ++$amount;
        $(".total").text("");
        $(".total").text($amount);
        $(".slide_amount").text("");
        $(".slide_amount").text($amount);
        $(".shopgoods").remove();
        $(".numBuy").val($amount);
    });/*主页面-->效果：点击产生模仿购买效果*/
   /* $amount = 1;
    if($amount != 0){
        $(".cartbox").remove();
        $(".container").load("../html/cart2.html");

    }*/
    $(".mycar").click(function(){
        if($amount == 0){
            window.location.href = "../html/cart.html";
        }else{
            window.location.href = "../html/cart2.html";
        }
    });/*通过判断是否添加购物车来判断跳转的是哪种购物车页面*/
    $(".del").click(function(){
        $("#myCart_yilishabai").remove();
        window.location.href = "index.html";
    });/*购物车页面，点击清空，实现清空购物车并且跳转到主页面*/
    $(".removeIt").click(function(){
        $("#myCart_yilishabai").remove();
        $("#tongji").text(0);
        $("#zongji").text(0.00);
    });/*购物车页面，点击删除，取消当前购物栏*/
});