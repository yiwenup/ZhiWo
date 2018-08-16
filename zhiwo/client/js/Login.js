$(function () {
    $("#Login").validate({
        /*定义规则*/
        rules:{
            uname:{
                required:true
            },
            upwd:{
                required:true
            }
        },
        /*定义规则反馈信息*/
        messages:{
            uname:{
                required:"账户错误!"
            },
            upwd:{
                required:"密码错误!"
            }
        },
        /*提交*/
        submitHandler:function () {
            $.post("../../sever/Login.php", $("#Login").serialize(),function (result) {
                if (result.status == -2) {
                    $(".addError.e1").text("");
                    $(".addError.e1").text("账户错误!");
                }else if(result.status == -3){
                    $(".addError.e1").text("");
                    $(".addError.e2").text("密码错误!");
                }else if(result.status == 2){
                    alert(result.msg);
                    localStorage.setItem("key",result.userName);
                    window.location.href="../html/index.html";
                }
            });
            return false;
        }
    })
});