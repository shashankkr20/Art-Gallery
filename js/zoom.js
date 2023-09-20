var itempg=document.querySelectorAll(".item");
var zoompg=document.querySelector(".zoompage");
var img=document.querySelector(".imgcl");
var imname=document.querySelector(".item-name");
var close=document.querySelector(".closebtn");
itempg.forEach(element => {
    element.addEventListener("click",()=>{
        zoompg.style.display='flex';
        img.src=element.querySelector("img").src;
        imname.innerHTML=element.querySelector("h6").innerHTML;
    })
});
close.addEventListener("click",()=>{
    zoompg.style.display='none';
})