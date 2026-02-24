1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ans: Below is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll--
    ** getElementById : getElementById is used to select a specific Element. It basically finds the Element by Id and returns only one Element.
    for example--> document.getElementById("idName")

    ** getElementByClassName : When a program needs to select multiple Elements/Items, getElementByClassName is used. It basically returns multiple Elements if they are of the same class and returns HtmlCollection. (Array like Object)
    for example--> document.getElementByClassName("className")

    ** querySelector : It uses a CSS selector to select an element (e.g. #idName for id, .class for class) and it only returns the first matching element.
    for example--> document.querySelector("#idName") / document.querySelector(".className")

    ** querySelectorAll : It uses a CSS selector to select an element (e.g. #idName for id, .class for class) and returns all matching elements as a NodeList.
    for example--> document.querySelectorAll("#idName") / document.querySelectorAll(".className")

2. How do you create and insert a new element into the DOM?

Ans: To create a new element, you first need to select where to place it. If you place it in the body, there is no need to select it separately.

    ** Adding an element to a specific "div" in the body is shown - which has <div id="parent"></div> in the html.
    const parent = document.getElementById("parent");

    ** create new Element
    const newElement = document.createElement("p");

    ** content add new element
    newElement.innerText = "it's new Element , create by dom "

    ** add to Dom
    parent.appendChild(newElement); 


3. What is Event Bubbling? And how does it work?

Ans : Event Bubbling means that the event starts rising from the bottom to the top parent, it is called Event Bubbling.

Let's say in html -
    <!-- <div><button>Click</button> -->

    Now if we create event bubbling on the button, it will first rise up button-> then div -> then body -> like this.


4. What is Event Delegation in JavaScript? Why is it useful?

Ans : Event Delegation means placing an event listener on the parent element, not on the child. It takes up less memory, works on dynamic elements, and keeps the code clean.

for Example -> document.querySelector("ul").addEventListener("click",function(e){
    if(e.target.tagName == "LI"){
        console.log("List item Clicked");
    }
})


5. What is the difference between preventDefault() and stopPropagation() methods?

Ans : Below is the difference between preventDefault() and stopPropagation() methods

    ** preventDefault() --> This disables the default actions of the browser. For example: disabling from submit.for example -> event.preventDefault()

    ** stopPropagation()-->This stops event bubbling. That is, the event will not go to the parent Element. for example -> event.stopPropagation()