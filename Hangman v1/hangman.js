let gameInputs = {
    word: '',
    attempts: -1
}


document.querySelector('#word-set-input').addEventListener('input',function(e){
    gameInputs.word = e.target.value.toLowerCase()
})


document.querySelector('#tries-set-input').addEventListener('input',function(e){
 
    gameInputs.attempts = parseInt(e.target.value)
    if(isNaN(gameInputs.attempts)){
     document.querySelector('#tries-warning').textContent = 'You must enter a NUMBER'
    }
    else{
        document.querySelector('#tries-warning').textContent = ''
    }
})

document.querySelector('#submit-button').addEventListener('click',function(e){
    saveToStorage(gameInputs)
    location.assign(`/game.html`)
})
