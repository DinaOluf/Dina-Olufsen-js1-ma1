const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
]; 

// Q1 
const cat = {
    complain: function(){
        console.log("Meow!");
    }
}

cat.complain();


// Q2
const heading = document.querySelector("h3");
heading.innerHTML = "Updated heading";


// Q3
heading.style.fontSize = "2em";


// Q4
heading.classList.add("subheading");


// Q5
const paragraphs = document.querySelectorAll("p");

for(let i = 0; i < paragraphs.length; i++){
    paragraphs[i].style.color = "red";
}


// Q6
const resultsContainer = document.querySelector(".results");
resultsContainer.innerHTML = `<p style="background-color: yellow">New paragraph</p>`;


// Q7 
function logListName(list){
for(let i = 0; i < list.length; i++){
    console.log(list[i].name);
}
}

const allCats = logListName(cats);


// Q8 - help...

function createCats(cats){
let listedCats = "";

for(let i = 0; i > cats.length; i++){
    listedCats += "<div>" + cats[i] + "</div>";
    return listedCats;
}
const finalCats = "<h5>" + listedCats + "</h5>";
return finalCats;
}

const listOfCats = createCats(cats);
console.log(listOfCats);

const catContainer = document.querySelector(".cat-container");
catContainer.innerHTML = listOfCats;
