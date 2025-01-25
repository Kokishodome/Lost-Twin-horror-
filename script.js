let boxRandomNumber=Math.random()
let password=Math.floor(Math.random()*899+100)
let doorPassword=''
let img=document.getElementById('img')


console.log(boxRandomNumber);
// Object
let story={
    gameOver:{
        text:'Objective: YOU DIED... or your stupid',
        // array
        choices:[
            {text:'Play again', place:'frontYard'},
            

        ]
    },
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

        text:boxRandomNumber>0.5?'password is '+password:'check the shed',
        choices:[
            
            {text:'Go back', place:'frontYard'},
            

        ]
    },

    shed:{
        text:boxRandomNumber<0.5?'You find the light switch for the house. password is '+password:'You find the light switch for the house',
        choices:[
            // {text:'Turn it on', place:'note'},
            {text:'Go back', place:'frontYard'},
            

        ]
    },

    door:{
        text:'Try to guess the code of the door ',
        choices:[
            // {text:'Turn it on', place:'note'},
            {text:'Try to guess', place:'lock'},
            {text:'Shake it rapidly', place:'keyPad'},
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

    lock:{
        text:'Try to guess',
        choices: [
            {text:'1', place:'house' },
            {text:'2', place:'house'},
            {text:'3', place:'house'},
            {text:'4', place:'house'},
            {text:'5', place:'house'},
            {text:'6', place:'house'},
            {text:'7', place:'house'},
            {text:'8', place:'house'},
            {text:'9', place:'house'},
            {text:'0', place:'house'},

            {text:'Go back', place:'frontYard'},
            
            
        ]
        
    },


   keyPad:{
    text:'shake it rapidly',
    choices: [
            {text:'shake', place:'keyPad'},
            {text:'shake', place:'keyPad'},
            {text:'shake', place:'mainRoom'},
    ]
   },


   mainRoom:{
    text:'you have entered the main room',
    choices: [
             {text:'stay in the main room', place:'mainRoom'},
             {text:'go to the kitchen', place:'kitchen'},
             {text:'go to the basement', place:'basement'},
             {text:'go to the guest room', place:'guestRoom'},
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
    img.src=place+'.jpeg'
    for(let i=0; i<story[place].choices.length; i++){
        let button=document.createElement('button')
        button.innerHTML=story[place].choices[i].text
        buttons.appendChild(button)
        button.onclick=function(){
            if(story[place].choices[i].place=='house' ){
                if( doorPassword.length<3){
                 console.log('guessThePassword');
                 doorPassword=doorPassword+story[place].choices[i].text
                }
                else{
                    if(password==doorPassword){
                        showPlace(story[place].choices[i].place)
                    }
                    else{
                        showPlace('gameOver')
                    }
                }

            }
            else{
                showPlace(story[place].choices[i].place)
            }
            
        }
    } 
}


startGame()

// continue the story

