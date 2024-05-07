const cardArray = [

    {
        name: 'fries',
        img: 'images/fr.jpg',
        
    },
    {
        name: 'burger',
        img: 'images/burgeerr.jpg',
        
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.jpg',
        
    },
    {
        name: 'icecream',
        img: 'images/ice.jpg',
        
    },
    {
        name: 'milkshake',
        img: 'images/milkshacke.jpg',
        
    },
    {
        name: 'pizza',
        img: 'images/piiz.jpg',
        
    },
    {
        name: 'fries',
        img: 'images/fr.jpg',
        
    },
    {
        name: 'burger',
        img: 'images/burgeerr.jpg',
        
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.jpg',
        
    },
    {
        name: 'icecream',
        img: 'images/ice.jpg',
        
    },
    {
        name: 'milkshake',
        img: 'images/milkshacke.jpg',
        
    },
    {
        name: 'pizza',
        img: 'images/piiz.jpg',
        
    },
    
    
]

cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid')
const resultDisplay = document.querySelector('#result')
let cardChosen = [] 
let cardsChosenId = []
const cardWon = []


function createBoard() {

    for (let i = 0; i< cardArray.length; i++){
        const card = document.createElement('img');
        card.setAttribute('src', 'images/pixel.jpg');
        card.setAttribute('width', '400px');
        card.setAttribute('height', '400px');
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipCard);
        
        gridDisplay.append(card);
    }

}
createBoard()

function chechMatch() {

    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    console.log(cards)

    console.log('Check for match!')
    if (optionOneId == optionTwoId) {
        cards [optionOneId].setAttribute('src', 'images/pixel.jpg.jpg')
        cards [optionTwoId].setAttribute('src', 'images/pixel.jpg')
        alert('You have click the same image!')
    }
    if (cardChosen[0] == cardChosen[1]) {
        alert ('You found a match!')
        cards [optionOneId].setAttribute('src', 'images/star_786766.png')
        cards [optionTwoId].setAttribute('src', 'images/star_786766.png')
        cards [optionOneId].removeEventListener('click',flipCard)
        cards [optionTwoId].removeEventListener('click',flipCard)


        cardWon.push(cardChosen)
    } else {
        cards [optionOneId].setAttribute('src', 'images/pixel.jpg')
        cards [optionTwoId].setAttribute('src', 'images/pixel.jpg')
        alert('Sorry try again')

    }
    resultDisplay.innerHTML = cardWon.length

    cardChosen = []
    cardsChosenId = []

    if (cardWon.length == cardArray.length/2)

    resultDisplay.innerHTML ='Congratulation You Win!'




}

function flipCard() {

    console.log(cardArray)
    const cardId = this.getAttribute('data-id')
    console.log(cardArray[cardId].name)
    cardChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    console.log(cardsChosenId)
    console.log('clicked', cardId)
    console.log(cardChosen)
    this.setAttribute('src', cardArray[cardId].img)

    if (cardChosen.length === 2) {
        setTimeout(chechMatch, 500)
    }


}


    