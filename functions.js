let saveToStorage = function(gameObject){
    localStorage.setItem('gameRecords',JSON.stringify(gameObject))
}

let loadStorage = function(){
    let info = localStorage.getItem('gameRecords')
    console.log(info)
    return JSON.parse(info)
    }


let scanWord = function(wordArray,hit,visibleWord){
    let ind
    let finds = 0
    for(ind=0; ind <= wordArray.length-1; ind++){
       if(wordArray[ind] === hit){
         visibleWord[ind] = hit
         finds++
       }
    }
  return visibleWord
}

let falseCheck = function(wordArray,hit,wordObject){
  let finds = 0
  let i 
  for(i=0; i<= wordArray.length -1; i++){
    if(wordArray[i] === hit){
      finds++
    }
  }
    if(finds === 0){
      wordObject.attempts--
    }
      return wordObject.attempts
}

let winCheck = function(visibleWord){
  return !visibleWord.includes('_')
  }

let historyListUpdate = function(hit,historyList){
  historyList.push(hit.toUpperCase())
  return `Letters already tested: ${historyList}`
}


