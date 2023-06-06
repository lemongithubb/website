"use strict";

function not_make(){
    alert("아직 구현하지 못한 기능입니다.");

}


//main

function non_member(){
    alert("멤버 한정 기능입니다. 로그인하세요.");
    
}
function login_check(){ //로그인이 필요한 기능에 추가 //이미 로그인했으면 true 리턴
    if(window.sessionStorage.getItem('login_id')==null){
        non_member();
        return false;
    }else{
        return true;
    }
}
function goto_login(){
    if(window.sessionStorage.getItem('login_id')!=null){
        alert("이미 로그인하였습니다.")
    }else{
        location.replace("login.html");
    }
    
}
function goto_main(){
    location.replace("index.html");
}

function goto_reg(){
    location.replace("reg.html");
}
function goto_upload(){
    if(login_check()){
         location.replace("upload.html");
    }
    
}