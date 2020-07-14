document.addEventListener('DOMContentLoaded',()=>{

    const cardsArray = [
    {
        name:"blue",
        img:"images/blue.png"
    },
    {
        name:"blue",
        img:"images/blue.png"
    },
    {
        name:"green",
        img:"images/green.png"
    },
    {
        name:"green",
        img:"images/green.png"
    },
    {
        name:"grey",
        img:"images/grey.png"
    },
    {
        name:"grey",
        img:"images/grey.png"
    },
    {
        name:"maroon",
        img:"images/maroon.png"
    },
    {
        name:"maroon",
        img:"images/maroon.png"
    },
    {
        name:"pink",
        img:"images/pink.png"
    },
    {
        name:"pink",
        img:"images/pink.png"
    },
    {
        name:"yellow",
        img:"images/yellow.png"
    },
    {
        name:"yellow",
        img:"images/yellow.png"
    }
    ];
    // const vehicleCardsArray = [
    //       { name:"cementmixer",
    //       img:"images/cementmixer.png"},
    //       { name:"cementmixer",
    //       img:"images/cementmixer.png"},

    //       { name:"crane",
    //       img:"images/crane.png"},
    //       { name:"crane",
    //       img:"images/crane.png"},

    //       { name:"digger",
    //       img:"images/digger.jpg"},
    //       { name:"digger",
    //       img:"images/digger.jpg"},

    //       { name:"dumptruck",
    //       img:"images/dumptruck.jpg"},
    //       { name:"dumptruck",
    //       img:"images/dumptruck.jpg"},

    //       { name:"jcb",
    //       img:"images/jcb.jpeg"},
    //       { name:"jcb",
    //       img:"images/jcb.jpeg"},         

    //       { name:"roadroller",
    //       img:"images/roadroller.jpeg"},
    //       { name:"roadroller",
    //       img:"images/roadroller.jpeg"}
        
    // ];
    // For every game load shuffle the cards
   // cardsArray.sort(()=>0.5-Math.random());
   cardsArray.sort(()=>0.5-Math.random());

     //Get grid and result elements from the DOM
     const grid = document.querySelector('.grid');
     const result = document.querySelector('#result');
  
    //Declare empty array for chosen cards.
    var cardsChosen = [];
    var cardsChosenId =[];
    var cardsWon = [];
   

    //Check For match
    function checkForMatch(){
        var cards = document.querySelectorAll('img');
        const optionOneId = cardsChosenId[0];
        const optionTwoId = cardsChosenId[1];
        if(cardsChosen[0] === cardsChosen[1]){
            alert('You found a match..');
            cards[optionOneId].setAttribute('src','images/blank.png');
            cards[optionTwoId].setAttribute('src','images/blank.png');
            cardsWon.push(cardsChosen);
          
        }
        else{
            cards[optionOneId].setAttribute('src','images/topSide.png');
            cards[optionTwoId].setAttribute('src','images/topSide.png');
            alert('Sorry, try again..');
        }          
        cardsChosen = [];
        cardsChosenId = [];
        result.textContent = cardsWon.length;
            
        if(cardsWon.length === cardsArray.length/2){
            result.textContent = 'Congratulations!! You found all the cards.'
        }
        
    }

    // When a card is flipped
    function flipSide(){
        var cardId = this.getAttribute('data-id');       
        cardsChosen.push(cardsArray[cardId].name);
        cardsChosenId.push(cardId);
        this.setAttribute('src',cardsArray[cardId].img);
        if(cardsChosen.length === 2){
            setTimeout(checkForMatch,500);
        }
    }

    //Function for creating game board
    function createGameBoard(){
        for(let i=0;i<cardsArray.length;i++){
            var card = document.createElement('img');
            card.setAttribute('src','images/topSide.png');
            card.setAttribute('data-id',i);
           // card.setAttribute('style','border:2px');
            card.addEventListener('click', flipSide);
           grid.appendChild(card);
        }        
    }
    createGameBoard();
});