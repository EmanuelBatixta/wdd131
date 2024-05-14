const cyear = document.querySelector('#currentyear')
const today = new Date()
cyear.innerHTML = `©️ <span id="currentyear">${today.getFullYear()}</span>
`


let modified = document.lastModified
const olastmodified = document.querySelector('#lastModified')
olastmodified.innerHTML = `Last Modification:  ${modified}`