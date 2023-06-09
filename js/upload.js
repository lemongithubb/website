"use strict";

let fromData=new FormData();
var img=new Image();
var post_list=[];


function setThumbnail(event){
 
    
    var reader = new FileReader();
    reader.onload = function(event){
        var img = document.createElement("img");
        img.setAttribute("src", event.target.result);
        img.setAttribute("class", "col-lg-6");
        document.querySelector("div#image_container").appendChild(img);
    };
    
    reader.readAsDataURL(event.target.files[0]);
   
   post_list.push(reader);

}

function handleOnchange(e){
    const text = e.options[e.selectedIndex].text;
  
}

function upload(){
   post_list.push(img);
   alert("성공");
}
 
