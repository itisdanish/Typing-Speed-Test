const wording = ["Do you like JavaScript as much as I do?", "Hope you are having fun this is a simple game you can make.", "Source code is included so you can create your own version of this challenge."];

const message = document.querySelector('.message')
const playText = document.querySelector('textarea')
const button = document.querySelector('button')

let sound = new Audio("gun.mp3")

let startTime, endTime

button.addEventListener('click', function(){
    console.log(this.innerText)
    sound.play()
    if(this.innerText == "Start")
    {
        playText.disabled = false
        playGame()
    } 
    else if (this.innerText == "Done")
    {
        playText.disabled = true
        button.innerText = "Start"
        endGame()
    }
})

function endGame()
{
    let date = new Date()
    endTime = date.getTime()
    let totalTime = ((endTime-startTime)/1000)
    
    let str = playText.value
    let wordCount = wordCounter(str)
    let speed = Math.round((wordCount/totalTime)*60)
    let finMsg =`You typed at ${speed} words / min`
    finMsg+= "<br>"+compareWord(message.innerText,str) 
    message.innerHTML=`<h2>${finMsg}</h2>`
    
}
function compareWord(str1,str2)
{
    let words1 = str1.split(" ");
    let words2 = str2.split(" ");
    let cnt = 0
    words1.forEach( function(item,index){
        
        if(item == words2[index]){ cnt++ }
    })
    return (cnt + " correct out of " +words1.length+ " words")
}

function wordCounter(strWords)
{
    let response = strWords.split(" ").length
    return response
}

function playGame()
{
    message.innerHTML= `<h2>${wording[ranText()]}`
    let date = new Date()
    startTime = date.getTime()
    console.log(startTime)
    button.innerText = "Done"
}

function ranText()
{
    return Math.floor(Math.random()*wording.length)
}