let wordObject = loadStorage()

console.log(wordObject)

let visibleWord =[]
let wordArray = []
let historyList = []
let i
let hit

for(i=0;i<=wordObject.word.length-1;i++){
    wordArray[i] = wordObject.word.charAt(i)
}

for(i=0;i<=wordObject.word.length-1;i++){
    visibleWord[i] = '_'
}

document.querySelector('#remaining').textContent = `Attempts Remaining: ${wordObject.attempts} `

document.querySelector('#word-forming').textContent = visibleWord

document.querySelector('#history').textContent = 'Letters already tested: _'

document.querySelector('#reset-button').addEventListener('click',function(e){
    location.assign('/index.html')
})

document.querySelector('#letter-input').addEventListener('submit',function(e){
    
    e.preventDefault()
    hit = e.target.elements.tryLetterElement.value.toLowerCase()

    if(historyList.includes(hit.toUpperCase())){
        document.querySelector('#check-letter').textContent = 'Letter ALREADY tested'
    }
    else if(hit.length ===1 && isNaN(hit)){
    
        document.querySelector('#check-letter').textContent = ''

    wordObject.attempts = falseCheck(wordArray,hit,wordObject)
    visibleWord = scanWord(wordArray, hit, visibleWord)
    document.querySelector('#word-forming').textContent = visibleWord
    document.querySelector('#remaining').textContent = `Attempts Remaining: ${wordObject.attempts}`
    document.querySelector('#history').textContent = historyListUpdate(hit,historyList)
    
      }
      else{
        document.querySelector('#check-letter').textContent = 'No multiple Characters / No numbers'
      }

    e.target.elements.tryLetterElement.value = ''

    if(wordObject.attempts < 1){
        location.assign('/lost.html')
    }

    if(winCheck(visibleWord)){
        location.assign('/win.html')
    }
    
})



