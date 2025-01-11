let boxRandomNumber=Math.random()
console.log(boxRandomNumber);
// Object
let story={

    frontYard:{
        text:'Objective: Enter the house <br> Place: Front Yard ',
        // array
        choices:[
            {text:'Check the box', place:'box'},
            {text:'Check the shed', place:'shed'},
            {text:'Guess the password of the door', place:'door'},
            {text:'Stay still', place:'stayStill'},
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

    note:{

        text:boxRandomNumber>0.5?'password is skibidi Rizzler ':'check the shed',
        choices:[
            
            {text:'Go back', place:'frontYard'},
            

        ]
    },

    shed:{
        text:boxRandomNumber<0.5?'You find the light switch for the house. password is skibidi Rizzler ':'You find the light switch for the house',
        choices:[
            // {text:'Turn it on', place:'note'},
            {text:'Go back', place:'frontYard'},
            

        ]
    },

    door:{
        text:'Try to guess the code of the door ',
        choices:[
            // {text:'Turn it on', place:'note'},
            {text:'Try to guess', place:'frontYard'},
            {text:'Shake it rapidly', place:'frontYard'},
            {text:'Go back', place:'frontYard'},
            

        ]
    },

    stayStill:{
        text:'just stay there ',
        choices:[
            {text:'Go back', place:'frontYard'},
        ]
    },
    street:{
        text:'You get hit by a car ',
        choices:[ 

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
            showPlace(story[place].choices[i].place)
        }
    } 
}


startGame()

// continue story line and make pictures
