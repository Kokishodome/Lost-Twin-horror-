let story={
    frontYard:{
        text:'Objective: Enter the house <br> Place: Front Yard ',
        choices:[
            {text:'Check the box', place:'box'},
            {text:'Check the shed', place:'shed'},
            {text:'Guess the password of the door', place:'door'},
            {text:'Stay still', place:'frontYard'},
            {text:'Escape the Front Yard', place:'street'},

        ]
    },
    box:{
        text:'You see a note ',
        choices:[
            {text:'See whats inside', place:'note'},
            {text:'Go back', place:'frontYard'},
            

        ]
    },
}
let text=document.getElementById('text')
let buttons=document.getElementById('buttons')
function startGame(){
    showPlace('frontYard')
}

function showPlace(place){
    buttons.innerHTML=''
    text.innerHTML=story[place].text 
    for(let i=0; i<story[place].choices.length; i++){
        let button=document.createElement('button')
        button.innerHTML=story[place].choices[i].text
        buttons.appendChild(button)
        button.onclick=function(){
            showPlace('box')
        }
    } 
}


startGame()