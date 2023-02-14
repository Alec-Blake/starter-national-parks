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

