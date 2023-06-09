function log_input_check(){

    const id_element=document.getElementById("idError");
    const pw_element= document.getElementById("pwError");

    if(id.value==""){
        id_element.innerHTML="아이디를 입력하세요";
       return false;
    }
    else if(pw.value==""){
        pw_element.innerHTML="비밀번호를 입력하세요";
        return false;
        
        
    }else{
       id_element.innerHTML="";
        pw_element.innerHTML="";
        return true;
    }
}

function login(){
    
    if(log_input_check()==true){
        if(window.localStorage.getItem(id.value)==pw.value){
        window.sessionStorage.setItem('login_id',id.value);
        alert("로그인에 성공하였습니다.")
        goto_main();
      
    }else if(window.localStorage.getItem(id.value)==null){
        alert("존재하지 않는 id입니다.");
    }else{
        alert("비밀번호가 틀렸습니다.");
    }
    }
    

}
function logout(){
    if(login_check()){
        window.sessionStorage.removeItem('login_id');
        alert("로그아웃에 성공하였습니다.");
        goto_main();
    }
}