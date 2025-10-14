var popupoverlay=document.querySelector(".popup-overlay")
var popupbox=document.querySelector(".popup-box")
var addpopup=document.getElementById("add-popup")

addpopup.addEventListener("click",function(){
    popupoverlay.style.display="block"
    popupbox.style.display="block"
})

var clnbutton=document.getElementById("cln-btn")
clnbutton.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})

var bookcontainer=document.querySelector(".container")
var addbtn=document.getElementById("add-btn")
var booktitle=document.getElementById("title-input")
var auther=document.getElementById("author-input")
var about=document.getElementById("about-book")

addbtn.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book-cont")
    div.innerHTML=`<h2>${booktitle.value}</h2>
            <h5>${auther.value}</h5>
            <p>${about.value}</p>
            <button onclick="delbook(event)">Delete</button>`
            bookcontainer.append(div)
            popupoverlay.style.display="none"
            popupbox.style.display="none"

})

function delbook(event){
    event.target.parentElement.remove()
}
