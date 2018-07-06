// External Javascript File

/*
Add paragraph element to body with text “The Document Object Model (DO ...the page.”
    • Set the paragraph text color to purple
*/

// element 'p' created 
var para = document.createElement("p");

para.innerText = `The Document Object Model (DOM) is a programming interface for HTML and XML documents. It represents
the page so that programs can change the document structure, style, and content. The DOM represents the document as 
nodes and objects. That way, programming languages can connect to the page.`;

document.body.appendChild(para);

para.style.color = "purple";
para.style.textAlign = "center";


/*
Add another paragraph to body with text” A Web page is a ... as JavaScript.”
    • Set another paragraph text color to red
*/

var para2 = document.createElement("p");

// A text node created -- another way to create element
var node = document.createTextNode(`A Web page is a document. This document can be either displayed in the browser window or as the HTML
source. But it is the same document in both cases. The Document Object Model (DOM) represents that same document so it
can be manipulated. The DOM is an object-oriented representation of the web page, which can be modified with a 
scripting language such as JavaScript.`);

// append the Text Node into PARA2 as 2nd paragrapg -- here TEXT to NOde. Then NODE to <p> & P to <body>
para2.appendChild(node);

document.body.appendChild(para2);

para2.style.color = "red";
para2.style.textAlign = "center";

//Set the body color to light grey

document.body.style.backgroundColor = "light grey";