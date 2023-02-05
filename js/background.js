const imgFolder = ["img/img(4).jpg","img/img(1).jpg","img/img(2).jpg","img/img(3).jpg"]
const body = document.querySelector('body')

const randomImg = imgFolder[Math.floor(Math.random() * imgFolder.length)]   

const createImg = document.createElement("img")
createImg.src = `${randomImg}`
document.body.appendChild(createImg)