/* getElementById -->  Inner html(Property) - To change the content (get or change any html element including html, body) */

//document.getElementById('demo_InnerHTML').innerHTML="Hai i am from the p - tag"

/* getElementById is the method and innerHTML is the property */


/* getElementsByTagName(name) --> find elements by tag name
   Need to mention the which tag, like the position(index) -> here accessing the first <p> tag
   Because it returns the collection(like array), so need to mention the index */

//document.getElementsByTagName("p")[0].innerHTML="hai i am from p tag"

/* to get all the p tag, use loop */

// let paras=document.getElementsByTagName("p");
// for(let i=0;i<paras.length;i++){
//     paras[i].innerHTML="hai";
// }

/* getElementsByClassName --> need to mention index for accessing and returns a HTMLcollection 
   (not an array,if then change to arrary like this) */

// Array.from(document.getElementsByClassName("info")).forEach((p,i)=>{
//     p.innerHTML=`Hai ${i+1}`;
// })

// document.getElementsByClassName("info")[0].innerHTML="hai";

/* Changing the HTML elements */
/* innerHTML - changes the content inside the html element,includes html tags */
// document.getElementById("demo_p_tag").innerHTML="Hello, <strong>Kirubhakaran</strong> !"

/* innerText - ignore hidden elements(style="display:none") and returns the visible only text(console and in html page), 
and used when the text appear as it is but slower than textContent */
// const text1=document.getElementById("text_1_Ex").innerText;
// console.log(text1);

/* textContent - preserves the spaces and lines and do not consider visibility and style like display none, returns all the text (faster)*/
// const text2=document.getElementById("text_2").textContent;
// console.log(text2); //in console only "hello world", but in the web page only "hello"

/* attribute - to change the id,href,src,width of an element */
// const image=document.getElementById("image_id");
// image.src="lion_2.jpg";
// image.width="200";

/* style.property --> to change the css style of the element */
// const para=document.getElementById("para");
// para.style.color="yellow";
// para.style.backgroundColor="rgba(22, 168, 12, 1)";
// para.style.fontSize="30px";

/* setAttribute("attributeName","value") --> another way to change or set an attribute  */
// const a= document.getElementById("a_id");
// a.setAttribute("href","https://en.wikipedia.org/wiki/A._P._J._Abdul_Kalam");
// a.setAttribute("target","_blank"); //opens in new tag, _self -> means open in same tab(default)

/* createElement(element) -> add the element */
// const div=document.getElementById("container");

// const newPara = document.createElement("p");
// newPara.innerHTML="<h2>Hello from new P Tag </h2>"
// div.appendChild(newPara); //adds the element to last of the parent element

/* removeChild(element) -> Remove the child element from the parent */
//div.removeChild(document.getElementsByTagName("p")[0]);

/* replaceChild(new,old) */
// const div2=document.getElementById("container2");

// const newPara=document.createElement("p");
// newPara.innerHTML="Hello i am from the new para";

// const oldPara=document.getElementById("oldPara");

// div2.replaceChild(newPara,oldPara);

//To get the date
// document.getElementById("date").innerHTML=Date();

/* Javascript -> Form validation */
// function validateForm(){
//    let formVar=document.forms["myForm"]["fname"].value; //selects from the "name attribute" not my "id"

//    if(formVar==""){
//       alert("Name must be filled.")
//       return false; // preventing from the form submission, because it will submit even after the input is empty
//    }
// }

/* to check the visibility */
// function showText(){
// document.getElementById("pre_id").style.visibility='visible';
// }

// function hideText(){
// document.getElementById("pre_id").style.visibility='hidden';
// }

//onload()- runs when the page or element finishes loading
// function getMessageWhenLoad(){
//    alert("Page has fully loaded..!")
// }

//onunload() - runs when the page is being unloaded refreshing/leaving
// function MessageWhenUnload(){
//    console.log("Do you really want to leave the page.?");
// }

//onbeforeunload() --> modern alternate for the onunload() 
// window.onbeforeunload=function(){
//       return "are you sure you what to leave"; // The custom message will be ignored,only the generic message will be showed
// }

//oninput --> everytime the input/textarea changes (fires immediately - triggers on every keystroke)

function inputUpperCase(){

   let x= document.getElementById("input_box");
   x.value=x.value.toUpperCase();
}

//onchange() --> fires only when the element losses focus(after the user finishes editing)
function onChangeUpperCase(){

   let x= document.getElementById("input_box");
   x.value=x.value.toUpperCase();
}
