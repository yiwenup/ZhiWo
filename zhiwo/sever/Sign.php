<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2018/7/30
 * Time: 10:07
 */

header("Content-Type:application/json;charset:utf8");
header("Access-Control-Allow-Origin:*");

if($_SERVER["REQUEST_METHOD"] == "POST"){
    $result = array();
    /*从表单中拿到参数*/
    $uname = $_REQUEST["uname"];
    $upwd = $_REQUEST["upwd"];
    $upwd2 = $_REQUEST["upwd2"];
    $ucode = $_REQUEST["ucode"];
    /*指定的参数不能为空----------------------------第二把锁*/
    if(!empty($uname) && !empty($upwd) && !empty($upwd2) && !empty($ucode)){
        /*读取本地json文件*/
        $userStr = file_get_contents("../data/userInfo.json");/*字符串*/
        $userArr = json_decode($userStr);/*将字符串转化为数组*/
        /*进行用户名是否重复操作*/
        $status = true;
        for($i=0; $i<count($userArr);$i++){
            if($userArr[$i]->uname == $uname){
                $status = false;
                break;
            }
        }
        if ($status){
            /*没有重复进行如下操作*/
            $infoArr = array();
            $infoArr["uname"] = $uname;
            $infoArr["upwd"] = $upwd;
            array_push($userArr,$infoArr);/*进行数组拼接操作*/
            $saveStr = json_encode($userArr);/*将得到的数组再转成字符串*/
            file_put_contents("../data/userInfo.json",$saveStr);/*将字符串写进本地文件*/
            $result = array("status"=>1,"msg"=>"注册成功");
            print_r(json_encode($result));
        }else{
            /*手机号重复*/
            $result = array("status"=>0,"msg"=>"该手机号被占用");
            print_r(json_encode($result));
        }
    }
} else{
    $result = array("status"=>-1,"msg"=>"对不起，不支持GET请求");
    print_r(json_encode($result));

}