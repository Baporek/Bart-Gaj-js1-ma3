


// Question 2

const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=9b1c0aec63cb498e8b52ba04d94bf05b";

const htmlResults = document.querySelector(".htmlResults");

async function getRawg(){

const response = await fetch(url);
const itemGroup = await response.json();
const dates = itemGroup.results

htmlResults.innerHTML = "";

for(let i = 0; i< dates.length; i++){
   console.log(dates[i].name);
   console.log(dates[i].rating);
   console.log(dates[i].tags);

if (i===8){
    break;
}

htmlResults.innerHTML += `<div class="htmlResults">${dates[i].name}</div>`
htmlResults.innerHTML += `<div class="htmlResults">${dates[i].rating}</div>`
//htmlResults.innerHTML += `<div class="htmlResults">${dates[i].tags}</div>`


}

}

getRawg();





