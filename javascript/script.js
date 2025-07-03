/*Alert function learning 
window.onload = function() {
    alert ("I'm learning JavaScript be kind");
    console.log("The web page has loaded");
}
//Text change learning 
function changeText() {
    var heading = document.getElementById("demo")
    heading.textContent = "See I'm learning!";    
}
//Variables learning
var myAge = 29;

if (myAge >=18){
    console.log ("You are and adult.");
} else {
    console.log("You are a minor.");
}

//Age restriction
var myAge = 29;

if (myAge >= 18) {
    document.getElementById("adultContent").style.display = "block";
} else {
    document.getElementById("minorContent").style.display = "block";
}*/

let library = [
"Harry Potter",
"Lord of the Rings",
"Cat in the hat",
"Hunger Games",
"Game of Thrones"
];

function searchBook (){
    let searchInput = document.getElementById('searchInput').value.toLowerCase();
    let searchResult = document.getElementById('searchResult');
    searchResult.innerHTML = '';

    let foundBooks = [];

    for (let i = 0; i < library.length; i++){
        if (library[i].toLowerCase().includes(searchInput)){
            foundBooks.push(library[i]);
        }
    }

    if (foundBooks.length > 0) {
        for(let i = 0; i < foundBooks.length; i++){
            let bookInfo = document.createElement('p');
            bookInfo.textContent = foundBooks[i];
            searchResult.appendChild(bookInfo);
        }
    } else {
        let noResultMsg = document.createElement('p');
        noResultMsg.textContent = 'No matching books found';
        searchResult.appendChild(noResultMsg);
    }
}

document.getElementById('addBookForm').addEventListener('submit, addBook');
displayBooks();
