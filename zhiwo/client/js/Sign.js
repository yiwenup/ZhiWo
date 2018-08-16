;$(function () {

    $.validator.addMethod("isName",function(val){
        return /^[1][3|4|5|7|8][0-9]{9}$/.test(val);
    },"手机格式有误，请重新输入");

    $.validator.addMethod("codeCheck",function(val){
        return /^[t|T|c|C|b|B|e|E][v|V|d|D|x|X|Y|y][7|0|u|U|c|C][2|9|M|m|b|B]$/.test(val);
    },"验证码有误,请重新输入");

    $("#Sign").validate({
        /*定义规则*/
        rules:{
            uname:{
                required:true,
                isName:true
            },
            upwd:{
                required:true,
                rangelength:[6,16]
            },
            upwd2:{
                equalTo:"#upwd"
            },
            ucode:{
                codeCheck:true
            }
        },
        /*定义规则提示*/
        messages:{
            uname:{
                required:"手机格式有误，请重新输入",
            },
            upwd:{
                required:"密码长度需6-16位字符",
                rangelength:"密码长度需6-16位字符"
            },
            upwd2:{
                equalTo:"两次输入的密码不匹配"
            },
            ucode:{
                codeCheck:"验证码有误,请重新输入"
            }
        },
        /*提交*/
        submitHandler:function () {
            $.post("../../sever/Sign.php", $("#Sign").serialize(),function (result) {
                if(result.status == 1){
                    alert(result.msg);
                    window.location.href = "../html/Login.html";
                }else if(result.status == 0){
                    alert(result.msg);
                }else if(result.status == -1){
                    alert(result.msg);
                }
            });
            return false;
        }
    })
});
