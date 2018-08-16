<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2018/7/30
 * Time: 14:16
 */

header("Content-Type:application/json;charset=utf8");
header("Access-Control-Allow-Origin:*");

if($_SERVER["REQUEST_METHOD"] == "POST"){
    $result = array();
    /*从表单中获取数据*/
    $uname = $_REQUEST["uname"];
    $upwd = $_REQUEST["upwd"];
    $ucode = $_REQUEST["ucode"];
    /*从json文件中读取数据*/
    $userStr = file_get_contents("../data/userInfo.json");/*得到的是字符串*/
    $userArr = json_decode($userStr);/*将读到的字符串转化成数组进行操作*/
    /*设用户名不存在为默认情况*/
    $result = array("status"=>-2,"msg"=>"账户错误","name"=>"NULL");
    /*遍历json文件*/
    for($i=0; $i<count($userArr); $i++){
        if($userArr[$i]->uname == $uname){
            /*更改为默认密码错误*/
            $result = array("status"=>-3,"msg"=>"密码错误","name"=>"NULL");
            if($userArr[$i]->upwd==$upwd){
                $result = array("status"=>2,"msg"=>"登录成功","userName"=>$uname);/*更改为登录成功*/
                break;
            }
        }
    }
    print_r(json_encode($result));

}else{
    $result = array("status"=>-1,"mes"=>"对不起，不支持GET请求");
    print_r(json_encode($result));
}