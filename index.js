///////////////////
////MODULE-24.3////
///////////////////

// console.log(document);

// // querySelector examples
// const heading = document.querySelector("h1");
// console.log(heading);

// const classSelector = document.querySelector(".value");
// console.log(classSelector);

// const buttonTag = document.querySelector("button");
// console.log(buttonTag);

// const descendantDiv = document.querySelector(".stat div");
// console.log(descendantDiv);

// const greeting = document.querySelector(".hello");
// console.log(greeting);

// // Find all the buttons on the page
// const buttons = document.querySelectorAll("button");
// console.log(buttons);

// // Get a list of all `<h3>` elements
// const heading3List = document.querySelectorAll("h3");

// // Iterate over the list and print each one
// for (let element of heading3List.values()) {
//   console.log(element);
// }
// //OR
// for (let i = 0; i < heading3List.length; i++) {
//   const element = heading3List[i];
//   console.log(element);
// }

// const divRatingsList = document.querySelectorAll("div .rating-display");
// for (let element of divRatingsList.values()) {
//   console.log(element);
// }

// const divAreasList = document.querySelectorAll("div .area-display");
// for (i = 0; i < divAreasList.length; i++) {
//   const element = divAreasList[i];
//   console.log(element);
// }

// Very old browsers (and Internet Explorer in particular)
// don't fully support the NodeList interface. As such, the
// code above may not work as intended. If you need to support
// Internet Explorer, you can use the Array.prototype.forEach() method,
// like this:

// Get a list of descriptions
// const list = document.querySelectorAll(".description-display");

// // Log them to the console
// Array.prototype.forEach.call(list, function (element) {
//   console.log(element);
// });

///////////////////
////MODULE-24.4////
///////////////////

// const descriptions = document.querySelectorAll(".description-display");

// for (let desc of descriptions.values()) {
//   let content = desc.innerText;

//   if (content.length > 250) {
//     content = content.slice(0, 250);
//     content = content + '<a href="#">...</a>';
//   }

//   desc.innerHTML = content;
// }

// const ratings = document.querySelectorAll(".rating-display .value");

// for (let rating of ratings) {
//   let ratingValue = parseFloat(rating.innerText);

//   if (ratingValue > 4.7) {
//     rating.classList.add("high-rating");

//     rating.classList.remove("value");
//   }
// }

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

///////////////////
////MODULE-24.5////
///////////////////

// const firstBtn = document.querySelector("button");

// firstBtn.addEventListener("click", (event) => {
//   console.log("You clicked the button", event);
// });


// Select all the buttons for all the parks
const allBtns = document.querySelectorAll(".rate-button");

// Iterate through the list of buttons and add an event handler to each
allBtns.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    // Add parentNode property to target property shows which button in
    // which section (aka parent element) is getting clicked
    console.log(event.target.parentNode);
  });
});

// function to handler favorite button clicks
const favoriteButtonClickHandler = (event) => {
  const park = event.target.parentNode;
  park.style.backgroundColor = "#c8e6c9";
};

// function for sorting by name
const sortByName = (parkA, parkB) => {
  const parkAName = parkA.querySelector("h2").innerText;
  const parkBName = parkB.querySelector("h2").innerText;
  if (parkAName < parkBName) {
    return -1;
  } else if (parkAName > parkBName) {
    return 1;
  } else {
    return 0;
  }
};

// function for sorting by rating
const sortByRating = (parkA, parkB) => {
  const parkARating = parseFloat(
    parkA.querySelector(".rating-display > .value").innerText
  );
  const parkBRating = parseFloat(
    parkB.querySelector(".rating-display > .value").innerText
  );
  return parkBRating - parkARating;
};

// function for handling the nameSorter click
const nameSorterClickHandler = (event) => {
  event.preventDefault();

  // 1.  get the main element
  const main = document.querySelector("main");

  // 2. get the list of parks
  const parksList = main.querySelectorAll(".park-display");

  // 3. empty the main
  main.innerHTML = "";

  // 4. create an array
  const parksArray = Array.from(parksList);

  // 5. sort the array
  parksArray.sort(sortByName);

  // 6. Insert each park into the DOM
  parksArray.forEach((park) => {
    main.appendChild(park);
  });
};

// function to handle the ratingSorter click
const ratingSorterClickHandler = (event) => {
  event.preventDefault();

  // 1.  get the main element
  const main = document.querySelector("main");

  // 2. get the list of parks
  const parksList = main.querySelectorAll(".park-display");

  // 3. empty the main
  main.innerHTML = "";

  // 4. create an array
  const parksArray = Array.from(parksList);

  // 5. sort the array
  parksArray.sort(sortByRating);

  // 6. Insert each park into the DOM
  parksArray.forEach((park) => {
    main.appendChild(park);
  });
};

/////////////////////////////////
// DOMContentLoaded event handler
console.log("Before!");

window.addEventListener("DOMContentLoaded", (event) => {
  console.log("Loaded!");
});

console.log("After!");

/* 
It is common practice to move code that manipulates the DOM 
into a single DOMContentLoaded event-handler function. You can 
name that function anything that you want. For example, you might 
name it init, ready, or main, as in the example below. Notice how 
main is declared, then passed to window.addEventListener() as the 
event handler:
*/
// The code that runs once the DOM is loaded
const ready = () => {
  // select the nameSorter link
  const nameSorter = document.querySelector("#name-sorter");

  // add an event listener
  nameSorter.addEventListener("click", nameSorterClickHandler);

  // select the ratingSorter link
  const ratingSorter = document.querySelector("#rating-sorter");

  // add an event listener
  ratingSorter.addEventListener("click", ratingSorterClickHandler);

  // select all the buttons for all the parks
  const allBtns = document.querySelectorAll(".rate-button");

  // iterate the list of buttons and add an event handler to each
  allBtns.forEach((btn) => {
    btn.addEventListener("click", favoriteButtonClickHandler);
  });
};

// Add event listener for DOMContentLoaded
window.addEventListener("DOMContentLoaded", ready);
