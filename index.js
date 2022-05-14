

let player = {
    name: "Per",
    chips: 145
}

let messageEl = document.getElementById('message-el')
let message = ""
let sumEl = document.getElementById('sum-el')
let cardsEl = document.getElementById('cards-el')
let playerEL = document.getElementById("player-el")
let cards = []
let sum = 0


playerMessage = player.name + " : $" + player.chips
playerEL.textContent = playerMessage 

function renderGame(cards){
    const btnState = document.getElementById('new-btn')
    cardList = ""
    sum = 0
    for (let i =0; i<cards.length;i++){
        cardList+=  cards[i] + ' '
        sum += cards[i]

    }
    // cards = firstCard + ' and ' + secondCard
    cardsEl.textContent = 'Cards: ' + cardList 

    if (sum <= 20){
        message = "Do you want to draw a new card?"
        btnState.disabled = false
    
    } else if(sum === 21){
        message = "BLACKJACK"
        hasBlackJack = true
        btnState.disabled = true
        player.chips += 200
    
    } else {
        message = "You lost!"
        isAlive = false
        btnState.disabled = true 
        player.chips -= 10
    
    }
    console.log(message)
    messageEl.textContent = message

    sumMessage = 'Sum: ' + sum
    sumEl.textContent = sumMessage

    playerMessage = player.name + " : $" + player.chips
    playerEL.textContent = playerMessage 

}

function newcard(){
    
    let newCard = getRandomCard()
    cards.push(newCard)
    renderGame(cards)


}

function startGame(){
    let hasBlackJack = false
    let isAlive = true
    player.chips -= 2
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()

    cards = [firstCard , secondCard]
    renderGame(cards)
}

function getRandomCard(){
    card = Math.floor((Math.random() * 13) + 1 )
    if (card === 1){
        card = 11
    } else if (card > 10){
        card = 10
    }
    return card
}