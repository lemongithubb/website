function log_input_check(){

    const id_element=document.getElementById("idError");
    const pw_element= document.getElementById("pwError");

    if(id.value==""){
        id_element.innerHTML="아이디를 입력하세요";
       
    }
    else if(pw.value==""){
        pw_element.innerHTML="비밀번호를 입력하세요";
        
    }else{
       id_element.innerHTML="";
        pw_element.innerHTML="";
    }
}

function login(){
    log_input_check();
    if(window.localStorage.getItem(id.value)==pw.value){
        window.sessionStorage.setItem('login_id',id.value);
        goto_main();
      
    }else if(window.localStorage.getItem(id.value)==null){
        alert("존재하지 않는 id입니다.");
    }else{
        alert("비밀번호가 틀렸습니다.");
    }

}
function logout(){
    if(login_check()){
        window.sessionStorage.removeItem('login_id');
        goto_main();
    }
}