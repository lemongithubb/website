"use strict";

function reg_input_check() {
    const id_element = document.getElementById("idError");
    const pw_element = document.getElementById("pwError");
    const pwck_element = document.getElementById("pwckError");

    if (id.value == "") {
        id_element.innerHTML = "아이디를 입력하세요";

    } else {
        id_element.innerHTML = ""
    }
    if (pw.value == "") {
        pw_element.innerHTML = "비밀번호를 입력하세요";

    } else {
        pw_element.innerHTML = ""
    }
    if (pwck.value == "") {
        pwck_element.innerHTML = "비밀번호확인을 입력하세요";

    } else {
        pwck_element.innerHTML = ""
    }
    if ((id.value != "") && (pw.value != "") && (pwck.value != "")) {
        return 1;
    }
}


function reg_pw_check() {
    if (pw.value == pwck.value) { 
        return true;

    } else {
        alert("비밀번호와 비밀번호 확인이 일치하지 않습니다.");
        return false;
    }
}

function add_mem(id,pw){
    if(window.localStorage.getItem(id)!=null){
        alert("중복되는 id입니다.");
    }else{
        window.localStorage.setItem(id,pw); 
        alert("가입 성공");
        //memberlist();   --->가입한 사람들의 id pw 확인 

    }
}
/*확인용 함수
function memberlist(){
    for(let i = 0; i < window.localStorage.length; i++) {
        const key = window.localStorage.key(i);
        const value = window.localStorage.getItem(key);
        alert(`id:${key} pw:${value}`);
      }
}
*/
function reg() {
    
    if (reg_input_check() == 1) {//모든 칸 입력 완료일 때
        
        if (reg_pw_check()) {
            add_mem(id.value, pw.value);
        }

    }

}