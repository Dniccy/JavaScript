
document.addEventListener("DOMContentLoaded", function () {
    const chapterSection = document.getElementById("chapter");
    chapterSection.style.backgroundColor = "orange";
    chapterSection.style.padding = "20px";
    chapterSection.style.color = "#9b3c3c";

    const paragraph = document.getElementById("paragraph");
    paragraph.style.color = "green";
    paragraph.style.fontWeight = "bold";

});

document.addEventListener("DOMContentLoaded", function () {
    const highlightParagraphs = document.getElementsByClassName("highlight-paragraph"
    );

    // Modify the styles of the slected elements
    for (let i = 0; i < highlightParagrahps.length; i++) {
        highlightParagrahps[i].style.border = "2px solid purple";
        highlightParagrahps[i].style.borderRadius = "5px";
    }
});
// Selecting the section with the class 'highlight-paragraph'
const section = document.querySelector(".highlight-paragraph");

// Adding an event listener to toggle the highlight on click
section.addEventListener("click", function () {
    // Toggling the 'highlight' class on the section
    this.classList.toggle("highlight");
});

window.onload = addElement;

function addElement() {
    // Create a new section element 
    const newSection = document.createElement("section");

    // Give it some content
    const newContent = document.createTextNode("Hello there and welcome");

    // Add the text node to the newly created section
    newSection.appendChild(newContent);

    // Add the newly created element and its content to the DOM
    const currentSection = document.querySelector("#chapter");
    document.body.insertBefore(newSection, currentSection);
}