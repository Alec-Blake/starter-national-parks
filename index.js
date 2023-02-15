///////////////////
////MODULE-24.3////
///////////////////

/*
console.log(document);

// querySelector examples
const heading = document.querySelector("h1");
console.log(heading);

const classSelector = document.querySelector(".value");
console.log(classSelector);

const buttonTag = document.querySelector("button");
console.log(buttonTag);

const descendantDiv = document.querySelector(".stat div");
console.log(descendantDiv);

const greeting = document.querySelector(".hello");
console.log(greeting);


// Find all the buttons on the page
const buttons = document.querySelectorAll("button");
console.log(buttons);


// Get a list of all `<h3>` elements
const heading3List = document.querySelectorAll("h3");

// Iterate over the list and print each one
for (let element of heading3List.values()) {
  console.log(element);
}
//OR
for (let i = 0; i < heading3List.length; i++) {
    const element = heading3List[i];
    console.log(element);
  }

const divRatingsList = document.querySelectorAll("div .rating-display");
for (let element of divRatingsList.values()) {
    console.log(element);
}

const divAreasList = document.querySelectorAll("div .area-display");
for (i = 0; i < divAreasList.length; i++) {
    const element = divAreasList[i];
    console.log(element);
}

// Very old browsers (and Internet Explorer in particular)
// don't fully support the NodeList interface. As such, the 
// code above may not work as intended. If you need to support 
// Internet Explorer, you can use the Array.prototype.forEach() method, 
// like this: 


// Get a list of descriptions
const list = document.querySelectorAll(".description-display");

// Log them to the console
Array.prototype.forEach.call(list, function (element) {
  console.log(element);
});
*/

///////////////////
////MODULE-24.4////
///////////////////
const descriptions = document.querySelectorAll(".description-display");

for (let desc of descriptions.values()) {
  let content = desc.innerText;

  if (content.length > 250) {
    content = content.slice(0, 250);
    content = content + '<a href="#">...</a>';
  }

  desc.innerHTML = content;
}

const ratings = document.querySelectorAll(".rating-display .value");

for (let rating of ratings) {
  let ratingValue = parseFloat(rating.innerText);

  if (ratingValue > 4.7) {
    rating.classList.add("high-rating");

    rating.classList.remove("value");
  }
}

// Suppose that you wanted to dynamically add a statement to the page's
// heading, stating the number of parks on display.

// First, select the parks on the page using the park class as a selector:
const parks = document.querySelectorAll(".park-display");

// Then, get the number of parks using the length property of the list:
const numberParks = parks.length;

// Next, create a new element. In this case, you should use a <div>:
const newElement = document.createElement("div");

/*
This creates an empty element. But, you have access to 
all the properties and methods that were used above 
to modify an element. You can set the text of this element 
with the innerText property, like this: 
*/
newElement.innerText = `${numberParks} exciting parks to visit`;

/*
You can also style this new element with either the 
style property or the classList property. Create a new 
CSS rule for the class header-statement in the style.css file 
*/
newElement.classList.add("header-statement");

/*
Finally, to add the new element to the DOM, select the <header> 
element and use the appendChild() method to add the new element 
to the <header>, as shown below.
*/
const header = document.querySelector("header");
header.appendChild(newElement);

// Removing DOM elements
// Get the parent element of all parks
const main = document.querySelector("main");

// Select a single park
const park = main.querySelector(".park-display");

// Remove that park
// main.removeChild(park);
