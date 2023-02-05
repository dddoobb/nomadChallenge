week = ['일', '월', '화','수','목','금','토'];
const day = document.querySelector("#day")
const time = document.querySelector("#time")

function getDay(){
    const date = new Date(); // 이부분이 반복될 함수 안에 정의되어 있어야 숫자가 바뀜!!
    const year = date.getFullYear()
    const month = date.getMonth() +1
    const dateNum = date.getUTCDate()
    const dayNum = date.getDay()
    const koreanDay = week[dayNum]

    day.innerHTML = `${year}년 ${month}월 ${dateNum}일 ${koreanDay}요일`

}


function getTime(){
    const date = new Date(); // 이부분이 반복될 함수 안에 정의되어 있어야 숫자가 바뀜!!
    const hour = String(date.getHours()).padStart(2,"0")
    const minute = String(date.getMinutes()).padStart(2,"0")
    const second = String(date.getSeconds()).padStart(2,"0")


    time.innerHTML = `${hour}:${minute}:${second}`
}


getDay()
getTime()

setInterval(getTime, 1000)
