// insert the year
// add a point in the currentyear 'id'
const year = document.querySelector("#currentyear")
// adding the date
const today = new Date()
// insert the text in HTML
year.innerHTML = `©️ <span id="currentyear">${today.getFullYear()}</span>`;

let oLastModif = document.lastModified;
document.querySelector("#lastModified").innerHTML = `Last Modification: ${oLastModif}`;
