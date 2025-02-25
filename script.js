let boxRandomNumber=Math.random()
let password=Math.floor(Math.random()*899+100)
let doorPassword=''
let img=document.getElementById('img')
let apple=false
let creature=false
let shake=Math.random()>0.5 ? true:false
let shakeCounter=0
let iframe=document.getElementById('iframe')


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
            {text:'shake', place:'house'},  
    ]
   },


   house:{
    text:'you have entered the house',
    choices: [
             {text:'stay in the main room', place:'mainRoom'},
             {text:'go to the kitchen', place:'kitchen'},
             {text:'go to the basement', place:'basement'},
             {text:'go to the guest room', place:'guestRoom'},
             {text:'go upstairs', place:'upstairs'},

    ]
   },



   mainRoom:{
    text:'You see a torn up couch with someting underneath',
    choices: [
        {text:'look under the couch', place:'couch'},
        {text:'go back', place:'house'},
    ]
   },

   couch:{
    text:'You see a strange creature',
    choices: [
        {text:'take it with you', place:'house'},
        {text:'leave it there and go', place:'house'},
    ]
   },


   kitchen:{
    text:'There is a table and fridge',
    choices: [
        {text:'check the fridge', place:'fridge'},
        {text:'check the table', place:'table'},
        {text:'check the oven', place:'oven'},
        {text:'go back', place:'house'},
    ]
   },

    fridge:{
        text:'Theres an apple, a sandwich and a half eaten cake',
        choices: [
            // if you eat the apple you slow down at the end
            {text:'take the apple', place:'fridge'},
            {text:'take the sandwich', place:'fridge'},
            {text:'take the cake', place:'fridge'},
            {text:'go back', place:'kitchen'},
            
        ]
    },

    table:{
        text:'you can place whatever you want here',
        choices: [
            {text:'go back', place:'kitchen'},
        ]
    },

    oven:{
        text:'Dont go in the basement...',
        choices: [
            {text:'go back', place:'kitchen'},
            
        ]
    },


    basement:{
        text:'A monster kills you <br> why did you check the basement?',
    },


    guestRoom:{
        text:'You see two empty bunk beds',
        choices: [
            {text:'go back', place:'house'},
        ]
    },


    upstairs:{
        // later on you will not be able to access upstairs if you haven't checked the rooms yet
        text:'Your upstairs, its dark but there is no light swich? <br> there is a flashlight instead',
        choices: [
            {text:'take the flashlight and keep going', place:'corridor'},
            {text:'go back', place:'mainRoom'},
        ]
    },
   
    corridor:{
        text:'Wh@t wi11 y0u ch00s£?',
        choices: [
            {text:'go left', place:'leftRoom'},
            {text:'go right', place:'rightDoor'},
            
        ]
    },

    leftRoom:{
        text:'there is a utility room, looks like there is dog food',
        choices: [
            // if your ghost is full the feed button will be blocked
            {text:'feed your ghost friend', place:'leftRoom'},
            {text:'investigate further', place:'utilityRoom'},
            {text:'go back', place:'corridor'},
            
        ]
    },

    utilityRoom:{
        text:'You see a dark figure <br> sounds like they are Crying...',
        choices: [
            {text:'check on them', place:'utilityCorner'},
            {text:'go back', place:'leftRoom'},
            
        ]
    },

    utilityCorner:{
        text:'Its a little girl, <br> she is infact crying',
        choices: [
            {text:'take the girl with you', place:'corridorTwo'},
            {text:'go back', place:'corridor'},
            
        ]
    },


    rightDoor:{
        text:'The sign on the door says, my name?',
        choices: [
            {text:'open the door', place:'rightRoom'},
            {text:'go back', place:'corridor'},
            
        ]
    },

    rightRoom:{
        text:'There is a small kids table but also a...<br> br0k3n w1nD0w?...',
        choices: [
            {text:'check the table', place:'kidTable'},
            {text:'check the window', place:'window'},
            {text:'go back', place:'corridor'},
            
        ]
    },

    kidTable:{
        text:'there is a small paper',
        choices: [
            {text:'look and see what is shows', place:'rightRoomPaper'},
            {text:'go back', place:'rightRoom'},
            
        ]
    },

    rightRoomPaper:{
        text:'it shows a little boy and girl playing <br> in the garden (who could that be?)',
        choices: [
            {text:'go back', place:'rightRoom'},
            
        ]
    },

    window:{
        text:'its broken, be careful around the glass',
        choices: [
            {text:'look outside', place:'brokenWindow'},
            {text:'go back', place:'rightRoom'},
            
        ]
    },

    brokenWindow:{
        text:'looks like... <br> there is blood at the very bottom',
        choices: [
            {text:'go back', place:'rightRoom'},
            
        ]
    },



    corridorTwo:{
        text:'G0 b@ck d0wn',
        choices: [
            {text:'go right', place:'rightDoor'},
            {text:'go down', place:'main'}
            
        ]
    },

    main:{
        text:'its the same as before, but...more strange.',
        choices: [
            {text:'G0 t0 th3 m@1n ro0m', place:'mainRoomTwo'},
            {text:'G0 t0 th3 k1tch3n', place:'kitchenTwo'},
            {text:'G0 t0 th3 gu3st ro0m', place:'guestRoomTwo'},
            {text:'G0 t0 th3 b@s3m3nt', place:'basementTwo'},
            {text:'G0 t0 th3 fr0nt d00r', place:'doorTwo'},
            
        ]
    },

    mainRoomTwo:{
        text:'Instead of a couch now there is <br> strange green liquid all over',
        choices: [
            {text:'touch the weird goo', place:'greenLiquid'},
            {text:'go back', place:'main'},
            
        ]
    },

    greenLiquid:{
        text:'wHy d1d y0u t0ucH th3 l1qu1d? <br> you just died idiot.',

    },

    kitchenTwo:{
        text:'its the same kitchen as before but... <br> someting feels off.',
        choices: [
            {text:'ch3ck th3 fr1dge', place:'fridgeTwo'},
            {text:'ch3ck th3 t@bl3', place:'tableTwo'},
            {text:'ch3ck th3 0v3n', place:'ovenTwo'},
            {text:'g0 b@ck', place:'main'},
            
        ]
    },

    fridgeTwo:{
        text:'1s th@t... bl00d dr1pp1ng?',
        choices: [
            {text:'go back', place:'kitchenTwo'},
            
        ]
    },

    tableTwo:{
        text:'there is a note?',
        choices: [
            {text:'see what it says', place:'tableNote'},
            {text:'go back', place:'kitchenTwo'},
            
        ]
    },

    tableNote:{
        text:'get out the house... <br> N0W!',
        choices: [
            {text:'go back', place:'kitchenTwo'},
            
        ]
    },

    ovenTwo:{
        text:'there is chicken, with... green goo?',
        choices: [
            {text:'go back', place:'kitchenTwo'},
            
        ]
    },

    guestRoomTwo:{
        text:'there are the same bunk beds but, they are covered in <br> bl00d!?',
        choices: [
            {text:'go back', place:'main'},
            
        ]
    },
    

    basementTwo:{
        text:'there is nothing but an envalope on the floor.',
        choices: [
            {text:'open the envelope', place:'envelope'},
            
        ]
    },

    envelope:{
        text:'there is a key, what is it for?',
        choices: [
            {text:'take it and go back', place:'main'},
            
        ]
    },

    doorTwo:{
        text:'th3r3 @r3 ch@1ns l0ck1ng th3 d00r',
        choices: [
            {text:'pull them off', place:'pullChains'},
            {text:'find a key to the lock', place:'doorKey'},
            {text:'go back', place:'main'},
            
        ]
    },

    pullChains:{
        text:'it doesnt work, the chains are metal',
        choices: [
            {text:'go back', place:'doorTwo'},
            
        ]
    },

    doorKey:{
        text:'you have the key but the little girl tells you not to use it',
        choices: [
            {text:'follow her', place:'followGirl'},
            
        ]
    },

    followGirl:{
        text:'You are back upstairs, but you only see one door this time...',
        choices: [
            {text:'y0u h@v3 t0 g0 1n', place:'twinRoom'},
            
        ]
    },

    twinRoom:{
        text:'y0u s33 @ str@ng3 f1gur3, n0 1t c@nt b3... <br> 1ts y0ur tw1n.',
        choices: [
            {text:'go back', place:'runCorridor'},
            
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
            if(story[place].choices[i].place=='runCorridor'){
                  iframe.style.width = '100%'
            }
            if(story[place].choices[i].text=='shake'){
                shakeCounter++
                if(shakeCounter==3){
                   if(shake){
                     showPlace('house')
                   }
                   else{
                    showPlace('gameOver')
                   }
                }

            }
            if(story[place].choices[i].text=='take it with you'){
                creature=true
                console.log(creature);
            }
            if(story[place].choices[i].text=='take the apple'){
              apple=true
              console.log(apple);
            }
            if(story[place].choices[i].place=='house' && place=='lock' ){
                if( doorPassword.length<2){
                 console.log('guessThePassword');
                 doorPassword=doorPassword+story[place].choices[i].text
                }
                else{
                    doorPassword=doorPassword+story[place].choices[i].text
                    console.log('doorPassword',doorPassword);
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

