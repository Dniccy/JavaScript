
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
    const highlightParagrahps = document.getElementsByClassName("highlight-paragraph"
    );

    // Modify the styles of the slected elements
    for (let i = 0; i < highlightParagrahps.length; i++) {
        highlightParagrahps[i].style.border = "2px solid yellow";
        highlightParagrahps[i].style.borderRadius = "5px";
    }
});