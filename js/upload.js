"use strict";

function getImgFile(){

}
function upload(){
    not_make();
}
function setThumbnail(event){
    var reader = new FileReader();
    
    reader.onload = function(event){
        var img = document.createElement("img");
        img.setAttribute("src", event.target.result);
        img.setAttribute("class", "col-lg-6");
        document.querySelector("div#image_container").appendChild(img);
    };
    
    reader.readAsDataURL(event.target.files[0]);
}